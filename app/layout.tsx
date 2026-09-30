import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waleedsimmings.github.io"),
  title: "Waleed Tahir — Senior FullStack Engineer",
  description: profile.summary,
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: "Waleed Tahir — Senior FullStack Engineer",
    description: profile.summary,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#070c09",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${dmSans.variable} ${playfair.variable}`}>
      <body>
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-[#101112]"
          href="#content"
        >
          Skip to content
        </a>
        <div className="site-shell min-h-screen">
          <div className="editorial-shell">{children}</div>
        </div>
      </body>
    </html>
  );
}
