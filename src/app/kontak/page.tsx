import type { Metadata } from "next";
import KontakContent from "@/components/kontak/KontakContent";

export const metadata: Metadata = {
  title: "Kontak & Eskalasi",
  description:
    "Alur pelaporan kendala darurat dan kontak PIC Technical After Sales.",
};

export default function KontakPage() {
  return <KontakContent />;
}