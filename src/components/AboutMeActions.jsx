
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AboutMeActions = () => {
  const { toast } = useToast();

  const handleNotImplemented = (e) => {
    if (e) e.preventDefault();
    toast({
      title: "🚧 Bu özellik henüz uygulanmadı—ama merak etme! Bir sonraki istekte talep edebilirsin! 🚀"
    });
  };

  const handleViewProjects = () => {
    document.getElementById('portfolyo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="glass-effect p-5 rounded-2xl text-center italic">
        <p className="text-gray-300 flex items-center justify-center">
          <span className="text-4xl font-serif text-blue-400/80 mr-2 leading-none">“</span>
          Yapay zekayı bir ikame değil, profesyonel bir araç olarak kullanmak.
          <span className="text-4xl font-serif text-blue-400/80 ml-2 leading-none">”</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-start">
        <Button onClick={handleNotImplemented} className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 text-base">
          <Download className="w-5 h-5" />
          <span>CV İndir</span>
        </Button>
        <Button onClick={handleViewProjects} variant="outline" className="glass-effect border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 text-base">
          <Code className="w-5 h-5" />
          <span>Projeleri Görüntüle</span>
        </Button>
      </div>
    </motion.div>
  );
};

export default AboutMeActions;
