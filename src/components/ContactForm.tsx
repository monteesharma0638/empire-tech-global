"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, AlertCircle, Loader2 } from "lucide-react";

const PROJECT_TYPES = [
  "Factory / industrial",
  "Warehouse / logistics park",
  "School",
  "College",
  "Hospital",
  "Township",
  "Something else",
];

type Errors = Record<string, string>;

const field =
  "w-full border border-rule bg-paper-pure px-4 py-3.5 font-sans text-base text-ink transition-colors duration-300 placeholder:text-muted/50 focus:border-gold focus:outline-none";

const labelCls = "eyebrow block text-muted";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrors({});
    setFormError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      if (res.status === 422 && json.errors) {
        setErrors(json.errors);
        setStatus("idle");
        return;
      }
      setFormError(json.error ?? "Something went wrong. Please call us instead.");
      setStatus("error");
    } catch {
      setFormError("Check your connection and try again, or call us instead.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="tick-frame border border-gold/50 bg-paper-pure p-10 text-center"
      >
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold/15">
          <Check className="size-7 text-gold-dim" strokeWidth={2} />
        </span>
        <h3 className="mt-6 text-2xl text-ink">Enquiry received</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
          One of our directors will call you back. If it is urgent, ring
          +91&nbsp;96721&nbsp;19046 and ask for the project desk.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rule-link mt-8 font-sans text-[0.8125rem] uppercase tracking-[0.12em] text-gold-dim"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Honeypot — visually and programmatically hidden from real users */}
      <div aria-hidden className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Your name <span className="text-gold-dim">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${field} mt-3 ${errors.name ? "border-red-700" : ""}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="org" className={labelCls}>
            Company or trust
          </label>
          <input
            id="org"
            name="org"
            autoComplete="organization"
            placeholder="Optional"
            className={`${field} mt-3`}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone <span className="text-gold-dim">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${field} mt-3 ${errors.phone ? "border-red-700" : ""}`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-red-700">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${field} mt-3 ${errors.email ? "border-red-700" : ""}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-700">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className={labelCls}>
            What are you building?
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className={`${field} mt-3 appearance-none`}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="location" className={labelCls}>
            Site location
          </label>
          <input
            id="location"
            name="location"
            placeholder="City or district"
            className={`${field} mt-3`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="scale" className={labelCls}>
          Approximate size or budget
        </label>
        <input
          id="scale"
          name="scale"
          placeholder="e.g. 40,000 sq ft, or ₹6 crore — a rough figure is fine"
          className={`${field} mt-3`}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          About the project <span className="text-gold-dim">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What you want to build, where the land is, and where you are in the process."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field} mt-3 resize-y ${errors.message ? "border-red-700" : ""}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <AnimatePresence>
        {formError && (
          <motion.p
            role="alert"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 border border-red-700/30 bg-red-50 p-4 text-sm text-red-800"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" strokeWidth={2} />
            {formError}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-3 bg-ink px-8 py-4.5 font-sans text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-paper transition-colors duration-500 hover:bg-gold hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" strokeWidth={2} />
              Sending
            </>
          ) : (
            <>
              Send enquiry
              <span
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </>
          )}
        </button>
        <p className="text-sm text-muted">
          We reply within one working day.
        </p>
      </div>
    </form>
  );
}
