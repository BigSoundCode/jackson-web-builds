import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Web Development Services Ottawa | Construction Industry Solutions",
  description: "Professional web development and software solutions for contractors in Ottawa. Custom websites, business automation, and construction industry software expertise.",
  keywords: "web development ottawa, construction software solutions, contractor websites ottawa, business automation ottawa, custom software development, web design for contractors",
  openGraph: {
    title: "Web Development Services Ottawa | Construction Industry Solutions",
    description: "Professional web development and software solutions for contractors in Ottawa. Custom websites, business automation, and construction industry software expertise.",
    images: [
      {
        url: '/Images/crane-5207098_1920.png',
        width: 1920,
        height: 1080,
        alt: 'Construction Industry Web Development Services',
      }
    ],
  }
};

export default function Services() {
  return <ServicesContent />;
}
