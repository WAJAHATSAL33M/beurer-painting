import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    default: "Bauer Painting | Commercial Painting Experts",
    template: "%s",
  },
  description:
    "Commercial painting services across the Greater Toronto and Hamilton Area — interiors, exteriors, and specialized coatings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
