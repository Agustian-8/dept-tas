import type { Metadata } from "next";
import ProfilContent from "@/components/profil/ProfilContent";

export const metadata: Metadata = {
  title: "Profil Departemen",
  description:
    "Visi, misi, cakupan kerja, dan alur onboarding Technical After Sales.",
};

export default function ProfilPage() {
  return <ProfilContent />;
}