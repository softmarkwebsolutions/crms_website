import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { ContactPopup } from "@/components/sections/ContactPopup";
import { DemoModal } from "@/components/sections/DemoModal";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, type: "website", siteName: site.name },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${space.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ThemeShell>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <ContactPopup />
        <DemoModal />
        </ThemeShell>
      </body>
    </html>
  );
}
