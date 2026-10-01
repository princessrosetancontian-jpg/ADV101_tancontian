import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Notes | Petal & Stem",
  description: "A thoughtful little notes desk for your flower shop.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
