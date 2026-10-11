import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader, Overpass } from "next/font/google";
import { brand, people } from "@/content";
import "./globals.css";

const display = Overpass({ subsets: ["latin"], weight: ["400", "600", "800"], variable: "--font-display" });
const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: `${brand.name} · Web apps and the data behind them`,
  description: `${people.maha.name} (full-stack web) and ${people.nouman.name} (data engineering and SQL): one team for your web app and its data layer.`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f1719" },
    { media: "(prefers-color-scheme: light)", color: "#eef0ec" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a href="#problems" className="skip">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
