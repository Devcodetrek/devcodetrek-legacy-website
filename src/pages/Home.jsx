
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DevcodeTrek - Full-Stack Developer | Modern Web Çözümleri</title>
        <meta name="description" content="İnovatif, fonksiyonel ve kullanıcı dostu web siteleri ve uygulamaları geliştiren Full-stack Developer. Modern teknolojilerle dijital çözümler." />
      </Helmet>
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
