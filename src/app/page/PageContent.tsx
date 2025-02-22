'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FlipCard from '@/components/FlipCard';

export default function PageContent() {
  return (
    <div className="mx-auto relative py-20 px-4">
      {/* Main content with image */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Welcome to Jackson Web Builds Inc.
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            We create professional, modern websites and software tailored to your needs, specializing in solutions for small businesses in the construction industry.
          </p>

          <a 
            href="/contact" 
            className="inline-block bg-secondary text-black px-8 py-4 rounded-lg hover:bg-secondary-dark transition-colors duration-150 font-semibold"
          >
            Start Your Project
          </a>
        </motion.div>

        <motion.div
          className="md:w-1/3 relative order-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FlipCard />
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
          {[
            { title: "Modern Design", description: "Clean, responsive layouts that work on all devices" },
            { title: "Smooth Animations", description: "Engaging user experiences with fluid animations" },
            { title: "Performance", description: "Lightning-fast load times and optimized code" },
            { title: "Custom Solutions", description: "Tailored development for your specific needs" }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card hover:-translate-y-1 transition-all duration-150"
            >
              <h3 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
