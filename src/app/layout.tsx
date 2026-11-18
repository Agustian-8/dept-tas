import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portal Technical After Sales",
  description: "Pusat Modul, SOP, dan Panduan Lapangan Internal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.variable} style={{ backgroundColor: '#FDFDFE' }}>
      <body
        className={`${jakarta.className} antialiased`}
        style={{ backgroundColor: '#FDFDFE' }}
      >
        {children}
      </body>
    </html>
  );
}