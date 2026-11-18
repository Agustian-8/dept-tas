import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Technical After Sales — Portal Departemen",
    template: "%s | Technical After Sales",
  },
  description:
    "Portal internal Technical After Sales: profil departemen, materi, tim, dan kontak eskalasi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={jakarta.variable}
      style={{ backgroundColor: "#FDFDFE" }}
    >
      <body
        className={`${jakarta.className} flex min-h-screen flex-col antialiased`}
        style={{ backgroundColor: "#FDFDFE" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}