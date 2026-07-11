
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroImage = () => {
  const svgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.5
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const floatingAnimation = (duration, delay = 0, distance = 5) => ({
    y: [0, -distance, 0, distance, 0],
    transition: {
      duration: duration,
      ease: 'easeInOut',
      repeat: Infinity,
      delay: delay
    },
  });

  const rotatingAnimation = (duration, delay = 0, clockwise = true) => ({
    rotate: clockwise ? [0, 360] : [360, 0],
    transformOrigin: 'center',
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      delay: delay,
    },
  });

  return (
    <motion.svg
      width="500"
      height="450"
      viewBox="0 0 500 450"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-auto max-w-lg"
    >
      <defs>
        <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#34D399', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#A78BFA', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.g variants={itemVariants} animate={rotatingAnimation(40, 0, false)}>
        <path d="M100 350 l21.65,-12.5 0,25 -21.65,-12.5z m43.3,0 l21.65,12.5 -21.65,12.5 0,-25z m0,-25 l-21.65,-12.5 21.65,-12.5 0,25z m-43.3,0 l-21.65,12.5 0,-25 21.65,12.5z m21.65,-37.5 l0,-25 21.65,12.5 -21.65,12.5z m0,75 l0,25 -21.65,-12.5 21.65,-12.5z" fill="rgba(255, 255, 255, 0.08)" />
        <circle cx="121.65" cy="350" r="20" fill="rgba(255, 255, 255, 0.05)" />
      </motion.g>
      <motion.g variants={itemVariants} animate={rotatingAnimation(30, 1)} transform="translate(300, 80) scale(0.7)">
        <path d="M100 100 l21.65,-12.5 0,25 -21.65,-12.5z m43.3,0 l21.65,12.5 -21.65,12.5 0,-25z m0,-25 l-21.65,-12.5 21.65,-12.5 0,25z m-43.3,0 l-21.65,12.5 0,-25 21.65,12.5z m21.65,-37.5 l0,-25 21.65,12.5 -21.65,12.5z m0,75 l0,25 -21.65,-12.5 21.65,-12.5z" fill="rgba(255, 255, 255, 0.1)" />
        <circle cx="121.65" cy="100" r="20" fill="rgba(255, 255, 255, 0.08)" />
      </motion.g>

      <motion.g variants={itemVariants}>
        <rect x="125" y="150" width="250" height="150" rx="15" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <rect x="230" y="300" width="40" height="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <rect x="185" y="320" width="130" height="8" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <rect x="140" y="165" width="220" height="120" rx="8" fill="#0c122e" />
        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M 155 185 H 225" stroke="#A78BFA" strokeWidth="3" />
        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} d="M 155 200 H 275" stroke="#60A5FA" strokeWidth="3" />
        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} d="M 155 215 H 205" stroke="#FBBF24" strokeWidth="3" />
        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.1 }} d="M 155 230 H 295" stroke="#60A5FA" strokeWidth="3" />
        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.3 }} d="M 155 245 H 245" stroke="#A78BFA" strokeWidth="3" />
      </motion.g>

      <motion.g variants={itemVariants} animate={floatingAnimation(6, 1.5, 4)}>
        <rect x="340" y="220" width="70" height="130" rx="15" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" />
        <rect x="348" y="228" width="54" height="114" rx="8" fill="#0c122e" />
        <circle cx="375" cy="285" r="18" fill="url(#gradGreen)" filter="url(#softGlow)" />
        <path d="M 368 285 L 373 290 L 382 281" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>

      <motion.g variants={itemVariants} animate={floatingAnimation(5, 0.5, 6)}>
        <rect x="50" y="100" width="100" height="70" rx="10" fill="rgba(52, 211, 153, 0.1)" stroke="rgba(52, 211, 153, 0.3)" className="glass-effect" />
        <path d="M 65 115 H 135 M 65 130 H 135 M 65 145 H 115" stroke="#34D399" strokeWidth="3" strokeLinecap="round" />
        <circle cx="58" cy="115" r="1.5" fill="#34D399" />
        <circle cx="58" cy="130" r="1.5" fill="#34D399" />
        <circle cx="58" cy="145" r="1.5" fill="#34D399" />
      </motion.g>

      <motion.g variants={itemVariants} animate={floatingAnimation(4, 0.8, 5)}>
        <rect x="80" y="200" width="70" height="70" rx="10" fill="rgba(96, 165, 250, 0.1)" stroke="rgba(96, 165, 250, 0.3)" className="glass-effect" />
        <motion.g transform="translate(115, 235) scale(1.2)" animate={rotatingAnimation(10, 0)}>
          <path d="M0,0 l3.5,6.06 -7,0 z m7,0 l3.5,-6.06 3.5,6.06 -7,0z m0,12.12 l-3.5,6.06 7,0 z m-7,0 l-3.5,-6.06 -3.5,6.06 7,0z m-3.5,-6.06 l-7,0 -3.5,6.06 3.5,6.06z m14,0 l7,0 3.5,-6.06 -3.5,-6.06z" fill="#60A5FA" />
          <circle cx="0" cy="0" r="4" fill="#0c122e" stroke="#60A5FA" strokeWidth="1" />
        </motion.g>
      </motion.g>

      <motion.g variants={itemVariants} animate={floatingAnimation(5.5, 1.2, 7)}>
        <rect x="100" y="300" width="80" height="60" rx="10" fill="rgba(167, 139, 250, 0.1)" stroke="rgba(167, 139, 250, 0.3)" className="glass-effect" />
        <text x="140" y="338" fontFamily="monospace" fontSize="24" fill="#A78BFA" textAnchor="middle" fontWeight="bold">&lt;/&gt;</text>
      </motion.g>

      <motion.g variants={itemVariants} animate={floatingAnimation(6, 1, 6)}>
        <rect x="350" y="100" width="90" height="70" rx="10" fill="rgba(96, 165, 250, 0.1)" stroke="rgba(96, 165, 250, 0.3)" className="glass-effect" />
        <path d="M380 145 L380 120 M375 125 L380 120 L385 125" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M410 125 a15 15 0 0 1 0 20 h-40 a15 15 0 0 1 0-20 a10 10 0 0 1 20 0 a10 10 0 0 0 20 0" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </motion.svg>
  );
};

export default AnimatedHeroImage;
