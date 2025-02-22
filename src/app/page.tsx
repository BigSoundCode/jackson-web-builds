import type { Metadata } from "next";
import PageContent from "./page/PageContent";

export const metadata: Metadata = {
  title: "Ottawa Web Design & Development | Jackson Web Builds",
  description: "Expert web design and software development in Ottawa. Specializing in custom websites for contractors and construction companies. Modern, responsive, and performance-optimized solutions.",
  keywords: "ottawa web design, construction website design, contractor web development, ottawa software development, custom website ottawa, responsive web design ottawa",
  openGraph: {
    title: "Ottawa Web Design & Development | Jackson Web Builds",
    description: "Expert web design and software development in Ottawa. Specializing in custom websites for contractors and construction companies. Modern, responsive, and performance-optimized solutions.",
    images: [
      {
        url: '/Images/MePPE.jpeg',
        width: 800,
        height: 600,
        alt: 'Construction Professional Web Developer',
      }
    ],
  }
};

export default function Home() {
  return <PageContent />;
}
