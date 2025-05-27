import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Lock, CalendarDays, Gift, DollarSign, Library, Wrench, LogOut, ChevronRight, PlayCircle, Menu, X } from 'lucide-react'; // Ícones, PlayCircle adicionado, Menu e X para menu mobile
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Para animações leves no quiz

const initialMenuItems = [
  { id: 'dia10', text: 'Dia 10/06 AO VIVO', icon: <CalendarDays size={18} />, available: true, locked: false },
  { id: 'dia11', text: 'Dia 11/06 BÔNUS SURPRESA', icon: <Gift size={18} />, available: false, locked: false },
  { id: 'dia12', text: 'Dia 12/06 LUCRO AO VIVO', icon: <DollarSign size={18} />, available: false, locked: false },
  { id: 'biblioteca', text: 'BIBLIOTECA', icon: <Library size={18} />, available: true, locked: true, sectionBreak: true }, // available: true para teste, mudar para false se necessário
  { id: 'ferramentas', text: 'FERRAMENTAS', icon: <Wrench size={18} />, available: true, locked: true }, // available: true para teste
];

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeContent, setActiveContent] = useState('dia10');
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({ q1: '', q2: '', q3: '' });
  const quizQuestions = [
    {
      question: 'Já vendeu drop ou cod fora do Brasil?',
      options: [
        { label: 'Sim', value: 'sim' },
        { label: 'Não', value: 'nao' },
      ],
      key: 'q1',
    },
    {
      question: 'Qual seu nível de experiência de Marketing.',
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
      key: 'q2',
    },
    {
      question: 'Já fez alguma loja na Shopify?',
      options: [
        { label: 'Sim', value: 'sim' },
        { label: 'Não', value: 'nao' },
      ],
      key: 'q3',
    },
  ];

  // Impede scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const handleQuiz = (value: string) => {
    const key = quizQuestions[quizStep].key;
    setQuizAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setQuizStep((prev) => prev + 1);
    }, 200);
  };

  if (!currentUser) {
    navigate("/");
    return null;
  }

  const renderContent = () => {
    switch (activeContent) {
      case 'dia10':
        return (
          <div className="bg-gray-800/70 p-8 rounded-xl shadow-2xl animate-fadeIn">
            <h2 className="text-lg font-bold mb-4" style={{ color: '#7a7a7a' }}>Dia 10/06 - Conteúdo AO VIVO</h2>
            <p className="mb-4" style={{ color: '#7a7a7a', fontSize: '0.85rem' }}>A transmissão ao vivo começará em breve. Prepare sua pipoca e anote tudo!</p>
            {/* Placeholder do Player de Vídeo */}
            <div className="aspect-video bg-black/50 border-2 border-red-500/30 rounded-lg flex items-center justify-center text-gray-500 shadow-inner">
              <PlayCircle size={64} className="opacity-30" />
              <span className="ml-4 text-xl">Player de Vídeo (Exemplo)</span>
            </div>
            <p className="text-xs mt-4 text-center" style={{ color: '#7a7a7a' }}>O vídeo será disponibilizado aqui no horário marcado: <span className="font-semibold">10/06 (20:03)</span></p>
          </div>
        );
      case 'dia11':
        return (
          <div className="bg-gray-800/70 p-8 rounded-xl shadow-2xl animate-fadeIn">
            <h2 className="text-3xl font-bold text-red-400 mb-6">Dia 11/06 - BÔNUS SURPRESA</h2>
            <p className="text-gray-300">O conteúdo deste dia ainda não está disponível. Volte em breve!</p>
          </div>
        );
      case 'dia12':
        return (
          <div className="bg-gray-800/70 p-8 rounded-xl shadow-2xl animate-fadeIn">
            <h2 className="text-3xl font-bold text-red-400 mb-6">Dia 12/06 - LUCRO AO VIVO</h2>
            <p className="text-gray-300">O conteúdo deste dia ainda não está disponível. Volte em breve!</p>
          </div>
        );
      // Adicionar casos para 'biblioteca', 'ferramentas' se necessário
      default:
        return <p className="text-gray-400 animate-fadeIn">Selecione um item do menu.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
          @keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }
          .animate-slideInLeft { animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1) forwards; }
          @keyframes fadeBg { from { opacity: 0; } to { opacity: 1; } }
          .animate-fadeBg { animation: fadeBg 0.2s linear forwards; }
        `}
      </style>
      {/* Menu Lateral Desktop */}
      <aside className="w-64 bg-gradient-to-br from-black via-gray-900 to-gray-950 p-5 flex-col border-r border-red-900/50 shadow-2xl space-y-2 hidden md:flex">
        <div className="mb-6 py-3 text-center border-b border-red-900/30">
          <img src="/lovable-uploads/logo.png" alt="Logo" className="h-10 w-auto mx-auto mb-2 drop-shadow-lg" />
          {currentUser?.fullName && <p className="text-xs font-semibold text-red-400 truncate font-mono">{currentUser.fullName}</p>}
          {currentUser?.email && !currentUser?.fullName && <p className="text-xs font-semibold text-red-400 truncate font-mono">{currentUser.email}</p>}
        </div>
        <nav className="flex-grow flex flex-col gap-1 mt-2">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.sectionBreak && <hr className="my-3 border-red-900/30" />}
              <button
                onClick={() => item.available && !item.locked && setActiveContent(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl transition-all duration-200 group text-xs font-semibold tracking-wide
                  ${activeContent === item.id && item.available && !item.locked ? 'bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 text-white shadow-lg scale-105' : 'hover:bg-red-700/20 hover:text-red-300 bg-black/40'}
                  ${item.locked ? 'opacity-40 cursor-not-allowed' : (item.available ? 'cursor-pointer' : 'opacity-60 cursor-not-allowed')}`}
                disabled={item.locked || !item.available}
                style={{letterSpacing: '0.02em'}}
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-red-500/20 via-pink-500/10 to-purple-600/10 text-red-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-purple-600 transition-all duration-200">
                  {item.icon}
                </span>
                <span className="flex-1 text-left truncate font-mono">{item.text}</span>
                {item.locked ? <Lock size={16} className="opacity-70"/> : (item.available ? <ChevronRight size={16} className={`transition-transform duration-200 ${activeContent === item.id ? 'rotate-90' : ''} group-hover:translate-x-0.5`} /> : null)}
              </button>
            </div>
          ))}
        </nav>
        <div className="mt-auto pt-4 border-t border-red-900/30">
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="w-full bg-gradient-to-r from-red-800 via-pink-700 to-purple-800 hover:from-red-700 hover:to-purple-700 text-white flex items-center justify-center space-x-2 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group text-xs font-semibold"
          >
            <LogOut size={16} />
            <span>Sair</span>
          </Button>
        </div>
      </aside>

      {/* Menu Mobile (Drawer) */}
      <div className="md:hidden fixed top-0 left-0 w-full z-40">
        {/* Topbar com botão hambúrguer */}
        <div className="flex items-center justify-between bg-black/90 px-4 py-3 border-b border-red-900/40 shadow-lg">
          <button onClick={() => setMobileMenuOpen(true)} className="text-red-400 focus:outline-none">
            <Menu size={28} />
          </button>
          <img src="/lovable-uploads/logo.png" alt="Logo" className="h-8 w-auto mx-auto drop-shadow-lg" />
          <div className="w-7" /> {/* Espaço para alinhar */}
        </div>
        {/* Drawer e backdrop */}
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/60 animate-fadeBg z-40" onClick={() => setMobileMenuOpen(false)} />
            <aside className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-gradient-to-br from-black via-gray-900 to-gray-950 border-r border-red-900/50 shadow-2xl z-50 animate-slideInLeft flex flex-col p-5">
              <div className="flex items-center justify-between mb-6">
                <img src="/lovable-uploads/logo.png" alt="Logo" className="h-8 w-auto drop-shadow-lg" />
                <button onClick={() => setMobileMenuOpen(false)} className="text-red-400 focus:outline-none ml-2">
                  <X size={28} />
                </button>
              </div>
              <nav className="flex-grow flex flex-col gap-1 mt-2 overflow-y-auto">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    {item.sectionBreak && <hr className="my-3 border-red-900/30" />}
                    <button
                      onClick={() => {
                        if (item.available && !item.locked) {
                          setActiveContent(item.id);
                          setMobileMenuOpen(false);
                        }
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group text-xs font-semibold tracking-wide mb-1
                        ${activeContent === item.id && item.available && !item.locked ? 'bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 text-white shadow-lg scale-105' : 'hover:bg-red-700/20 hover:text-red-300 bg-black/40'}
                        ${item.locked ? 'opacity-40 cursor-not-allowed' : (item.available ? 'cursor-pointer' : 'opacity-60 cursor-not-allowed')}`}
                      disabled={item.locked || !item.available}
                      style={{letterSpacing: '0.02em'}}
                    >
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-red-500/20 via-pink-500/10 to-purple-600/10 text-red-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-purple-600 transition-all duration-200">
                        {item.icon}
                      </span>
                      <span className="flex-1 text-left truncate font-mono">{item.text}</span>
                      {item.locked ? <Lock size={16} className="opacity-70"/> : (item.available ? <ChevronRight size={16} className={`transition-transform duration-200 ${activeContent === item.id ? 'rotate-90' : ''} group-hover:translate-x-0.5`} /> : null)}
                    </button>
                  </div>
                ))}
              </nav>
              <div className="mt-auto pt-4 border-t border-red-900/30">
                <Button
                  onClick={handleLogout}
                  variant="destructive"
                  className="w-full bg-gradient-to-r from-red-800 via-pink-700 to-purple-800 hover:from-red-700 hover:to-purple-700 text-white flex items-center justify-center space-x-2 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group text-xs font-semibold"
                >
                  <LogOut size={16} />
                  <span>Sair</span>
                </Button>
              </div>
            </aside>
          </>
        )}
      </div>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-y-auto min-h-screen">
        <div className="max-w-2xl mx-auto mt-16">
          {/* Título minimalista e futurista */}
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 mb-2 font-[Montserrat,sans-serif] drop-shadow-lg" style={{letterSpacing: '0.01em'}}>Dashboard</h1>
          <p className="text-sm text-gray-400 mb-6 font-mono">Bem-vindo(a) à sua central de controle do evento.</p>
          {renderContent()}
          <div className="mt-8 bg-black/30 backdrop-blur-sm border border-red-500/20 p-4 sm:p-6 rounded-lg shadow-xl animate-fadeIn">
              <h3 className="text-base sm:text-lg font-bold text-red-400 mb-3 text-center tracking-wide uppercase font-mono">Gamificação: Ingresso Meet Milionário!</h3>
              <p className="text-gray-400 text-xs leading-relaxed text-center">
                  Participe das aulas ao vivo, interaja e acumule pontos para garantir seu ingresso exclusivo para o evento presencial 'Meet Milionário'! Detalhes em breve.
              </p>
          </div>

          {/* QUIZZ MINIMALISTA */}
          <div className="mt-10 mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-black/80 via-gray-900/80 to-gray-950/90 border border-red-500/10 shadow-2xl flex flex-col items-center gap-6 max-w-xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 mb-2 font-[Montserrat,sans-serif] tracking-tight text-center">Responda para entrar no Grupo</h2>
            <div className="w-full flex flex-col items-center">
              {quizStep < quizQuestions.length ? (
                <motion.div
                  key={quizStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <p className="text-base sm:text-lg text-gray-200 font-semibold mb-6 text-center min-h-[48px]">{quizQuestions[quizStep].question}</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {quizQuestions[quizStep].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleQuiz(opt.value)}
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-bold shadow-md hover:scale-105 hover:from-red-400 hover:to-purple-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 text-base sm:text-lg min-w-[80px]"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-center"
                >
                  <p className="text-lg sm:text-xl text-green-400 font-bold mb-4 text-center">Agradecemos sua resposta!</p>
                  <Button
                    className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base sm:text-lg"
                    // onClick={() => window.open('LINK_DO_GRUPO', '_blank')}
                  >
                    Entrar no Grupo
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
