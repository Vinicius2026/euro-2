import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// SVGs com animações avançadas
const CalendarIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-red-400 group-hover:text-red-300 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
    <rect x="3" y="5" width="18" height="16" rx="3"/>
    <path d="M16 3v4M8 3v4M3 9h18"/>
    <circle cx="12" cy="14" r="1" fill="currentColor" className="animate-pulse"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-red-400 group-hover:text-red-300 transition-all duration-500 group-hover:rotate-180">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 3" className="animate-pulse"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-red-400 group-hover:text-red-300 transition-all duration-500 group-hover:scale-125">
    <rect x="3" y="7" width="18" height="10" rx="4"/>
    <polygon points="10,9 16,12 10,15" fill="currentColor" className="animate-pulse"/>
  </svg>
);

// Contador regressivo
const getTimeLeft = (targetDate) => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  const total = Math.max(0, diff);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Index = () => {
  const targetDate = new Date('2025-06-10T20:03:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Animação de gradiente no fundo e fade-in */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(2deg); }
          50% { transform: translate(0, -30px) rotate(0deg); }
          75% { transform: translate(-20px, -20px) rotate(-2deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-30px, 20px) rotate(-3deg); }
          50% { transform: translate(0, 40px) rotate(0deg); }
          75% { transform: translate(30px, 20px) rotate(3deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(15px, -15px); }
          66% { transform: translate(-15px, 15px); }
        }
        
        @keyframes particle-float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes light-ray-1 {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) skewX(-12deg) scaleY(0.8); }
          50% { opacity: 0.7; transform: translateX(-50%) skewX(-12deg) scaleY(1.2); }
        }
        
        @keyframes light-ray-2 {
          0%, 100% { opacity: 0.2; transform: translateX(-50%) skewX(12deg) scaleY(0.9); }
          50% { opacity: 0.5; transform: translateX(-50%) skewX(12deg) scaleY(1.1); }
        }
        
        @keyframes light-ray-3 {
          0%, 100% { opacity: 0.25; transform: translateX(-50%) skewX(-6deg) scaleY(0.7); }
          50% { opacity: 0.6; transform: translateX(-50%) skewX(-6deg) scaleY(1.3); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes title-emerge {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 59, 48, 0.5); }
          50% { text-shadow: 0 0 40px rgba(255, 59, 48, 0.8), 0 0 60px rgba(255, 59, 48, 0.3); }
        }
        
        @keyframes shine-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in-up-delay-1 {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up-delay-2 {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up-delay-3 {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-text {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes scale-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes number-flip {
          0% { transform: rotateY(0); }
          50% { transform: rotateY(90deg); }
          100% { transform: rotateY(0); }
        }
        
        @keyframes pulse-intense {
          0%, 100% { opacity: 0.8; transform: scale(1) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.1) rotate(5deg); }
        }
        
        @keyframes cta-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.7); }
          50% { transform: scale(1.02); box-shadow: 0 0 0 20px rgba(255, 59, 48, 0); }
        }
        
        @keyframes flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }
        
        @keyframes marquee-fast {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes diagonal-move {
          0% { background-position: 0 0; }
          100% { background-position: 20px 20px; }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes cosmic-glow {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes tv-flicker {
          0%, 100% { opacity: 1; filter: none; }
          10% { opacity: 0.95; filter: blur(0.2px); }
          20% { opacity: 0.98; filter: brightness(1.05); }
          30% { opacity: 0.92; filter: blur(0.3px); }
          40% { opacity: 1; filter: none; }
          50% { opacity: 0.97; filter: brightness(1.1); }
          60% { opacity: 0.93; filter: blur(0.1px); }
          70% { opacity: 1; filter: none; }
          80% { opacity: 0.96; filter: brightness(0.98); }
          90% { opacity: 1; filter: none; }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 10s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 6s ease-in-out infinite; }
        .animate-particle-float { animation: particle-float linear infinite; }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        .animate-light-ray-1 { animation: light-ray-1 4s ease-in-out infinite; }
        .animate-light-ray-2 { animation: light-ray-2 5s ease-in-out infinite; }
        .animate-light-ray-3 { animation: light-ray-3 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-title-emerge { animation: title-emerge 1s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
        .animate-gradient-shift { animation: gradient-shift 3s ease infinite; background-size: 200% 200%; }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-shine-sweep { animation: shine-sweep 3s ease-in-out infinite; }
        .animate-fade-in-up-delay-1 { animation: fade-in-up-delay-1 1s ease-out 0.5s both; }
        .animate-fade-in-up-delay-2 { animation: fade-in-up-delay-2 1s ease-out 1s both; }
        .animate-fade-in-up-delay-3 { animation: fade-in-up-delay-3 1s ease-out 1.5s both; }
        .animate-pulse-text { animation: pulse-text 2s ease-in-out infinite; }
        .animate-scale-bounce { animation: scale-bounce 2s ease-in-out infinite; }
        .animate-number-flip { animation: number-flip 0.6s ease-in-out; }
        .animate-pulse-intense { animation: pulse-intense 2s ease-in-out infinite; }
        .animate-cta-pulse { animation: cta-pulse 2s ease-in-out infinite; }
        .animate-flash { animation: flash 0.3s ease-in-out; }
        .animate-marquee-fast { animation: marquee-fast 20s linear infinite; }
        .animate-diagonal-move { animation: diagonal-move 4s linear infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-cosmic-glow { animation: cosmic-glow 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-tv-flicker { animation: tv-flicker 1.2s infinite steps(2); }
      `}</style>

      {/* Flicker do texto 'Ao Vivo' */}
      <style>{`
        @keyframes ao-vivo-flicker {
          0%, 80% { opacity: 1; }
          81% { opacity: 0; }
          82% { opacity: 1; }
          83% { opacity: 0; }
          84% { opacity: 1; }
          85% { opacity: 0; }
          86% { opacity: 1; }
          87% { opacity: 0; }
          88%, 100% { opacity: 1; }
        }
        .ao-vivo-flicker {
          animation: ao-vivo-flicker 8s infinite;
        }
      `}</style>

      {/* HERO SECTION SÓBRIO E TECH COM ANIMAÇÃO DE BACKGROUND */}
      <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
        {/* Camadas de animação de fundo (orbs, partículas, etc.) */}
        <div className="absolute inset-0">
          {/* Camada 1: Gradiente Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-950/30"></div>
          {/* Camada 2: Orbs Animados */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-red-500/30 rounded-full filter blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-600/20 rounded-full filter blur-3xl animate-float-reverse"></div>
            <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-red-400/25 rounded-full filter blur-2xl animate-float-fast"></div>
          </div>
          {/* Camada 3: Partículas Flutuantes */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400/60 rounded-full animate-particle-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 20}s`
                }}
              />
            ))}
          </div>
          {/* Camada 4: Grid Dinâmico */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,59,48,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,59,48,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move"></div>
          {/* Camada 5: Raios de Luz */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-red-500/30 via-transparent to-transparent transform -skew-x-12 animate-light-ray-1"></div>
            <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-red-400/20 via-transparent to-transparent transform skew-x-12 animate-light-ray-2"></div>
            <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-red-600/25 via-transparent to-transparent transform -skew-x-6 animate-light-ray-3"></div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="relative z-10 w-full max-w-xl mx-auto px-4 py-16 text-center flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="mb-4">
            <img
              src="/lovable-uploads/logo.png"
              alt="Logo"
              className="h-14 sm:h-24 w-auto mx-auto animate-float-gentle"
            />
          </div>

          {/* Título sóbrio e responsivo */}
          <h1
            className="
              text-3xl sm:text-5xl lg:text-6xl
              font-extrabold text-white mb-2
              leading-tight tracking-tight lg:tracking-wider lg:mb-4
              font-[Montserrat,sans-serif]
            "
          >
            REVELADO: O Método Exato Para Gerar
            <span className="block text-4xl sm:text-6xl lg:text-7xl font-black text-red-500 mt-2">
              €1.000
            </span>
            <span className="block text-lg sm:text-2xl lg:text-3xl text-gray-200 mt-2">
              Diariamente no Mercado Europeu
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base text-gray-400 mb-6">
            (e como <span className="text-white font-semibold">você</span> pode copiar e colar, mesmo saindo do zero)
          </p>

          {/* Cards de Data/Hora padronizados e menores, com transparência e efeito especial no 'Ao Vivo' */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {[
              { icon: CalendarIcon, text: '10 de Junho', label: 'Data', transparent: true },
              { icon: ClockIcon, text: '20:03h', label: 'Hora', transparent: true },
              { icon: YoutubeIcon, text: 'Ao Vivo', label: 'Transmissão', tvEffect: true }
            ].map((item, i) => (
              <div
                key={i}
                className={
                  `flex flex-col items-center justify-center w-28 h-20 rounded-xl shadow-md transition-all duration-300 group border ` +
                  (item.tvEffect
                    ? 'bg-black/40 border-red-500/40 relative overflow-hidden' // TV effect box
                    : 'bg-neutral-900/40 border-red-500/20') // Transparent boxes
                }
                style={{ minWidth: 90, minHeight: 60 }}
              >
                <span className="mb-1" style={{ opacity: item.transparent ? 0.7 : 1 }}>
                  <item.icon />
                </span>
                <span
                  className={
                    `text-[0.95rem] font-semibold mb-0.5 ` +
                    (item.tvEffect ? 'text-red-400 ao-vivo-flicker' : 'text-white')
                  }
                  style={{ opacity: item.transparent ? 0.7 : 1 }}
                >
                  {item.text}
                </span>
                <span className="text-[0.65rem] text-gray-400 tracking-wide" style={{ opacity: item.transparent ? 0.6 : 1 }}>{item.label}</span>
                {/* Efeito TV minimalista */}
                {item.tvEffect && (
                  <>
                    <div className="absolute inset-0 pointer-events-none" style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.04) 4px, transparent 6px)',
                      opacity: 0.5
                    }} />
                    <div className="absolute inset-0 pointer-events-none animate-tv-flicker" style={{
                      background: 'linear-gradient(90deg, transparent 80%, rgba(255,255,255,0.08) 100%)',
                      opacity: 0.3
                    }} />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Botões de Login e Cadastro */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">
            <button
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors font-[Inter,sans-serif]"
              style={{ fontFamily: 'Inter, Montserrat, sans-serif', fontWeight: 600 }}
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="w-full sm:w-auto relative border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors font-[Inter,sans-serif] overflow-hidden"
              style={{ fontFamily: 'Inter, Montserrat, sans-serif', fontWeight: 600, background: 'transparent' }}
            >
              <span className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
                background: 'radial-gradient(ellipse at 60% 40%, rgba(255,59,48,0.18) 0%, rgba(136,58,255,0.13) 60%, transparent 100%)',
                zIndex: 0,
                borderRadius: 'inherit',
                opacity: 1
              }} />
              <span className="relative z-10">Cadastro</span>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee HIPNOTIZANTE */}
      <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px] animate-diagonal-move"></div>
        <div className="animate-marquee-fast whitespace-nowrap">
          <span className="text-2xl font-black text-white mx-12 animate-text-glow">
            DO REAL AO EURO  PEDRO BERTOTTO  MERCADO EUROPEU  €1.000 DIÁRIOS  OPORTUNIDADE ÚNICA  
          </span>
        </div>
      </div>

      {/* Learning Section com Cards IMPACTANTES */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-red-950/5 to-black relative overflow-hidden">
        {/* Background Dinâmico */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl animate-float-reverse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/10 rounded-full filter blur-3xl animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block animate-bounce-gentle">
              <p className="text-red-400 font-bold text-lg mb-4 animate-pulse-text">Dia 10 de junho, às 20:03h</p>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 animate-title-emerge">
              O que você vai aprender no
            </h2>
            <div className="relative">
              <p className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient-shift">
                "DO REAL AO EURO"
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-text-glow opacity-30 blur-sm">
                "DO REAL AO EURO"
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 - Ultra Dinâmico */}
            <div className="group relative animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden h-full group-hover:transform group-hover:rotate-1">
                <div className="absolute top-0 left-0 w-full h-52 overflow-hidden">
                  <img src="/lovable-uploads/topo.png" alt="A Nova Escala" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent animate-shimmer"></div>
                </div>
                <div className="relative z-10 p-8 pt-60 h-full flex flex-col">
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-red-300 transition-colors animate-pulse-text">
                    A NOVA ESCALA
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    Como escalar rapidamente as vendas de qualquer produto usando uma estratégia validada na Europa.
                  </p>
                  <p className="text-red-400 font-bold text-sm animate-pulse-text">
                    🔥 A maior tendência dos últimos anos no digital!
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Movimento Constante */}
            <div className="group relative animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden h-full group-hover:transform group-hover:-rotate-1">
                <div className="absolute top-0 left-0 w-full h-52 overflow-hidden">
                  <img src="/lovable-uploads/form2.png" alt="COD na Europa" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-red-500/10 to-transparent animate-shimmer"></div>
                </div>
                <div className="relative z-10 p-8 pt-60 h-full flex flex-col">
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-red-300 transition-colors animate-pulse-text">
                    COD NA EUROPA
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    Como vender produtos físicos usando Contra Entrega na Europa e ganhar em euro, aumentando lucros em até 6x. Mercado sem concorrência.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Efeitos Holográficos */}
            <div className="group relative animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden h-full group-hover:transform group-hover:rotate-1">
                <div className="absolute top-0 left-0 w-full h-52 overflow-hidden">
                  <img src="/lovable-uploads/bb5d09b0-97ca-4706-88fb-e145e86fa790.png" alt="Moneymaker Milionário" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent animate-shimmer"></div>
                </div>
                <div className="relative z-10 p-8 pt-60 h-full flex flex-col">
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-red-300 transition-colors animate-pulse-text">
                    MONEYMAKER MILIONÁRIO
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Como aproveitar o melhor momento da história no mercado europeu e construir uma máquina de vendas em euro. Os segredos dos money makers mais bem pagos do mundo.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Efeitos Cósmicos */}
            <div className="group relative animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden h-full group-hover:transform group-hover:-rotate-1">
                <div className="absolute top-0 left-0 w-full h-52 overflow-hidden">
                  <img src="/lovable-uploads/3224acec-272b-4d0f-ab19-850e3fc1743a.png" alt="O Plano do Euro" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-red-500/10 to-transparent animate-shimmer"></div>
                </div>
                <div className="relative z-10 p-8 pt-60 h-full flex flex-col">
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-red-300 transition-colors animate-pulse-text">
                    O PLANO DO EURO
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Como qualquer pessoa vai sair com total clareza para colocar um negócio online rodando sozinho, faturando em euro e lucrando até 6x mais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botão Comprar Ingressos */}
        <div className="mt-8 md:mt-12 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button
            onClick={() => navigate('/ingresso')}
            className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 hover:from-red-600 hover:via-pink-600 hover:to-orange-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-cta-pulse"
          >
            COMPRAR INGRESSOS
          </button>
        </div>
      </section>

      {/* About Section CINEMATOGRÁFICO */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
        {/* Background Dinâmico */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,59,48,0.1)_0%,transparent_70%)] animate-cosmic-glow"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,59,48,0.03)_49%,rgba(255,59,48,0.03)_51%,transparent_52%)] bg-[length:60px_60px] animate-diagonal-move"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Photo com Efeitos INSANOS */}
            <div className="flex-shrink-0 relative animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-3xl blur-2xl animate-pulse-intense"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-red-500/10 via-transparent to-red-600/10 rounded-full animate-spin-slow"></div>
              <div className="relative">
                <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-red-500/50 hover:border-red-400/70 transition-all duration-500 hover:scale-105">
                  <img src="/lovable-uploads/e21733e2-8ea1-4ee7-9893-cad7aa419dd7.png" alt="Pedro Bertotto" className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-red-500 to-red-400 rounded-full filter blur-xl opacity-60 animate-pulse-glow"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-red-600 to-red-500 rounded-full filter blur-2xl opacity-40 animate-pulse-glow"></div>
              </div>
            </div>

            {/* Content com Animações Avançadas */}
            <div className="flex-1 space-y-8 animate-slide-in-right">
              <div className="relative">
                <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-xl border border-red-500/30 rounded-full px-8 py-3 animate-bounce-gentle">
                  <span className="text-red-400 font-black text-lg tracking-wider animate-pulse-text">⚡ QUEM SOU EU</span>
                </div>
              </div>
              
              <div className="relative">
                <h2 className="text-5xl lg:text-6xl font-black text-white animate-title-emerge">
                  PEDRO BERTOTTO
                </h2>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-600/20 blur-xl animate-shimmer"></div>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p className="animate-fade-in-up-delay-1">
                  Mais de <span className="text-red-400 font-bold animate-pulse-text">10 anos</span> de experiência no mercado digital, 
                  responsável por gerar <span className="text-white font-bold">milhões em vendas</span> para seus clientes e alunos.
                </p>
                
                <p className="animate-fade-in-up-delay-2">
                  Pioneiro no mercado europeu de <span className="text-red-400 font-bold">COD (Contra Entrega)</span>, 
                  ajudando empreendedores brasileiros a <span className="text-white font-bold">multiplicarem seus lucros</span> 
                  vendendo para a Europa.
                </p>
                
                <p className="animate-fade-in-up-delay-3">
                  Criador do método <span className="text-red-400 font-bold animate-pulse-text">"Do Real ao Euro"</span>, 
                  uma estratégia validada que já transformou <span className="text-white font-bold">centenas de vidas</span> 
                  e mudou para sempre a forma como brasileiros vendem online.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
                {[
                  "✓ +10 anos de mercado",
                  "✓ Milhões em vendas geradas",
                  "✓ Especialista em mercado europeu",
                  "✓ Criador do método validado"
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-xl border border-red-500/20 rounded-full px-6 py-2 animate-scale-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                    <span className="text-red-400 font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section IMPACTANTE */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-red-950/5 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float-reverse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 animate-title-emerge">
              O que estão falando sobre o
            </h2>
            <div className="relative">
              <p className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient-shift">
                MÉTODO DO EURO
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-text-glow opacity-30 blur-sm">
                MÉTODO DO EURO
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "RICARDO SILVA",
                result: "€2.847 no primeiro mês",
                text: "Nunca imaginei que seria possível ganhar tanto dinheiro vendendo para a Europa. O método é simplesmente revolucionário!",
                delay: "0.1s"
              },
              {
                name: "MARINA COSTA",
                result: "€4.200 em 45 dias",
                text: "Comecei do zero total e hoje faturo mais em euro do que ganhava em reais no meu emprego. Mudou minha vida!",
                delay: "0.2s"
              },
              {
                name: "CARLOS MENDES",
                result: "€6.800 mensais",
                text: "O mercado europeu realmente não tem concorrência. Estou escalando rapidamente seguindo o passo a passo.",
                delay: "0.3s"
              }
            ].map((testimonial, i) => (
              <div key={i} className="group relative animate-slide-in-up" style={{ animationDelay: testimonial.delay }}>
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-glow"></div>
                <div className="relative bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:scale-105 rounded-3xl p-8 min-h-[300px] group-hover:transform group-hover:rotate-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center animate-pulse-glow">
                      <span className="text-white font-black text-lg">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg animate-pulse-text">{testimonial.name}</h4>
                      <p className="text-red-400 font-semibold animate-pulse-text">{testimonial.result}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex text-red-400 animate-pulse-text">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section EXPLOSIVO */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-red-950/20 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,59,48,0.2)_0%,transparent_70%)] animate-cosmic-glow"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full filter blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-red-600/15 rounded-full filter blur-3xl animate-float-reverse"></div>
            <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-red-400/25 rounded-full filter blur-2xl animate-float-fast"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12 animate-bounce-gentle">
            <div className="inline-flex items-center bg-gradient-to-r from-red-500/30 to-red-600/30 backdrop-blur-xl border border-red-500/50 rounded-full px-12 py-4">
              <span className="text-red-400 font-black text-xl tracking-wider animate-pulse-text">🚨 ÚLTIMA CHANCE</span>
            </div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 animate-title-emerge">
            NÃO PERCA ESTA
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient-shift">
              OPORTUNIDADE ÚNICA
            </span>
          </h2>

          <p className="text-2xl text-gray-300 mb-4 animate-fade-in-up-delay-1">
            O mercado europeu está <span className="text-red-400 font-bold animate-pulse-text">esperando por você!</span>
          </p>
          
          <p className="text-xl text-gray-400 mb-12 animate-fade-in-up-delay-2">
            Enquanto outros perdem tempo, você pode estar
            <br />
            <span className="text-white font-bold">faturando em EURO ainda hoje!</span>
          </p>

          <p className="text-red-400 font-bold text-lg mt-8 anime-pulse-text">
            ⏰ Vagas limitadas • 100% Gratuito • Ao Vivo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-red-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img src="/lovable-uploads/logo.png" alt="Logo DR€" className="h-16 w-auto mx-auto object-contain animate-pulse-glow" />
          </div>
          
          <p className="text-gray-400 mb-4">
            © 2025 Do Real ao Euro - Pedro Bertotto
          </p>
          
          <p className="text-gray-500 text-sm">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.<br />
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
          <div className="flex justify-end mt-8">
            <Link to="/admin" className="px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400/30">
              EleA
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;