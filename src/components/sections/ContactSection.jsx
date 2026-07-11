
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send, Share2, Linkedin, Instagram, Youtube, Github, Music, MessageCircle, Image as ImageIcon, Smile } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', message: '' });

  useEffect(() => {
    try {
      const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
      setComments(savedComments);
    } catch (error) {
      console.error("Yorumlar yüklenirken hata oluştu:", error);
      setComments([]);
    }
  }, []);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleCommentChange = (e) => setNewComment({ ...newComment, [e.target.name]: e.target.value });

  const handleNotImplemented = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Bu özellik henüz uygulanmadı—ama merak etme! Bir sonraki istekte talep edebilirsin! 🚀"
    });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.name.trim() && newComment.message.trim()) {
      const commentToAdd = { ...newComment, id: Date.now(), avatar: `https://avatar.vercel.sh/${newComment.name}.png` };
      const updatedComments = [commentToAdd, ...comments];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setNewComment({ name: '', message: '' });
      toast({
        title: "✅ Yorumunuz başarıyla gönderildi!",
        description: "Değerli geri bildiriminiz için teşekkür ederiz.",
      });
    } else {
      toast({
        title: "🤔 Eksik bilgi!",
        description: "Lütfen adınızı ve mesajınızı girin.",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    { icon: Linkedin, name: 'Bağlantı Kuralım', user: 'Linkedinide', url: 'https://www.linkedin.com/in/yi%C4%9Fit-erdo%C4%9Fan-186964209/' },
    { icon: Instagram, name: 'Instagram', user: 'devcodetrek', url: 'https://www.instagram.com/devcodetrek/' },
    { icon: Youtube, name: 'Youtube', user: 'devcodetrek', url: '#' },
    { icon: Github, name: 'Github', user: 'devcodetrek', url: 'https://github.com/Devcodetrek' },
  ];

  return (
    <section id="iletisim" className="py-20 bg-[#0c0b1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center space-y-4 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold welcome-gradient-text">Bana Ulaşın</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Sorunuz mu var? Bana bir mesaj gönderin, en kısa sürede size geri dönüş yapacağım.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-2 space-y-8">
            <div className="contact-card space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">Temas etmek</h3>
                <button onClick={handleNotImplemented} className="text-gray-400 hover:text-white transition-colors"><Share2 /></button>
              </div>
              <p className="text-gray-400">Tartışacak bir şey mi var? Bana bir mesaj gönder ve konuşalım.</p>
              <form onSubmit={handleNotImplemented} className="space-y-6">
                <div className="contact-input-wrapper">
                  <User className="contact-input-icon" />
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="contact-input" placeholder="Adınız" required />
                </div>
                <div className="contact-input-wrapper">
                  <Mail className="contact-input-icon" />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="contact-input" placeholder="E-postanız" required />
                </div>
                <div className="contact-input-wrapper">
                  <MessageSquare className="contact-input-icon top-6 transform -translate-y-0" />
                  <textarea name="message" value={formData.message} onChange={handleInputChange} className="contact-textarea contact-textarea-with-icon" placeholder="Mesajınız" required />
                </div>
                <Button type="submit" className="w-full btn-contact flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" /><span>Mesaj gönder</span>
                </Button>
              </form>
            </div>
            <div className="contact-card space-y-6">
              <h3 className="text-2xl font-bold text-white">Benimle Bağlantı Kurun</h3>
              <div className="social-link-grid">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link-item">
                    <div className="social-link-icon"><social.icon className="text-white" /></div>
                    <div>
                      <p className="font-semibold text-white">{social.name}</p>
                      <p className="text-sm text-gray-400">{social.user}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-3 contact-card space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <MessageCircle /> Yorumlar ({comments.length})
            </h3>
            <form onSubmit={handleCommentSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">İsim *</label>
                <input type="text" name="name" value={newComment.name} onChange={handleCommentChange} className="contact-input !pl-4" placeholder="Adınızı girin" required />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Mesaj *</label>
                <textarea name="message" value={newComment.message} onChange={handleCommentChange} className="contact-textarea" placeholder="Mesajınızı buraya yazın..." required />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Profil Fotoğrafı (İsteğe bağlı)</label>
                <Button onClick={handleNotImplemented} type="button" className="w-full btn-file-upload flex items-center justify-center gap-2">
                  <ImageIcon className="w-5 h-5" /> Profil Fotoğrafını Seçin
                </Button>
                <p className="text-xs text-gray-500 mt-2">Maksimum dosya boyutu: 5MB</p>
              </div>
              <Button type="submit" className="w-full btn-contact flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" /><span>Yorum Gönder</span>
              </Button>
            </form>
            <div className="space-y-6">
              {comments.length > 0 ? (
                comments.map(comment => (
                  <div key={comment.id} className="comment-card flex items-start gap-4">
                    <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <p className="font-semibold text-white">{comment.name}</p>
                      <p className="text-gray-300">{comment.message}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <Smile className="mx-auto w-12 h-12 text-gray-500" />
                  <p className="mt-4 text-gray-400">Henüz yorum yok. Konuşmaya başla!</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
