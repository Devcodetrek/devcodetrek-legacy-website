
import React from 'react';
import { motion } from 'framer-motion';
import AboutMeImages from '@/components/AboutMeImages';
import AboutMeActions from '@/components/AboutMeActions';
import StatsCards from '@/components/StatsCards';

const AboutSection = () => {
  return (
    <section id="hakkimda" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center space-y-6 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold"><span className="gradient-text">Hakkımda</span></h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">Merhaba Ben <span className="gradient-text">Yiğit Erdoğan</span></h3>
              <p className="text-lg text-gray-300 leading-relaxed">Ben bir yazılım geliştiricisiyim. Bilgisayar ve yazılım teknolojilerine duyduğum derin ilgiyle, bireysel olarak kendimi sürekli geliştirmeye ve her projede daha iyisini üretmeye odaklanıyorum.</p>
              <p className="text-lg text-gray-300 leading-relaxed">Özellikle verimli, güvenli ve ölçeklenebilir sistemler geliştirme konusunda çalışıyor; karmaşık problemleri sade, etkili çözümlerle ele almayı benimsiyorum. Yazılım geliştirme sürecinde sadece teknik yeterlilik değil, aynı zamanda analiz yeteneği, dikkat ve sürdürülebilirlik gibi değerleri ön planda tutuyorum.</p>
              <p className="text-lg text-gray-300 leading-relaxed">Her projeyi bir öğrenme fırsatı, her satır kodu ise bir sorumluluk olarak görüyorum. Hedefim; teknolojiyi doğru kullanarak işlevsel ve değer yaratan dijital çözümler üretmek.</p>
            </div>
            
            <AboutMeActions />
            
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="relative h-[450px] flex items-center justify-center"
          >
            <AboutMeImages />
          </motion.div>
        </div>

        <div className="mt-20">
          <StatsCards />
        </div>

      </div>
    </section>
  )
}

export default AboutSection;
