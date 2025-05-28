import React from "react";
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import '../components/ui/card.css';

// Estilos CSS para animações e background
const BackgroundStyles = () => (
  <style>{`
    @keyframes gradient-animation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .animated-gradient-bg {
      background: linear-gradient(-45deg, #1a1a1a, #2c0000, #1a1a1a, #4d0000);
      background-size: 400% 400%;
      animation: gradient-animation 25s ease infinite;
    }

    @keyframes particle-float {
      0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
      50% { transform: translateY(-25px) translateX(15px) scale(1.1); opacity: 1; }
      100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
    }

    .particle {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 122, 41, 0.3); /* Cor laranja/vermelha das partículas */
      animation: particle-float 6s ease-in-out infinite;
      box-shadow: 0 0 10px rgba(255, 122, 41, 0.5), 0 0 20px rgba(255, 122, 41, 0.3);
    }
    
    .cta-button-pulse {
      animation: cta-pulse 2s infinite;
    }

    @keyframes cta-pulse {
      0% { transform: scale(1); box-shadow: 0 4px 32px 0 rgba(255, 122, 41, 0.25); }
      50% { transform: scale(1.03); box-shadow: 0 6px 40px 0 rgba(255, 122, 41, 0.4); }
      100% { transform: scale(1); box-shadow: 0 4px 32px 0 rgba(255, 122, 41, 0.25); }
    }

    .ingresso-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 10px 40px -10px rgba(255, 122, 41, 0.3), 0 0 60px 0px rgba(255, 215, 0, 0.2); /* Ajuste de sombra para destacar */
    }
    .ingresso-card-black:hover {
       box-shadow: 0 10px 40px -10px rgba(255, 0, 0, 0.3), 0 0 60px 0px rgba(255, 80, 80, 0.25);
    }
  `}</style>
);


