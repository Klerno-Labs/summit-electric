import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Summit Electric - Trusted Local Electricians",
  description: "Summit Electric provides reliable home improvement solutions and quality workmanship for all your electrical needs.",
  openGraph: {
    title: "Summit Electric - Trusted Local Electricians",
    description: "Summit Electric provides reliable home improvement solutions and quality workmanship for all your electrical needs.",
    images: [
      {
        url: "https://mfile.z.ai/1774397102220-3155203c94d14148ae8a97ae4a4045a0.png?ufileattname=2026032508045428c39f70143942fc_watermark.png",
        width: 1200,
        height: 800,
      },
    ],
  },
  canonical: "https://example.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://example.com" />
      </head>
      <body className={cn("bg-white text-gray-900")}>{children}</body>
    </html>
  );
}