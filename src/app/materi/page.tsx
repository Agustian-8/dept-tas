import type { Metadata } from "next";
import MateriContent from "@/components/materi/MateriContent";

export const metadata: Metadata = {
  title: "Materi & Modul",
  description:
    "Seluruh SOP, panduan teknis, checklist, dan katalog Technical After Sales.",
};

export default function MateriPage() {
  return <MateriContent />;
}