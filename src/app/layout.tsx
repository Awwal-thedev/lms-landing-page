import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const overusedGrotesk = localFont({
  src: "./fonts/OverusedGrotesk-VF.woff2",
  variable: "--font-grotesk",
  display: "swap",
  weight: "300 900",
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
      className={`${overusedGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f6f5f3]">{children}</body>
    </html>
  );
}
