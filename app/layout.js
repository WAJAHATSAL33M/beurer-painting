import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.bauerpainting.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bauer Painting | Commercial Painting Contractors, GTA & Hamilton",
    template: "%s | Bauer Painting",
  },
  description:
    "Bauer Painting delivers high-quality interior, exterior, and specialty commercial painting for offices, retail, industrial, and healthcare properties across Mississauga, Toronto, Oakville, Burlington, Hamilton, and more. Commercial painting experts since 2001.",
  keywords: [
    "commercial painting contractor",
    "commercial painters GTA",
    "commercial painting Mississauga",
    "commercial painting Toronto",
    "industrial painting Hamilton",
    "office painting contractor",
  ],
  openGraph: {
    title: "Bauer Painting | Commercial Painting Contractors, GTA & Hamilton",
    description:
      "High-quality commercial painting for a stronger, cleaner, more professional tomorrow. Serving Mississauga, Toronto, Oakville, Burlington, Hamilton, and more.",
    url: siteUrl,
    siteName: "Bauer Painting",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bauer Painting | Commercial Painting Contractors, GTA & Hamilton",
    description:
      "High-quality commercial painting for a stronger, cleaner, more professional tomorrow.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PaintingService",
  name: "Bauer Painting",
  description:
    "Commercial painting contractor serving the Greater Toronto and Hamilton Area since 2001.",
  url: siteUrl,
  telephone: "+1-905-738-9171",
  email: "info@bauerpainting.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: [
    "Mississauga",
    "Toronto",
    "Oakville",
    "Burlington",
    "Hamilton",
    "Guelph",
    "Kitchener",
    "Cambridge",
    "Milton",
    "Brampton",
    "St. Catharines",
    "Niagara Falls",
  ],
  foundingDate: "2001",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
