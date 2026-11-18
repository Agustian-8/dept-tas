import type { Metadata } from "next";
import TimContent from "@/components/tim/TimContent";

export const metadata: Metadata = {
  title: "Struktur Tim",
  description:
    "Struktur organisasi dan kontak anggota tim Technical After Sales.",
};

export default function TimPage() {
  return <TimContent />;
}