import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://wudnehtm-mengist.netlify.app";

export const metadata: Metadata = {
  title: "Wudneh Tilahun Mengist | Mathematics Lecturer & Researcher",
  description:
    "Academic portfolio of Wudneh Tilahun Mengist — Mathematics Lecturer & Researcher at Debre Tabor University. Specializing in numerical analysis, computational mathematics, and digital learning.",
  keywords: [
    "Wudneh Tilahun Mengist",
    "Numerical Analysis",
    "Debre Tabor University",
    "Mathematics Researcher",
    "Burgers' equation",
    "Hermite splines",
    "B-Spline Collocation",
    "Ethiopia mathematics",
    "Hybrid Math Hub",
    "Open edX",
  ],
  authors: [{ name: "Wudneh Tilahun Mengist" }],
  creator: "Wudneh Tilahun Mengist",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Wudneh Tilahun Mengist | Mathematics Lecturer & Researcher",
    description:
      "Bridging rigorous numerical analysis, computational mathematics, and advanced digital learning methodologies at Debre Tabor University.",
    url: SITE_URL,
    siteName: "Wudneh Tilahun Mengist",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wudneh Tilahun Mengist — Mathematics Lecturer & Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wudneh Tilahun Mengist | Mathematics Lecturer & Researcher",
    description:
      "Bridging rigorous numerical analysis, computational mathematics, and digital learning at Debre Tabor University.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wudneh Tilahun Mengist",
              jobTitle: "Mathematics Lecturer & Researcher",
              worksFor: {
                "@type": "CollegeOrUniversity",
                name: "Debre Tabor University",
              },
              url: SITE_URL,
              image: `${SITE_URL}/profile-photo.jpg`,
              sameAs: [
                "https://orcid.org/0000-0002-4335-3741",
                "https://www.youtube.com/@hybridmathhub",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Debre Tabor",
                addressRegion: "Amhara",
                addressCountry: "Ethiopia",
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Bahir Dar University",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Arba Minch University",
                },
              ],
              knowsAbout: [
                "Numerical Analysis",
                "Spline Collocation",
                "Burgers' equation",
                "Singularly Perturbed Boundary Value Problems",
                "Computational Mathematics",
                "LaTeX",
                "MATLAB",
                "Mathematica",
                "Open edX",
                "Instructional Design",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plexSans.variable} ${plexMono.variable} ${caslon.variable} antialiased bg-background text-foreground`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
