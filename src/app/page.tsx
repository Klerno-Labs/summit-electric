import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="pt-20">
      <h1 className="text-4xl font-bold">{siteConfig.name}</h1>
      <p className="text-lg">{siteConfig.description}</p>
    </main>
  );
}