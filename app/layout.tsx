import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mustafa Bhatti — AI/ML Engineer",
  description:
    "Junior AI/ML engineer building AI integrations and workflow automation that run day-to-day business operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-[100dvh] bg-[#FAF6EC] text-[#1A1A1A] font-sans antialiased selection:bg-[#D69E2E] selection:text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
