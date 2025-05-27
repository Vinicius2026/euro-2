import React from "react";
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import '../components/ui/card.css';

export default function Ingresso() {
  return (
    <div className="bg-almost-black min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Fundo animado de estrelas minimalista */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="aurora-anim w-full h-full">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className={`star star${(i % 6) + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.7 + Math.random() * 0.3
              }}
            />
          ))}
        </div>
      </div>
      {/* Logo no topo */}
      <img src="/lovable-uploads/logo.png" alt="Logo Do Real ao Euro" className="w-48 md:w-56 mb-8 mt-2 mx-auto" />
      {/* Headline */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight mb-2">
        FRENTE A FRENTE COM<br />
        <span className="text-main-red">PEDRO BERTOTTO</span>
      </h1>
      {/* Subheadline */}
      <p className="text-light-gray/90 text-center mt-4 mb-6 max-w-2xl text-base md:text-lg">
        Você pode estar <span className="font-bold text-white">PRESENCIALMENTE</span> comigo e com meu time na Masterclass "Do Real ao Euro". Uma noite única de aprendizado, conexão e muito networking!
      </p>
      {/* Bloco de data/hora/local */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-dark-gray/60 border border-dark-gray rounded-lg px-6 py-4 mb-8 w-full max-w-xl">
        <div className="flex items-center gap-2 text-light-gray/90 text-xs md:text-sm">
          <CalendarDays size={18} className="text-main-red" />
          <span>10 DE JUNHO</span>
        </div>
        <span className="hidden md:inline-block text-light-gray/40 text-xl">•</span>
        <div className="flex items-center gap-2 text-light-gray/90 text-xs md:text-sm">
          <Clock size={18} className="text-main-red" />
          <span>ÀS 20:03 HORAS</span>
        </div>
        <span className="hidden md:inline-block text-light-gray/40 text-xl">•</span>
        <div className="flex items-center gap-2 text-light-gray/90 text-xs md:text-sm">
          <MapPin size={18} className="text-main-red" />
          <span>ALPHAVILLE - SP</span>
        </div>
      </div>
      {/* Botão CTA */}
      <a
        href="#"
        className="mt-2 flex justify-center items-center w-full max-w-xs mx-auto px-6 py-3 rounded-lg font-semibold text-base text-white shadow-lg transition-all duration-200 text-center"
        style={{
          background: "linear-gradient(90deg, #1a1a1a 0%, #ff7a29 50%, #1a1a1a 100%)",
          boxShadow: "0 4px 32px 0 #ff7a2940"
        }}
      >
        ATÉ 1.000 EUROS POR DIA
      </a>
      {/* Imagem centralizada estilizada com animação */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-12 w-full max-w-3xl flex justify-center"
      >
        <img
          src="/lovable-uploads/banner-wide.png"
          alt="Banner Pedro Bertotto"
          className="rounded-2xl shadow-xl border border-dark-gray/60 object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
          style={{ background: 'rgba(10,10,10,0.7)' }}
        />
      </motion.div>
      {/* Seção de opções de ingressos */}
      <section className="w-full max-w-5xl mt-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2 tracking-tight">GARANTA SEU INGRESSO<br className="md:hidden" /> PRESENCIAL</h2>
        <p className="text-main-red text-center font-semibold mb-1 text-base md:text-lg">Vagas LIMITADAS ao espaço do auditório</p>
        <div className="mt-8 w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* GOLD MAKER */}
          <div className="flex-1 bg-[#181818] border border-[#333] rounded-2xl shadow-lg p-8 flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_4px_rgba(255,215,0,0.25)] hover:border-gold-400">
            <span className="absolute top-4 left-4 bg-main-red text-white text-xs font-bold px-3 py-1 rounded-full">1º Lote</span>
            <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight font-sans">GOLD MAKER</h3>
            <ul className="text-light-gray/90 text-sm md:text-base mb-6 space-y-2 text-left w-full max-w-xs mx-auto list-none font-medium">
              <li>✔️ Evento presencial 10/06</li>
              <li>✔️ Assento garantido</li>
              <li>✔️ Conteúdo inédito ao vivo</li>
              <li>✔️ Networking Cash On Delivery</li>
              <li>✔️ Camiseta oficial + brindes</li>
            </ul>
            <div className="mb-2 text-light-gray/60 text-sm line-through">De R$ 497,00</div>
            <div className="flex items-end mb-1">
              <span className="text-3xl md:text-4xl font-extrabold text-white mr-2 font-sans">12x</span>
              <span className="text-4xl md:text-5xl font-extrabold text-white font-sans">R$29,70</span>
            </div>
            <div className="text-light-gray/80 text-sm mb-6">ou R$ 297 à vista</div>
            <button className="w-full max-w-xs py-2 px-6 rounded-lg font-semibold text-base text-white bg-gradient-to-r from-[#3a3a3a] via-gold-400 to-[#3a3a3a] shadow-md hover:brightness-110 transition-all font-sans tracking-wide">INGRESSO GOLD</button>
          </div>
          {/* BLACK MAKER */}
          <div className="flex-1 bg-[#181818] border border-main-red rounded-2xl shadow-lg p-8 flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_4px_rgba(255,0,0,0.18)] hover:border-main-red">
            <span className="absolute top-4 left-4 bg-main-red text-white text-xs font-bold px-3 py-1 rounded-full">Ingresso VIP</span>
            <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight font-sans">BLACK MAKER</h3>
            <ul className="text-light-gray/90 text-sm md:text-base mb-6 space-y-2 text-left w-full max-w-xs mx-auto list-none font-medium">
              <li>✔️ Evento presencial 10/06</li>
              <li>✔️ Área VIP auditório</li>
              <li>✔️ Conteúdo inédito ao vivo</li>
              <li>✔️ Networking Cash On Delivery</li>
              <li>✔️ Camiseta oficial + brindes</li>
              <li><span className="text-main-red font-semibold">✔️ Almoço exclusivo 11/06</span></li>
            </ul>
            <div className="mb-2 text-light-gray/60 text-sm line-through">De R$ 1.997,00</div>
            <div className="flex items-end mb-1">
              <span className="text-3xl md:text-4xl font-extrabold text-white mr-2 font-sans">12x</span>
              <span className="text-4xl md:text-5xl font-extrabold text-main-red font-sans">R$99,70</span>
            </div>
            <div className="text-light-gray/80 text-sm mb-6">ou R$ 997 à vista</div>
            <button className="w-full max-w-xs py-2 px-6 rounded-lg font-semibold text-base text-black bg-white/80 shadow-md hover:brightness-110 transition-all font-sans tracking-wide">INGRESSO BLACK</button>
          </div>
        </div>
      </section>
    </div>
  );
}