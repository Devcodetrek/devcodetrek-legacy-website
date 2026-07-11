
import React from 'react';
import { motion } from 'framer-motion';

const AboutMeImages = () => {
  return (
    <motion.div 
      className="relative w-80 h-[400px] about-image-container rounded-2xl"
      animate={{ y: [-5, 5] }}
      transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    >
      <div className="w-full h-full p-2 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl">
        <img  
          className="w-full h-full object-cover rounded-xl" 
          alt="Yiğit Erdoğan havuz kenarında oturuyor" 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/5decf16b-2fa6-4f58-9774-bab50721c43c/251a93f3793913fe010d66b4b34133b1.jpg" 
        />
      </div>
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 -z-10 animate-pulse"></div>
    </motion.div>
  );
};

export default AboutMeImages;
