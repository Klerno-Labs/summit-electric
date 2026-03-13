import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Summit Electric",
  description: "Comprehensive electrical services including residential repair, panel upgrades, commercial wiring, and lighting installation in Austin, TX.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
