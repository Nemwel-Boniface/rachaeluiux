import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachael UI/UX",
  description: "Designing thoughtful digital experiences that solve real problems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
