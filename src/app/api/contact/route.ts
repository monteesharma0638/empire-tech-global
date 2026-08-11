import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const MAX = { name: 120, org: 160, phone: 32, email: 200, location: 160, message: 4000 };

type Payload = {
  name?: string;
  org?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  location?: string;
  scale?: string;
  message?: string;
  /** Honeypot — real people never fill this in. */
  website?: string;
};

const PROJECT_TYPES = [
  "Factory / industrial",
  "Warehouse / logistics park",
  "School",
  "College",
  "Hospital",
  "Township",
  "Something else",
];

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bot trap: silently accept so the bot doesn't learn anything, but send nothing.
  if (clean(body.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const org = clean(body.org, MAX.org);
  const phone = clean(body.phone, MAX.phone);
  const email = clean(body.email, MAX.email);
  const location = clean(body.location, MAX.location);
  const scale = clean(body.scale, 80);
  const message = clean(body.message, MAX.message);
  const projectType = PROJECT_TYPES.includes(clean(body.projectType, 80))
    ? clean(body.projectType, 80)
    : "Not specified";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Enter your name.";
  if (!phone && !email) errors.phone = "Add a phone number or an email so we can reply.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Check the email address.";
  if (phone && phone.replace(/\D/g, "").length < 7)
    errors.phone = "Check the phone number.";
  if (message.length < 10) errors.message = "Tell us a little about the project.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;
  // Until a domain is verified in Resend, onboarding@resend.dev only delivers
  // to the Resend account owner's own address.
  const from = process.env.CONTACT_FROM ?? "EmpireTech Global <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — enquiry was not delivered.", {
      name,
      phone,
      email,
    });
    return NextResponse.json(
      { error: "Email is not configured yet. Please call us instead." },
      { status: 503 }
    );
  }

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Organisation", org || "—"],
    ["Phone", phone || "—"],
    ["Email", email || "—"],
    ["Project type", projectType],
    ["Location", location || "—"],
    ["Size / budget", scale || "—"],
  ];

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#171B39;max-width:640px">
      <p style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#B68843;margin:0 0 6px">
        New project enquiry
      </p>
      <h1 style="font-size:22px;margin:0 0 20px;font-weight:600">${escapeHtml(name)}${
        org ? ` — ${escapeHtml(org)}` : ""
      }</h1>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([k, v]) => `<tr>
              <td style="padding:8px 14px 8px 0;color:#5C6178;white-space:nowrap;vertical-align:top;border-bottom:1px solid #E4DED4">${k}</td>
              <td style="padding:8px 0;border-bottom:1px solid #E4DED4">${escapeHtml(v)}</td>
            </tr>`
          )
          .join("")}
      </table>
      <p style="margin:24px 0 6px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#5C6178">Message</p>
      <p style="white-space:pre-wrap;line-height:1.6;font-size:14px;margin:0">${escapeHtml(message)}</p>
      <p style="margin-top:28px;font-size:12px;color:#5C6178">Sent from the ${escapeHtml(
        site.name
      )} website.</p>
    </div>`;

  const text = [
    `New project enquiry`,
    ``,
    ...rows.map(([k, v]) => `${k}: ${v}`),
    ``,
    `Message:`,
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Project enquiry — ${name}${org ? ` (${org})` : ""}`,
      replyTo: email || undefined,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return NextResponse.json(
        { error: "We could not send that just now. Please call us instead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected failure:", err);
    return NextResponse.json(
      { error: "We could not send that just now. Please call us instead." },
      { status: 500 }
    );
  }
}
