import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Inter with the optical-size axis → large headings render the "Inter Display"
// optical cut automatically (via font-optical-sizing: auto on .font-display).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  axes: ["opsz"],
});

const aspekta = localFont({
  src: "./fonts/AspektaVF.woff2",
  variable: "--font-aspekta",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Theraptly — Training & Compliance for Care Teams",
  description:
    "Theraptly is the all-in-one LMS for therapy and care organizations — staff training, certifications, audit-ready reporting, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${aspekta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f6f5f3]">{children}</body>
    </html>
  );
}
