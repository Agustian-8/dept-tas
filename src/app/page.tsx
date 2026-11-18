import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "Beranda",
};

export default function BerandaPage() {
  return <HomeContent />;
}