'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Web Development",
    description: "Custom website development using modern technologies and best practices.",
    icon: "🌐"
  },
  {
    title: "Web Design",
    description: "Beautiful, responsive designs that work on all devices.",
    icon: "🎨"
  },
  {
    title: "Custom Software Solutions",
    description: "Custom software tools built specifically to solve your problems, big or small.",
    icon: "⚙️"
  },
  {
    title: "Business Automation Consulting",
    description: "Integrate AI, or existing enterprise software tools into your business.",
    icon: "🤖"
  }
];

export default function ServicesContent() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Images/crane-5207098_1920.png"
          alt="Construction Crane"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#1e1e1e]/80" />
      </div>

      <div className="mx-auto relative py-20 px-4">
        <motion.h1 
          className="text-5xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-[#252526]/95 backdrop-blur-sm rounded-lg p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-150 border border-white/20 hover:border-white/40 hover:shadow-white/10"
            >
              <div className="text-4xl mb-4 text-primary">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-secondary">
                {service.title}
              </h2>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
