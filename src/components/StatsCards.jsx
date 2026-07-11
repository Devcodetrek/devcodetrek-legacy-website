import React, { useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { Code, Award, Globe, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const StatCard = ({ icon, title, description, value, delay }) => {
  const { toast } = useToast();
  const countRef = useRef(null);

  const handleNotImplemented = (e) => {
    if (e) e.preventDefault();
    toast({
      title: "🚧 Bu özellik henüz uygulanmadı—ama merak etme! Bir sonraki istekte talep edebilirsin! 🚀"
    });
  };

  const startAnimation = () => {
    const number = parseInt(value.replace('+', ''));
    animate(0, number, {
        duration: 2,
        onUpdate(latest) {
            if (countRef.current) {
                countRef.current.textContent = Math.round(latest);
            }
        }
    });
  };

  return (
    <motion.div
      className="glass-effect p-6 rounded-2xl flex flex-col justify-between h-full group cursor-pointer hover:bg-white/5 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onClick={handleNotImplemented}
      onViewportEnter={startAnimation}
    >
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 transition-colors duration-300">
          {icon}
        </div>
        <span className="text-5xl font-bold text-white flex items-baseline">
            <span ref={countRef}>0</span>
            {value.includes('+') && <span>+</span>}
        </span>
      </div>
      <div className="mt-12">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
        <div className="flex justify-end mt-2">
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

const StatsCards = () => {
  const statsData = [
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: 'TOPLAM PROJE',
      description: 'Yenilikçi web çözümleri',
      value: '50+',
    },
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: 'SERTİFİKALAR',
      description: 'Onaylanmış profesyonel beceriler',
      value: '10+',
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'YIL DENEYİM',
      description: 'Sürekli öğrenme yolculuğu',
      value: '9+',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          title={stat.title}
          description={stat.description}
          value={stat.value}
          delay={index * 0.15}
        />
      ))}
    </div>
  );
};

export default StatsCards;