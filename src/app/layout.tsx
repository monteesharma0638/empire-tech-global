import type { Metadata, Viewport } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Industrial, Warehouse & Institutional Construction, Jaipur`,
    template: `%s — ${site.name}`,
  },
  description:
    "Jaipur-based construction and project delivery company building factories, warehouses, schools, colleges, hospitals and townships across Rajasthan and the NCR industrial belt. Engineered right, cleared right, delivered on time.",
  keywords: [
    "industrial construction Jaipur",
    "warehouse construction Rajasthan",
    "factory shed construction",
    "hospital construction company",
    "school building construction Jaipur",
    "PEB contractor Rajasthan",
    "turnkey project delivery",
  ],
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} — Industrial, Warehouse & Institutional Construction`,
    description:
      "We build what industries and institutions depend on — engineered right, cleared right, delivered on time.",
    // Dimensions come from the manifest so they can't drift from the real file.
    images: [
      {
        url: img.ogImage.src,
        width: img.ogImage.w,
        height: img.ogImage.h,
        alt: img.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Industrial & Institutional Construction, Jaipur`,
    description: "Engineered right · Cleared right · Delivered on time.",
    images: [img.ogImage.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#171B39",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.legalName,
  alternateName: site.name,
  slogan: site.tagline,
  description:
    "Industrial, warehouse and institutional construction and project delivery — factories, warehouses, schools, colleges, hospitals and townships.",
  url: site.url,
  logo: `${site.url}/brand/logo-full.png`,
  image: img.ogImage.src,
  email: site.email,
  telephone: site.phones.map((p) => p.label),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: [
    { "@type": "State", name: "Rajasthan" },
    { "@type": "Place", name: "National Capital Region, India" },
  ],
  founder: site.directors.map((d) => ({
    "@type": "Person",
    name: d.name,
    jobTitle: d.role,
  })),
  knowsAbout: [
    "Industrial facility construction",
    "Warehouse and logistics park construction",
    "School and college construction",
    "Hospital construction",
    "Township development",
    "Structural engineering to IS 456, IS 800, IS 1893",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-none focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
