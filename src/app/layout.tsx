import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Summit Electric | Trusted Local Service Provider",
  description: "Delivering quality workmanship and reliable home improvement solutions.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">{children}</body>
    </html>
  );
}