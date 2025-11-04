import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes"; // ✅ Add this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata
export const metadata = {
  title: "Syed Umair | Frontend Developer Portfolio",
  description:
    "Hi, I'm Umair Naqvi, a passionate web developer with expertise in Next.js and React. With years of experience building scalable, high-performance web applications, I specialize in creating responsive and user-friendly interfaces. Whether you're looking to develop a complex app or a dynamic website, I can help bring your vision to life with cutting-edge technologies and best practices.",
  keywords: [
    "Syed Umair",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Naqvi",
    "portfolio",
    "developer",
    "nextjs",
    "Syed Umair",
    "umair",
  ],
  authors: [{ name: "Syed Umair" }],
  openGraph: {
    title: "Syed Umair | Frontend Developer Portfolio",
    description:
      "Hi, I'm Syed Umair, a passionate web developer with expertise in Next.js and React.",
    url: "https://syedumair.vercel.app",
    siteName: "Syed Umair Portfolio",
    images: [
      {
        url: "https://syedumair.vercel.app/logo.png", // ✅ full absolute URL!
        width: 1200,
        height: 630,
        alt: "Syed Umair Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Umair | Frontend Developer Portfolio",
    description:
      "Hi, Syed Umair, a passionate web developer with expertise in Next.js and React.",
    images: ["https://syedumair.vercel.app/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/homeimg.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ ThemeProvider wraps everything */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <Toaster position="top-right" reverseOrder={false} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}