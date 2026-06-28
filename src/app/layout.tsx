import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rachaelngotho.com"; // update when domain is live
const ogImage = `${siteUrl}/images/Rachael-hero-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Rachael Ngotho — UI/UX & Product Designer",
    template: "%s | Rachael Ngotho",
  },

  description:
    "Rachael Ngotho is a UI/UX and product designer who helps businesses turn complex ideas into intuitive digital products. Available for product design, UX research, and design systems work.",

  keywords: [
    "UI/UX designer",
    "product designer",
    "UX research",
    "design systems",
    "Figma",
    "product strategy",
    "Rachael Ngotho",
    "interface design",
    "prototyping",
    "African designer",
  ],

  authors: [{ name: "Rachael Ngotho", url: "https://www.linkedin.com/in/rachaelngotho/" }],

  creator: "Rachael Ngotho",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rachael Ngotho",
    title: "Rachael Ngotho — UI/UX & Product Designer",
    description:
      "Designing thoughtful digital experiences that solve real problems. Product strategy, UX research, and interface design.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Rachael Ngotho — UI/UX & Product Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rachael Ngotho — UI/UX & Product Designer",
    description:
      "Designing thoughtful digital experiences that solve real problems. Product strategy, UX research, and interface design.",
    images: [ogImage],
    creator: "@rachaelngotho",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },
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
