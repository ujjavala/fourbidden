import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import SiteNav from "./components/site-nav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  title: "JustOneMoreStep",
  description: "You are almost there. Probably.",
  icons: {
    icon: "/justonemorestep-logo-design.png",
    apple: "/justonemorestep-logo-design.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${sora.variable}`}>
        <SiteNav />
        {children}
        <footer className="site-legal" aria-label="Terms, conditions, and privacy satire">
          <div className="site-legal-inner">
            <p className="label">GLOBAL TERMS, PRIVACY, ETHICS, AND VIBES</p>
            <p>
              By continuing to exist near this interface, you acknowledge the JustOneMoreStep
              Master Service Framework, Addendum Pack 7, and the Continuous Arithmetic Assurance
              Charter. Our multi-agent compliance orchestra may collect signals including taps,
              pauses, scroll depth, eyebrow movements (estimated), and confidence posture for the
              exclusive purpose of delivering more steps than requested.
            </p>
            <p>
              Privacy Notice (Premium Edition): yes, we all know privacy is a joke, and that is
              exactly the joke we are making here. We do not promise clarity; we promise impressive
              legal tone, strategic ambiguity, and enterprise-grade over-explanation featuring
              retrieval pipelines, transformer governance, and ceremonial consent loops.
            </p>
            <p>
              If anything here sounded unreasonable, that means our legal UX is working as designed.
              For questions, submit Form J-42, then wait for one more model review cycle.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
