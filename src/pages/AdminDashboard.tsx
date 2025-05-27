import React, { useState } from 'react';
import { BarChart2, Users, Gift, Code, MessageCircle, Menu, X } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from 'recharts';

const menu = [
  { id: 'metricas', label: 'Métricas', icon: <BarChart2 size={16} /> },
  { id: 'usuarios', label: 'Painel de Usuários', icon: <Users size={16} /> },
  { id: 'bonus', label: 'Distribuir Bônus', icon: <Gift size={16} /> },
  { id: 'chat', label: 'Gestão de Chat', icon: <MessageCircle size={16} /> },
  { id: 'api', label: 'API', icon: <Code size={16} /> },
];

// Dados mock para gráficos
const metricasData = [
  { dia: 'Seg', registros: 7, visitas: 40 },
  { dia: 'Ter', registros: 10, visitas: 55 },
  { dia: 'Qua', registros: 12, visitas: 60 },
  { dia: 'Qui', registros: 8, visitas: 48 },
  { dia: 'Sex', registros: 14, visitas: 70 },
  { dia: 'Sáb', registros: 3, visitas: 20 },
  { dia: 'Dom', registros: 5, visitas: 30 },
];
const comparativoData = [
  { dia: 'Hoje', registros: 12, registrosOntem: 8 },
  { dia: 'Ontem', registros: 8, registrosOntem: 10 },
];

