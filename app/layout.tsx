import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waleedsimmings.github.io"),
  title: "Waleed Tahir — Senior FullStack Engineer",
  description: profile.summary,
  authors: [{ name: profile.name, url: profile.linkedin }],
  keywords: [
    "Waleed Tahir",
    "Senior FullStack Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Islamabad",
  ],
  openGraph: {
    title: "Waleed Tahir — Senior FullStack Engineer",
    description: profile.summary,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Tahir — Senior FullStack Engineer",
    description: profile.summary,
  },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: "+92-335-9495771",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "AWS", "Redis"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <link rel="me" href={profile.linkedin} />
        <link rel="me" href={profile.github} />
      </head>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <div className="scroll-progress" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
