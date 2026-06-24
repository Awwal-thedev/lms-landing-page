import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  axes: ["opsz"], // optical sizing → large headings use the "Display" cut
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f6f5f3]">{children}</body>
    </html>
  );
}