export default function AdminDashboard() {
  const [active, setActive] = useState('metricas');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#181C23] text-[#E3E6EB] font-sans text-[13px]">
      {/* Sidebar Mobile Drawer */}
      <div className={`fixed inset-0 z-40 bg-black/60 transition-opacity md:hidden ${sidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)} />
      <aside className={`fixed top-0 left-0 z-50 h-full w-60 bg-gradient-to-b from-[#23272F] via-[#181C23] to-[#181C23] border-r border-[#23272F] flex flex-row py-6 px-0 gap-0 transition-transform duration-300 md:static md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:flex md:w-52 md:py-6 md:px-0 shadow-2xl md:shadow-none`}>
        {/* Logo e nome - MOBILE */}
        <div className="flex flex-col items-center justify-start w-20 min-w-[80px] border-r border-[#2A3140] pr-2 mr-2 h-full relative bg-[#23272F]/60 md:bg-transparent md:pr-2 md:mr-2">
          <div className="flex flex-col items-center w-full md:mt-2 md:mb-2 mt-6 mb-2">
            <img src="/lovable-uploads/logo.png" alt="Logo" className="h-12 w-auto max-w-[60px] object-contain mb-1 drop-shadow-lg" />
            <span className="text-[11px] text-[#E3E6EB]/20 font-light tracking-wide mt-1 mb-2 md:mb-0" style={{letterSpacing: '0.04em'}}>Pedro Bertotto</span>
          </div>
          <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#2A3140] via-[#23272F] to-[#181C23] opacity-60 md:block hidden" />
        </div>
        {/* Menu */}
        <nav className="flex flex-col gap-1 flex-1 pl-2 md:pl-2 pt-4 md:pt-0">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setSidebarOpen(false); }}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg text-base md:text-xs font-medium transition-all duration-200 w-full border-l-4 ${active === item.id ? 'bg-[#23272F]/80 text-[#7EC4F8] shadow border-l-[#7EC4F8]' : 'hover:bg-[#23272F] hover:text-[#7EC4F8] text-[#AEB4C0] border-l-transparent'} md:rounded-md md:px-3 md:py-2 md:text-xs`}
              style={{marginBottom: 4}}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      {/* Botão menu mobile */}
      <button className="fixed top-4 left-4 z-50 md:hidden bg-[#23272F]/90 p-3 rounded-full border border-[#23272F] text-[#7EC4F8] shadow-lg hover:bg-[#23272F]/80 transition-all duration-200" onClick={() => setSidebarOpen(true)} style={{ display: sidebarOpen ? 'none' : 'block' }}>
        <Menu size={26} />
      </button>
      {/* Botão fechar drawer mobile */}
      {sidebarOpen && (
        <button className="fixed top-4 left-56 z-50 md:hidden bg-[#23272F]/90 p-3 rounded-full border border-[#23272F] text-[#7EC4F8] shadow-lg hover:bg-[#23272F]/80 transition-all duration-200" onClick={() => setSidebarOpen(false)}>
          <X size={26} />
        </button>
      )}
      {/* Main content */}
      <main className="flex-1 p-2 pt-14 md:pt-8 md:p-8 bg-[#181C23] min-h-screen w-full">
        {active === 'metricas' && (
          <section>
            <h2 className="text-lg font-bold mb-4 text-[#7EC4F8]">Métricas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div className="bg-[#23272F] rounded-md p-3 text-center">
                <div className="text-[10px] text-[#AEB4C0] mb-1">Hoje</div>
                <div className="text-lg font-bold">12</div>
                <div className="text-[10px] text-[#7EC4F8]">Usuários registrados</div>
              </div>
              <div className="bg-[#23272F] rounded-md p-3 text-center">
                <div className="text-[10px] text-[#AEB4C0] mb-1">Ontem</div>
                <div className="text-lg font-bold">8</div>
                <div className="text-[10px] text-[#7EC4F8]">Usuários registrados</div>
              </div>
              <div className="bg-[#23272F] rounded-md p-3 text-center">
                <div className="text-[10px] text-[#AEB4C0] mb-1">Semana</div>
                <div className="text-lg font-bold">54</div>
                <div className="text-[10px] text-[#7EC4F8]">Usuários registrados</div>
              </div>
              <div className="bg-[#23272F] rounded-md p-3 text-center">
                <div className="text-[10px] text-[#AEB4C0] mb-1">Mês</div>
                <div className="text-lg font-bold">210</div>
                <div className="text-[10px] text-[#7EC4F8]">Usuários registrados</div>
              </div>
            </div>
            {/* Gráfico de barras: Registros e Visitas por dia */}
            <div className="bg-[#23272F] rounded-md p-3 mb-6">
              <h3 className="text-xs font-semibold mb-2 text-[#7EC4F8]">Registros e Visitas por Dia</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={metricasData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#23272F" />
                    <XAxis dataKey="dia" stroke="#AEB4C0" fontSize={11} />
                    <YAxis stroke="#AEB4C0" fontSize={11} />
                    <Tooltip contentStyle={{ background: '#23272F', border: 'none', fontSize: 12, color: '#E3E6EB' }} />
                    <Legend wrapperStyle={{ fontSize: 11, color: '#7EC4F8' }} />
                    <Bar dataKey="registros" fill="#7EC4F8" name="Registros" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="visitas" fill="#AEB4C0" name="Visitas" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Gráfico de linha: Comparativo Hoje x Ontem */}
            <div className="bg-[#23272F] rounded-md p-3 mb-6">
              <h3 className="text-xs font-semibold mb-2 text-[#7EC4F8]">Comparativo Hoje x Ontem</h3>
              <div className="w-full h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={comparativoData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#23272F" />
                    <XAxis dataKey="dia" stroke="#AEB4C0" fontSize={11} />
                    <YAxis stroke="#AEB4C0" fontSize={11} />
                    <Tooltip contentStyle={{ background: '#23272F', border: 'none', fontSize: 12, color: '#E3E6EB' }} />
                    <Legend wrapperStyle={{ fontSize: 11, color: '#7EC4F8' }} />
                    <Line type="monotone" dataKey="registros" stroke="#7EC4F8" name="Hoje" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="registrosOntem" stroke="#AEB4C0" name="Ontem" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Box de métricas do Facebook (mockada, grade de dias) */}
            <div className="bg-[#23272F] rounded-md p-4 mb-6 border border-[#3b5998]/30">
              <div className="flex items-center gap-2 mb-4">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#3b5998"/><path d="M20.5 16.5H18V26H14V16.5H12V13.5H14V11.8C14 9.7 15.2 8 18 8H21V11H19.5C18.7 11 18.5 11.3 18.5 11.8V13.5H21L20.5 16.5Z" fill="white"/></svg>
                <span className="text-[#3b5998] font-bold text-xs">Facebook Métricas</span>
                <span className="ml-2 text-[10px] text-[#AEB4C0] italic">Conectado à API do Facebook (mock)</span>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs text-left">
                  <thead>
                    <tr className="text-[#AEB4C0] border-b border-[#181C23]">
                      <th className="py-2 px-2 font-semibold">Dia</th>
                      <th className="py-2 px-2 font-semibold">Alcance</th>
                      <th className="py-2 px-2 font-semibold">Engajamento</th>
                      <th className="py-2 px-2 font-semibold">Cliques</th>
                      <th className="py-2 px-2 font-semibold">Conversões</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { dia: 'Seg', alcance: 1200, engajamento: 180, cliques: 40, conversoes: 2 },
                      { dia: 'Ter', alcance: 1500, engajamento: 210, cliques: 55, conversoes: 4 },
                      { dia: 'Qua', alcance: 1700, engajamento: 250, cliques: 60, conversoes: 5 },
                      { dia: 'Qui', alcance: 1400, engajamento: 190, cliques: 48, conversoes: 3 },
                      { dia: 'Sex', alcance: 2000, engajamento: 320, cliques: 70, conversoes: 7 },
                      { dia: 'Sáb', alcance: 800, engajamento: 90, cliques: 20, conversoes: 1 },
                      { dia: 'Dom', alcance: 1100, engajamento: 130, cliques: 30, conversoes: 2 },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-[#181C23] hover:bg-[#181C23]/60 transition-colors">
                        <td className="py-2 px-2 font-semibold text-[#7EC4F8]">{row.dia}</td>
                        <td className="py-2 px-2">{row.alcance.toLocaleString()}</td>
                        <td className="py-2 px-2">{row.engajamento.toLocaleString()}</td>
                        <td className="py-2 px-2">{row.cliques.toLocaleString()}</td>
                        <td className="py-2 px-2">{row.conversoes.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-xs text-[#AEB4C0] mt-4">
              Para ver métricas unitárias, faça a gestão de usuário.{' '}
              <button className="text-[#7EC4F8] underline hover:text-[#AEB4C0]" onClick={() => setActive('usuarios')}>
                Ir para Painel de Usuários
              </button>
            </div>
          </section>
        )}
        {active === 'usuarios' && (
          <section>
            <h2 className="text-lg font-bold mb-4 text-[#7EC4F8]">Painel de Usuários</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs bg-[#23272F] rounded-md">
                <thead>
                  <tr className="text-left text-[#AEB4C0]">
                    <th className="py-2 px-3">Nome</th>
                    <th className="py-2 px-3">Email</th>
                    <th className="py-2 px-3">Contato</th>
                    <th className="py-2 px-3">Quiz</th>
                    <th className="py-2 px-3">Assistiu 10/06?</th>
                    <th className="py-2 px-3">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Exemplo de usuários mockados */}
                  {[
                    { nome: 'João Silva', email: 'joao@email.com', contato: '(11) 99999-9999', quiz: 'A', assistiu: false },
                    { nome: 'Maria Souza', email: 'maria@email.com', contato: '(21) 98888-8888', quiz: 'B', assistiu: false },
                    { nome: 'Carlos Lima', email: 'carlos@email.com', contato: '(31) 97777-7777', quiz: 'Nenhum', assistiu: false },
                  ].map((user, idx) => (
                    <tr key={idx} className="border-b border-[#181C23]">
                      <td className="py-2 px-3">{user.nome}</td>
                      <td className="py-2 px-3">{user.email}</td>
                      <td className="py-2 px-3">{user.contato}</td>
                      <td className="py-2 px-3">{user.quiz}</td>
                      <td className="py-2 px-3">{user.assistiu ? 'Sim' : 'Não'}</td>
                      <td className="py-2 px-3 flex gap-2">
                        <button className="px-2 py-1 text-[11px] rounded bg-[#7EC4F8] hover:bg-[#5ea6d6] text-[#181C23]">Excluir</button>
                        <button className="px-2 py-1 text-[11px] rounded bg-[#AEB4C0] hover:bg-[#7EC4F8] text-[#181C23]">Bloquear</button>
                        <div className="relative group">
                          <button className="px-2 py-1 text-[11px] rounded bg-[#23272F] hover:bg-[#7EC4F8] hover:text-[#181C23] text-[#7EC4F8] border border-[#7EC4F8]">Entregar Bônus</button>
                          {/* Dropdown de bônus (mock) */}
                          <div className="absolute left-0 top-8 z-10 hidden group-hover:block bg-[#23272F] border border-[#23272F] rounded shadow-lg min-w-[140px]">
                            <button className="block w-full text-left px-4 py-2 text-[11px] hover:bg-[#181C23]">Aula</button>
                            <button className="block w-full text-left px-4 py-2 text-[11px] hover:bg-[#181C23]">Ingresso Online</button>
                            <button className="block w-full text-left px-4 py-2 text-[11px] hover:bg-[#181C23]">Ingresso Presencial</button>
                            <button className="block w-full text-left px-4 py-2 text-[11px] hover:bg-[#181C23]">Mentoria</button>
                            <button className="block w-full text-left px-4 py-2 text-[11px] hover:bg-[#181C23]">Consultoria</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {active === 'bonus' && (
          <section>
            <h2 className="text-lg font-bold mb-4 text-[#7EC4F8]">Distribuir Bônus</h2>
            <div className="bg-[#23272F] rounded-md p-5 mb-6">
              <div className="mb-3 text-xs text-[#AEB4C0]">Escolha o bônus e o grupo de usuários para distribuição em massa:</div>
              <div className="flex flex-col md:flex-row gap-3 mb-3">
                <select className="bg-[#181C23] border border-[#23272F] rounded px-2 py-1 text-xs text-[#E3E6EB]">
                  <option>Aula</option>
                  <option>Ingresso Online</option>
                  <option>Ingresso Presencial</option>
                  <option>Mentoria</option>
                  <option>Consultoria</option>
                </select>
                <select className="bg-[#181C23] border border-[#23272F] rounded px-2 py-1 text-xs text-[#E3E6EB]">
                  <option>Todos que participaram dos 2 eventos</option>
                  <option>Participantes do evento 10/06</option>
                  <option>100 usuários aleatórios</option>
                </select>
                <button className="px-4 py-1 rounded bg-[#7EC4F8] hover:bg-[#5ea6d6] text-[#181C23] text-xs font-semibold">Distribuir</button>
              </div>
              <div className="text-[10px] text-[#AEB4C0]">O bônus será enviado por e-mail (exemplo visual, mockado).</div>
            </div>
          </section>
        )}
        {active === 'chat' && (
          <section>
            <h2 className="text-lg font-bold mb-4 text-[#7EC4F8]">Gestão de Chat</h2>
            <div className="text-xs text-[#AEB4C0]">Em breve...</div>
          </section>
        )}
        {active === 'api' && (
          <section>
            <h2 className="text-lg font-bold mb-4 text-[#7EC4F8]">API</h2>
            <div className="bg-[#23272F] rounded-md p-5 text-[#AEB4C0] text-xs">Em breve...</div>
          </section>
        )}
      </main>
    </div>
  );
} 