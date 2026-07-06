import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zaeem.dev"),
  title: {
    default: "Zaeem Durani | Software Engineer, Red Teamer & Security Practitioner",
    template: "%s | Zaeem Durani",
  },
  description:
    "Portfolio of Zaeem Durani - Software Engineer, Certified Red Team Analyst (CRTA), and offensive security practitioner building secure, intelligent systems.",
  keywords: [
    "Zaeem Durani",
    "Software Engineer",
    "Cybersecurity",
    "Red Team",
    "Penetration Tester",
    "Ethical Hacker",
    "Offensive Security",
    "Full Stack Developer",
    "LLM",
    "Mumbai",
    "India",
  ],
  authors: [{ name: "Zaeem Durani", url: "https://zaeem.dev" }],
  creator: "Zaeem Durani",
  publisher: "Zaeem Durani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zaeem.dev",
    siteName: "Zaeem Durani",
    title: "Zaeem Durani | Software Engineer, Red Teamer & Security Practitioner",
    description:
      "Software Engineer, CRTA-certified offensive security practitioner building secure, intelligent systems.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zaeem Durani - Software Engineer, Red Teamer & Security Practitioner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaeem Durani | Software Engineer, Red Teamer & Security Practitioner",
    description:
      "Software Engineer, CRTA-certified offensive security practitioner.",
    images: ["/og-image.jpg"],
    creator: "@TechnicalZaeem",
  },
  alternates: {
    canonical: "https://zaeem.dev",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zaeem Durani",
  url: "https://zaeem.dev",
  image: "https://zaeem.dev/og-image.jpg",
  email: "mailto:duranizaeem@gmail.com",
  jobTitle: "Software Engineer",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Manipal University Jaipur",
    },
    {
      "@type": "EducationalOrganization",
      name: "Maharashtra College of Arts Science and Commerce",
    },
  ],
  knowsAbout: [
    "Cybersecurity",
    "Red Teaming",
    "Offensive Security",
    "Penetration Testing",
    "Large Language Models",
    "Full Stack Development",
    "Ethical Hacking",
    "Cloud Security",
  ],
  sameAs: [
    "https://linkedin.com/in/zaeem-durani",
    "https://github.com/Zaeem20",
    "https://twitter.com/TechnicalZaeem",
    "https://youtube.com/c/ZaeemTechnical",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased bg-void text-text-primary`}
      >
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
