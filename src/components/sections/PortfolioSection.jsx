
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, Zap, Award, Layers, Move, Database, GitBranch, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PortfolioSection = () => {
  const { toast } = useToast();
  
  const handleNotImplemented = (e) => {
    if (e) e.preventDefault();
    toast({
      title: "🚧 Bu özellik henüz uygulanmadı—ama merak etme! Bir sonraki istekte talep edebilirsin! 🚀"
    });
  };

  const skills = [
    { name: 'React', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Node.js', icon: Code },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Next.js', icon: Code },
    { name: 'Framer Motion', icon: Move },
    { name: 'Supabase', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'Figma', icon: PenTool },
    { name: 'Vite', icon: Zap },
    { name: 'TypeScript', icon: Code },
    { name: 'HTML5 & CSS3', icon: Palette },
  ];

  const certificates = [
    { id: 1, title: 'Full-Stack Web Development', issuer: 'Udemy', icon: Award },
    { id: 2, title: 'React - The Complete Guide', issuer: 'Academind', icon: Award },
    { id: 3, title: 'Advanced Node.js', issuer: 'LinkedIn Learning', icon: Award },
    { id: 4, title: 'UI/UX Design Principles', issuer: 'Coursera', icon: Award },
    { id: 5, title: 'Certified JavaScript Developer', issuer: 'W3Schools', icon: Award },
    { id: 6, title: 'Tailwind CSS Masterclass', issuer: 'FreeCodeCamp', icon: Award },
  ];

  return (
    <section id="portfolyo" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center space-y-6 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold"><span className="gradient-text">Portfolyo Vitrini</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Projeler, sertifikalar ve teknik uzmanlık aracılığıyla yolculuğumu keşfedin. Her bölüm, sürekli öğrenme yolculuğumda bir kilometre taşını temsil ediyor.</p>
        </motion.div>
        
        <Tabs defaultValue="projects" className="w-full flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <TabsList className="glass-effect rounded-xl p-2">
              <TabsTrigger value="projects" className="flex items-center gap-2"><Code className="w-5 h-5" /> Projeler</TabsTrigger>
              <TabsTrigger value="certificates" className="flex items-center gap-2"><Award className="w-5 h-5" /> Sertifikalar</TabsTrigger>
              <TabsTrigger value="tech-stack" className="flex items-center gap-2"><Layers className="w-5 h-5" /> Teknik Yetenekler</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="projects" className="w-full">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="project-card rounded-xl overflow-hidden group flex flex-col">
                <div className="relative overflow-hidden">
                  <img  alt="E-Ticaret Platformu" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1641833278434-50f92b93d65a" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button onClick={handleNotImplemented} size="sm" className="btn-primary"><ExternalLink className="w-4 h-4" /></Button>
                    <Button onClick={handleNotImplemented} size="sm" variant="outline" className="glass-effect border-white/20 text-white hover:bg-white/10"><Github className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">E-Ticaret Platformu</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">Modern ve kullanıcı dostu e-ticaret platformu. React ve Node.js ile geliştirildi.</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {['React', 'Node.js', 'MongoDB', 'Stripe'].map((tech) => (<span key={tech} className="tech-badge px-3 py-1 rounded-full text-xs font-medium">{tech}</span>))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="project-card rounded-xl overflow-hidden group flex flex-col">
                <div className="relative overflow-hidden">
                  <img  alt="Görev Yönetim Uygulaması" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button onClick={handleNotImplemented} size="sm" className="btn-primary"><ExternalLink className="w-4 h-4" /></Button>
                    <Button onClick={handleNotImplemented} size="sm" variant="outline" className="glass-effect border-white/20 text-white hover:bg-white/10"><Github className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">Görev Yönetim Uygulaması</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">Takım çalışması için geliştirilmiş görev yönetim uygulaması.</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {['React', 'Firebase', 'Material-UI'].map((tech) => (<span key={tech} className="tech-badge px-3 py-1 rounded-full text-xs font-medium">{tech}</span>))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="project-card rounded-xl overflow-hidden group flex flex-col">
                <div className="relative overflow-hidden">
                  <img  alt="Hava Durumu Mobil App" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1662923449382-19cf33738823" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button onClick={handleNotImplemented} size="sm" className="btn-primary"><ExternalLink className="w-4 h-4" /></Button>
                    <Button onClick={handleNotImplemented} size="sm" variant="outline" className="glass-effect border-white/20 text-white hover:bg-white/10"><Github className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">Hava Durumu Mobil App</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">Gerçek zamanlı hava durumu bilgileri sunan mobil uygulama.</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {['React Native', 'API Integration'].map((tech) => (<span key={tech} className="tech-badge px-3 py-1 rounded-full text-xs font-medium">{tech}</span>))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="project-card rounded-xl overflow-hidden group flex flex-col">
                <div className="relative overflow-hidden">
                  <img  alt="Portfolyo Web Sitesi" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1688760871131-29afc15029ec" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button onClick={handleNotImplemented} size="sm" className="btn-primary"><ExternalLink className="w-4 h-4" /></Button>
                    <Button onClick={handleNotImplemented} size="sm" variant="outline" className="glass-effect border-white/20 text-white hover:bg-white/10"><Github className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">Portfolyo Web Sitesi</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">Kişisel portfolyo web sitesi tasarımı ve geliştirilmesi.</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {['React', 'Tailwind CSS', 'Framer Motion'].map((tech) => (<span key={tech} className="tech-badge px-3 py-1 rounded-full text-xs font-medium">{tech}</span>))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="project-card rounded-xl overflow-hidden group flex flex-col">
                <div className="relative overflow-hidden">
                  <img  alt="Restoran Rezervasyon Sistemi" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1559029662-4260aa0652b9" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button onClick={handleNotImplemented} size="sm" className="btn-primary"><ExternalLink className="w-4 h-4" /></Button>
                    <Button onClick={handleNotImplemented} size="sm" variant="outline" className="glass-effect border-white/20 text-white hover:bg-white/10"><Github className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">Restoran Rezervasyon Sistemi</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">Restoran rezervasyon sistemi ve yönetim paneli.</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {['React', 'Express', 'PostgreSQL'].map((tech) => (<span key={tech} className="tech-badge px-3 py-1 rounded-full text-xs font-medium">{tech}</span>))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="project-card rounded-xl overflow-hidden group flex flex-col">
                <div className="relative overflow-hidden">
                  <img  alt="Fitness Takip Uygulaması" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1694747674615-c381e6b9ce04" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button onClick={handleNotImplemented} size="sm" className="btn-primary"><ExternalLink className="w-4 h-4" /></Button>
                    <Button onClick={handleNotImplemented} size="sm" variant="outline" className="glass-effect border-white/20 text-white hover:bg-white/10"><Github className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">Fitness Takip Uygulaması</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">Kişisel fitness takibi için mobil uygulama.</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {['React Native', 'Redux', 'Charts'].map((tech) => (<span key={tech} className="tech-badge px-3 py-1 rounded-full text-xs font-medium">{tech}</span>))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="certificates" className="w-full">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              animate="show"
            >
              {certificates.map((cert) => (
                <motion.div key={cert.id} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="glass-effect p-6 rounded-2xl flex items-center gap-6 group cursor-pointer hover:bg-white/5 transition-colors duration-300">
                  <div className="w-16 h-16 bg-gray-800/50 rounded-full flex-shrink-0 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <cert.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="tech-stack" className="w-full">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
              initial="hidden"
              animate="show"
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } }} className="glass-effect p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-white/5 transition-colors duration-300 aspect-square">
                  <skill.icon className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-md font-semibold text-white text-center">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default PortfolioSection;
