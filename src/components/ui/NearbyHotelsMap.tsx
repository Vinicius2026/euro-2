import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Building2, Star, X, Ticket, Info } from 'lucide-react';

const HOTELS_DATA = [
  { id: 'h1', name: 'Blue Tree Premium', x: 70, y: 150, address: 'Av. Copacabana, 150', rating: 4.5, priceRange: '$$$' },
  { id: 'h2', name: 'Radisson Alphaville', x: 220, y: 100, address: 'Al. Rio Negro, 1030', rating: 4.7, priceRange: '$$$$' },
  { id: 'h3', name: 'Ibis Tamboré', x: 150, y: 250, address: 'Av. Piracema, 292', rating: 4.2, priceRange: '$$' },
  { id: 'h4', name: 'Comfort Suites Alphaville', x: 280, y: 200, address: 'Al. Madeira, 398', rating: 4.4, priceRange: '$$$' },
  { id: 'h5', name: 'Bourbon Alphaville', x: 100, y: 70, address: 'Al. Cauaxi, 223', rating: 4.6, priceRange: '$$$$' },
];

const EVENT_LOCATION = { x: 180, y: 180 };

export default function NearbyHotelsMapEnhanced() {
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setSelectedHotelId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMarkerClick = (hotelId: string) => {
    setSelectedHotelId(prevId => (prevId === hotelId ? null : hotelId));
  };

  // Define as animações em uma string para serem injetadas no <style>
  // Isso garante que o transform: translate(-50%, ...) para centralização horizontal esteja sempre na animação.
  const popupAnimations = `
    @keyframes popupFadeInScaleUpBase { /* Para popup abrindo para baixo */
      0% { opacity: 0; transform: translate(-50%, -8px) scale(0.95); }
      100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
    }
    @keyframes popupFadeInScaleUpFromBottom { /* Para popup abrindo para cima */
      0% { opacity: 0; transform: translate(-50%, 8px) scale(0.95); }
      100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
    }
  `;

  return (
    <div className="w-full flex flex-col items-center py-12 md:py-16 bg-slate-900">
      <style>{popupAnimations}</style> {/* Injeta as animações no DOM */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-3 text-center">
          Explore Hotéis Próximos
        </h2>
        <p className="text-slate-400 mb-10 text-center max-w-2xl mx-auto text-sm sm:text-base">
          Confira opções de hospedagem estrategicamente localizadas perto do nosso evento.
        </p>

        <div
          ref={mapRef}
          className="relative w-full aspect-[16/10] max-h-[450px] sm:max-h-[500px] md:max-h-[550px] rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800"
          style={{ /* Estilos de fundo ... */ }}
        >
          <div className="absolute inset-0" style={{backgroundImage:'repeating-linear-gradient(0deg,rgba(255,255,255,0.02) 0 1px,transparent 1px 30px),repeating-linear-gradient(90deg,rgba(255,255,255,0.02) 0 1px,transparent 1px 30px)'}} />

          <div /* Marcador do Evento */
            className="absolute z-20 flex flex-col items-center group transform transition-all duration-300 ease-out"
            style={{ left: `${EVENT_LOCATION.x}px`, top: `${EVENT_LOCATION.y}px`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-600 rounded-full border-4 border-slate-900 shadow-xl flex items-center justify-center">
                <Ticket size={20} className="text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-pink-500/50 animate-ping opacity-75"></div>
            </div>
            <span className="mt-2 text-xs font-semibold text-white bg-slate-900/70 px-2 py-0.5 rounded whitespace-nowrap shadow">
              Local do Evento
            </span>
          </div>

          {HOTELS_DATA.map((hotel) => {
            const isSelected = selectedHotelId === hotel.id;
            // Decide se o popup abre para cima ou para baixo
            // Se o hotel estiver nos 60% inferiores do mapa, popup para baixo, senão para cima.
            const openPopupUpwards = hotel.y > ((mapRef.current?.clientHeight || 500) * 0.6);
            
            return (
              <div /* Container do Marcador de Hotel */
                key={hotel.id}
                className="absolute z-10 flex flex-col items-center group cursor-pointer"
                style={{ left: `${hotel.x}px`, top: `${hotel.y}px`, transform: 'translate(-50%, -50%)' }}
                onClick={(e) => { e.stopPropagation(); handleMarkerClick(hotel.id); }}
              >
                <div /* Ícone do Marcador */
                  className={`
                    w-7 h-7 rounded-full border-2 shadow-md flex items-center justify-center transition-all duration-300 ease-out
                    ${isSelected
                      ? 'bg-sky-400 border-white scale-125 z-30'
                      : 'bg-sky-600 border-slate-300 group-hover:bg-sky-500 group-hover:scale-110'
                    }`}
                >
                  <Building2 size={14} className={isSelected ? "text-white" : "text-sky-100"} />
                </div>
                
                {/* Nome do hotel abaixo do marcador (só no hover, e se não estiver selecionado para evitar sobreposição com popup) */}
                {!isSelected && (
                    <span
                    className="absolute top-full mt-1.5 text-[10px] text-center font-medium whitespace-nowrap py-0.5 px-1.5 rounded bg-slate-900/80 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:delay-200 transition-opacity duration-200 pointer-events-none"
                    >
                    {hotel.name}
                    </span>
                )}

                {/* Balão de Info (Popup) */}
                {isSelected && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`
                      absolute z-40 
                      p-4 bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-lg shadow-xl
                      w-auto 
                      max-w-[200px] /* Largura máxima no mobile */
                      sm:max-w-[240px] /* Largura máxima em telas maiores */
                      md:max-w-[280px]
                      transform opacity-0 /* Estado inicial para animação */
                      /* Posicionamento horizontal centralizado em relação ao marcador */
                      left-1/2 
                      /* Posicionamento vertical (popup acima ou abaixo do marcador) */
                      ${openPopupUpwards ? 'bottom-full mb-3' : 'top-full mt-3'}
                    `}
                    style={{ 
                      animation: `${openPopupUpwards ? 'popupFadeInScaleUpFromBottom' : 'popupFadeInScaleUpBase'} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`
                    }}
                  >
                    <button
                      onClick={() => setSelectedHotelId(null)}
                      className="absolute top-2 right-2 text-slate-400 hover:text-sky-300 transition-colors"
                      aria-label="Fechar"
                    >
                      <X size={18} />
                    </button>
                    <h3 className="text-base font-semibold text-sky-300 mb-1.5 pr-5">{hotel.name}</h3> {/* pr-5 para não encostar no X */}
                    <p className="text-[11px] text-slate-300 mb-1 flex items-start">
                      <MapPin size={12} className="mr-1.5 mt-0.5 text-slate-400 shrink-0" /> {hotel.address}
                    </p>
                    <div className="text-[11px] text-slate-300 mb-2 flex items-center">
                      <Star size={12} className="mr-1.5 text-yellow-400 fill-yellow-400" />
                      {hotel.rating.toFixed(1)}
                      <span className="text-slate-400 ml-2 text-[10px]">Preço: {hotel.priceRange}</span>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name + ", " + hotel.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs bg-sky-500 hover:bg-sky-400 text-white font-semibold px-3 py-1.5 rounded-md transition-colors duration-200 shadow hover:shadow-md"
                    >
                      Ver no mapa <Info size={12} className="ml-1.5" />
                    </a>
                  </div>
                )}
              </div>
            )
          })}

          <div /* Legenda */
            className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-slate-900/80 text-slate-300 text-[10px] md:text-xs rounded px-2 py-1 md:px-3 md:py-1.5 shadow-lg backdrop-blur-sm"
          >
            <span className="flex items-center"><Ticket size={12} className="mr-1 text-pink-400"/> Evento</span>
            <span className="flex items-center mt-0.5"><Building2 size={12} className="mr-1 text-sky-400"/> Hotel</span>
          </div>
        </div>

        <p className="text-slate-500 text-xs mt-4 text-center max-w-3xl mx-auto">
          * Este mapa é uma representação visual estilizada para demonstração. As posições são ilustrativas.<br />
          Use o botão "Ver no mapa" para localização real.
        </p>
      </div>
    </div>
  );
}