import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

const Loader = () => {
  const text1 = "DevcodeTrek'e";
  const text2 = " Hoş Geldiniz";
  const letters = Array.from(text1 + text2);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f0f23] gap-10"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center text-3xl md:text-5xl font-bold text-center flex-wrap px-4"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className={index < text1.length ? "welcome-gradient-text" : "text-white"}
            style={{ whiteSpace: 'pre' }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <div className="w-full max-w-sm px-4">
        <div className="relative h-8 w-full">
          <div className="absolute top-1/2 -translate-y-1/2 h-1 w-full rounded-full bg-gray-700/50" />
          
          <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-1 rounded-full bg-purple-500"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.8, ease: 'linear' }}
          />
          
          <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              style={{ x: "-50%" }}
              initial={{ left: '0%' }}
              animate={{ left: '100%' }}
              transition={{ duration: 3.8, ease: 'linear' }}
          >
              <motion.div
                  animate={{ rotate: 360 * 2 }}
                  transition={{ duration: 3.8, ease: 'linear' }}
              >
                  <Settings className="w-6 h-6 text-purple-400" />
              </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;