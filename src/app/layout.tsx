import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jackson Web Builds | Ottawa Web Design & Development for Contractors",
  description: "Professional web design and development services in Ottawa. Specializing in custom websites and software solutions for contractors and construction companies.",
  keywords: "ottawa web design, ottawa website development, web design for contractors, construction software ottawa, contractor websites, ottawa web developer, custom software development ottawa",
  openGraph: {
    title: "Jackson Web Builds | Ottawa Web Design & Development for Contractors",
    description: "Professional web design and development services in Ottawa. Specializing in custom websites and software solutions for contractors and construction companies.",
    locale: "en_CA",
    type: "website",
    siteName: "Jackson Web Builds Inc.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jacksonwebbuilds.ca",
  },
  authors: [{ name: "Zach Jackson" }],
  creator: "Zach Jackson",
  publisher: "Jackson Web Builds",
  formatDetection: {
    telephone: true,
    email: true,
  },
  metadataBase: new URL("https://jacksonwebbuilds.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
