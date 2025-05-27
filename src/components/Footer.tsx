import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Seção Local do Evento */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">LOCAL DO EVENTO</h2>
          <p className="text-lg">
            Avenida Copacabana 190, Lazzuli Corporate Offices,
            <br />
            3º andar - Empresarial 18 do Forte, Barueri - SP, 06472-001
          </p>
          <div className="mt-4 flex justify-center items-center">
            {/* Ícone do Instagram */}
            <svg
              className="w-8 h-8 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.272.058 2.165.248 2.936.556.785.314 1.416.75 2.023 1.357.607.607 1.043 1.238 1.357 2.023.308.77.498 1.664.556 2.936.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.272-.248 2.165-.556 2.936-.314.785-.75 1.416-1.357 2.023-.607.607-1.238 1.043-2.023 1.357-.77.308-1.664.498-2.936.556-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.272-.058-2.165-.248-2.936-.556-.785-.314-1.416-.75-2.023-1.357-.607-.607-1.043-1.238-1.357-2.023-.308-.77-.498-1.664-.556-2.936-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.272.248-2.165.556-2.936.314-.785.75-1.416 1.357-2.023.607-.607 1.238-1.043 2.023-1.357.77-.308 1.664-.498 2.936-.556C8.416 2.175 8.796 2.163 12 2.163zm0 1.8a.97.97 0 01.97.97v1.306c0 .537.434.97.97.97h1.306a.97.97 0 01.97.97v1.306a.97.97 0 01-.97.97h-1.306a.97.97 0 01-.97-.97V8.283a.97.97 0 01-.97-.97V6.009a.97.97 0 01.97-.97h3.882a.97.97 0 01.97.97v1.306a.97.97 0 01-.97.97h-1.306a.97.97 0 01-.97.97v1.306a.97.97 0 01.97.97h1.306a.97.97 0 01.97.97v3.882a.97.97 0 01-.97.97H8.283a.97.97 0 01-.97-.97v-1.306a.97.97 0 01.97-.97h1.306a.97.97 0 01.97-.97V9.589a.97.97 0 01-.97-.97H6.009a.97.97 0 01-.97-.97V6.009a.97.97 0 01.97-.97h.002zm-.974 6.396a3.882 3.882 0 107.764 0 3.882 3.882 0 00-7.764 0zm3.882-2.91a.97.97 0 110 1.94.97.97 0 010-1.94z"
                clipRule="evenodd"
              />
            </svg>
            <a
              href="https://www.instagram.com/centrodeconvencoespm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              @centrodeconvencoespm
            </a>
          </div>
        </div>

        {/* Placeholder do Mapa */}
        <div className="mb-10">
          <div className="bg-gray-700 h-64 w-full flex items-center justify-center text-gray-400 rounded-md">
            [Placeholder para o Google Maps]
          </div>
        </div>

        {/* Seção de Dúvidas */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold mb-3">FICOU COM ALGUMA DÚVIDA?</h3>
          <p className="text-base mb-4">
            Nossos especialistas estão disponíveis no WhatsApp!
          </p>
          <p className="text-base mb-6 flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.707-4.293a1 1 0 00-1.414-1.414L6 14.586V10a1 1 0 10-2 0v6a1 1 0 001 1h6a1 1 0 100-2H7.414l2.293-2.293a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Clique no botão e fale com um deles.
          </p>
          <a
            href="https://wa.me/TUNERODOWHATSAPP" // Substitua pelo seu link do WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg text-base transition duration-300"
          >
            DÚVIDA?
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>Copyright © 2025 | Todos os direitos reservados</p>
        </div>

        {/* Botão Voltar para o Início */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-gray-400 hover:text-white hover:underline transition duration-300 text-sm"
          >
            Voltar para o Início
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 