import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

// ✅ Font optimization (automatically self-hosted by Next.js)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // improves performance by preventing FOIT (Flash of Invisible Text)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Metadata improvements for SEO & accessibility
export const metadata = {
  title: "Syed Umair | Frontend Developer Portfolio",
  description:
    "Portfolio of Syed Umair — React & Next.js Frontend Developer specializing in high-performance, accessible web apps.",
  keywords: [
    "Syed Umair",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Syed Umair Ali" }],
  openGraph: {
    title: "Syed Umair | Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Syed Umair — React & Next.js developer passionate about performance and accessibility.",
    url: "https://yourportfolio.vercel.app",
    siteName: "Syed Umair Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syed Umair Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#AD343E" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main role="main">{children}</main>
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>

        {/* ✅ Lazy-load analytics or scripts to improve performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
