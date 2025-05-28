import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
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