export default function Ingresso() {
  const entradaTexto = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const entradaImagem = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };
  
  const entradaCards = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: delay }
    }
  });

  return (
    <>
      <BackgroundStyles />
      <div className="animated-gradient-bg min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Partículas flutuantes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`, // Tamanhos variados
              height: `${Math.random() * 6 + 3}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 8}s` // Duração variada
            }}
          />
        ))}
        
        {/* Conteúdo da página com z-index para ficar acima das partículas */}
        <div className="relative z-10 flex flex-col items-center w-full">

          <motion.img 
            src="/lovable-uploads/logo.png" 
            alt="Logo Do Real ao Euro" 
            className="w-48 md:w-56 mb-10 mt-4 mx-auto" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight mb-3"
            variants={entradaTexto}
            initial="hidden"
            animate="visible"
          >
            FRENTE A FRENTE COM<br />
            <span className="text-main-red">PEDRO BERTOTTO</span>
          </motion.h1>
          
          <motion.p 
            className="text-light-gray/90 text-center mt-4 mb-8 max-w-2xl text-base md:text-lg"
            variants={entradaTexto}
            initial="hidden"
            animate="visible"
            style={{ transitionDelay: '0.2s' }} // Pequeno delay para aparecer após o título
          >
            Você pode estar <span className="font-bold text-white">PRESENCIALMENTE</span> comigo e com meu time na Masterclass "Do Real ao Euro". Uma noite única de aprendizado, conexão e muito networking!
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 mb-10 w-full max-w-xl shadow-lg"
            variants={entradaTexto}
            initial="hidden"
            animate="visible"
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="flex items-center gap-2 text-light-gray/90 text-xs md:text-sm">
              <CalendarDays size={18} className="text-main-red" />
              <span>10 DE JUNHO</span>
            </div>
            <span className="hidden md:inline-block text-light-gray/40 text-xl mx-2">•</span>
            <div className="flex items-center gap-2 text-light-gray/90 text-xs md:text-sm">
              <Clock size={18} className="text-main-red" />
              <span>ÀS 20:03 HORAS</span>
            </div>
            <span className="hidden md:inline-block text-light-gray/40 text-xl mx-2">•</span>
            <div className="flex items-center gap-2 text-light-gray/90 text-xs md:text-sm">
              <MapPin size={18} className="text-main-red" />
              <span>ALPHAVILLE - SP</span>
            </div>
          </motion.div>
          
          <motion.a
            href="#garanta-seu-ingresso"
            className="mt-2 mb-12 flex justify-center items-center w-full max-w-sm mx-auto px-8 py-4 rounded-lg font-semibold text-lg text-white shadow-xl transition-all duration-300 text-center font-[Montserrat,sans-serif]"
            style={{
              background: "linear-gradient(90deg, #333 0%, #555 50%, #333 100%)",
              backgroundSize: "200% 100%",
              boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.5)",
              transition: "background-position 0.5s ease, transform 0.2s ease, box-shadow 0.2s ease",
              transitionDelay: '0.6s' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = "100% 0";
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 20px 0 rgba(0, 0, 0, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = "0% 0";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px 0 rgba(0, 0, 0, 0.5)";
            }}
            variants={entradaTexto}
            initial="hidden"
            animate="visible"
          >
            QUERO MEU LUGAR NA MASTERCLASS
          </motion.a>
          
          <motion.div
            variants={entradaImagem}
            initial="hidden"
            animate="visible"
            className="w-screen mb-16 !p-0 !m-0 sm:w-full sm:max-w-3xl sm:flex sm:justify-center sm:relative sm:left-0 sm:right-0 sm:translate-x-0"
          >
            <img
              src="/lovable-uploads/banner-wide.png"
              alt="Banner Pedro Bertotto"
              className="w-screen rounded-none sm:rounded-2xl shadow-2xl border-2 border-white/10 object-cover h-auto transition-transform duration-300 hover:scale-[1.02]"
              style={{ background: 'rgba(10,10,10,0.7)' }}
            />
          </motion.div>
          
          <section id="garanta-seu-ingresso" className="w-full max-w-5xl flex flex-col items-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-2 tracking-tight"
              variants={entradaTexto}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: '0.3s' }}
            >
              GARANTA SEU INGRESSO<br className="md:hidden" /> PRESENCIAL
            </motion.h2>
            <motion.p 
              className="text-main-red text-center font-semibold mb-10 text-base md:text-lg"
              variants={entradaTexto}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: '0.4s' }}
            >
              Vagas <span className="underline decoration-wavy decoration-main-red/50">LIMITADAS</span> ao espaço do auditório
            </motion.p>
            
            <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-stretch">
              {/* GOLD MAKER */}
              <motion.div 
                className="ingresso-card flex-1 bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-400 border border-amber-600 rounded-2xl shadow-xl p-8 flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:border-amber-400"
                variants={entradaCards(0.5)}
                initial="hidden"
                animate="visible"
              >
                <span className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">1º Lote</span>
                <h3 className="text-3xl font-extrabold text-amber-800 mb-4 tracking-tight font-sans mt-8">GOLD MAKER</h3>
                <ul className="text-neutral-700 text-sm md:text-base mb-6 space-y-2.5 text-left w-full max-w-xs mx-auto list-none font-medium">
                  <li className="flex items-center"><span className="text-amber-600 mr-2">✓</span> Evento presencial 10/06</li>
                  <li className="flex items-center"><span className="text-amber-600 mr-2">✓</span> Assento garantido</li>
                  <li className="flex items-center"><span className="text-amber-600 mr-2">✓</span> Conteúdo inédito ao vivo</li>
                  <li className="flex items-center"><span className="text-amber-600 mr-2">✓</span> Networking Cash On Delivery</li>
                  <li className="flex items-center"><span className="text-amber-600 mr-2">✓</span> Camiseta oficial + brindes</li>
                </ul>
                <div className="mb-2 text-amber-600/80 text-sm line-through">De R$ 497,00</div>
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl md:text-4xl font-extrabold text-neutral-800 mr-1.5 font-sans">12x</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-amber-700 font-sans">R$29,70</span>
                </div>
                <div className="text-neutral-600 text-sm mb-8">ou R$ 297 à vista</div>
                <button className="w-full max-w-xs py-3 px-6 rounded-lg font-semibold text-base text-black bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 shadow-lg hover:shadow-yellow-400/40 transition-all font-sans tracking-wide hover:brightness-110 transform hover:scale-105">QUERO INGRESSO GOLD</button>
              </motion.div>
              
              {/* BLACK MAKER */}
              <motion.div 
                className="ingresso-card ingresso-card-black flex-1 bg-gradient-to-br from-[#181818] to-[#0d0d0d] border border-main-red/70 rounded-2xl shadow-xl p-8 flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:border-main-red"
                variants={entradaCards(0.7)}
                initial="hidden"
                animate="visible"
              >
                <span className="absolute top-4 left-4 bg-main-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">Ingresso VIP</span>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight font-sans mt-8">BLACK MAKER</h3>
                <ul className="text-light-gray/80 text-sm md:text-base mb-6 space-y-2.5 text-left w-full max-w-xs mx-auto list-none font-medium">
                  <li className="flex items-center"><span className="text-main-red mr-2">✓</span> Evento presencial 10/06</li>
                  <li className="flex items-center"><span className="text-main-red mr-2">✓</span> <span className="font-semibold text-white">Área VIP</span> auditório</li>
                  <li className="flex items-center"><span className="text-main-red mr-2">✓</span> Conteúdo inédito ao vivo</li>
                  <li className="flex items-center"><span className="text-main-red mr-2">✓</span> Networking Cash On Delivery</li>
                  <li className="flex items-center"><span className="text-main-red mr-2">✓</span> Camiseta oficial + brindes</li>
                  <li className="flex items-center"><span className="text-main-red mr-2 font-bold">✓</span> <span className="font-bold text-main-red bg-white/10 px-2 py-0.5 rounded">Almoço exclusivo 11/06</span></li>
                </ul>
                <div className="mb-2 text-light-gray/50 text-sm line-through">De R$ 1.997,00</div>
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl md:text-4xl font-extrabold text-white mr-1.5 font-sans">12x</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-main-red font-sans">R$99,70</span>
                </div>
                <div className="text-light-gray/70 text-sm mb-8">ou R$ 997 à vista</div>
                <button className="w-full max-w-xs py-3 px-6 rounded-lg font-semibold text-base text-white bg-gradient-to-r from-main-red via-red-600 to-pink-600 shadow-lg hover:shadow-main-red/40 transition-all font-sans tracking-wide hover:brightness-110 transform hover:scale-105">QUERO INGRESSO BLACK</button>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}