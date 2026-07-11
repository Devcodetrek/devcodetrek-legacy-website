
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Github, Linkedin, Instagram, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedHeroImage from '@/components/AnimatedHeroImage';
import WhatsappIcon from '@/components/icons/WhatsappIcon';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Yiğit Erdoğan"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 150);
    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <span className="text-xl text-gray-300 font-medium">
      {text}
      <span className="typing-cursor"></span>
    </span>
  );
};


const HeroSection = () => {
  const techStack = ['React', 'Javascript', 'Node.js', 'Tailwind'];
  const socialLinks = [
    { icon: Github, name: 'Github', url: 'https://github.com/Devcodetrek' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/yi%C4%9Fit-erdo%C4%9Fan-186964209/' },
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/devcodetrek/' },
    { icon: WhatsappIcon, name: 'WhatsApp', url: 'https://wa.me/905459132793' }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 12
        } 
    },
  };

  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center grid-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center space-x-2 glass-effect rounded-full px-4 py-2 text-sm">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400">Yeniliğe Hazır</span>
          </motion.div>
          <div className="space-y-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl lg:text-7xl font-bold leading-tight">
              Full-stack
              <br />
              <span className="gradient-text">Developer</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <TypingAnimation />
            </motion.div>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Kullanıcı deneyimini merkeze alan, yenilikçi ve yüksek performanslı web uygulamaları geliştirerek dijital çözümler sunuyorum.
          </motion.p>
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
            {techStack.map((tech) => (<motion.span key={tech} variants={itemVariants} className="tech-badge px-4 py-2 rounded-full text-sm font-medium">{tech}</motion.span>))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => document.getElementById('portfolyo')?.scrollIntoView()} className="btn-primary px-8 py-3 rounded-lg font-medium flex items-center space-x-2"><span>Projeler</span><ExternalLink className="w-4 h-4" /></Button>
            <Button onClick={() => document.getElementById('iletisim')?.scrollIntoView()} variant="outline" className="glass-effect border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium flex items-center space-x-2"><span>İletişim</span><Mail className="w-4 h-4" /></Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex space-x-4">
            {socialLinks.map((social, index) => (<motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="social-icon p-3 rounded-lg"><social.icon className="w-5 h-5" /></motion.a>))}
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex items-center justify-center -mt-10 lg:mt-0">
          <AnimatedHeroImage />
        </motion.div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default HeroSection;
