'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        transition={{ duration: 0.5 }}
        className="w-full flex justify-center bg-[#252526] p-4"
      >
        <img
          src="/Images/MePPE.jpeg"
          alt="Construction Professional"
          className="max-h-[250px] w-auto"
        />
      </motion.div>
    );
  }

  return (
    <div 
      className="relative h-[750px] w-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ 
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s'
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0 bg-[#252526] rounded-lg overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/Images/MePPE.jpeg"
              alt="Construction Professional"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 bg-[#252526] rounded-lg shadow-xl p-6 border border-[#323232] overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">About Me</h3>
            <p className="text-base text-gray-300 mb-4">
              With a background in construction and engineering and a passion for web development, 
              I bring a unique perspective to creating digital solutions for the construction industry.
            </p>
            <p className="text-base text-gray-300">
              I combine my hands-on construction experience with modern web development expertise 
              to build powerful, user-friendly applications and websites that solve real-world problems.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
