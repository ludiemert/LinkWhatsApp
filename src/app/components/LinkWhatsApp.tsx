// components/LinkWhatsApp.tsx
import React from 'react';

import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp

interface LinkWhatsAppProps {
  number?: string;
  message?: string;
}

const LinkWhatsApp: React.FC<LinkWhatsAppProps> = ({ number = "551999xxxxxx", message = "Olá! Gostaria de mais informações." }) => {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div className='border-2 border-white py-4 px-4 -mt-16 flex justify-items-center gap-2 rounded-lg  '>
     <FaWhatsapp className= " text-green-500 text-4xl rounded-md hover:text-green-700  cursor-pointer" />
      <a 
      href={url} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
       Enviar Mensagem

        
      </a>
      

    </div>


  );
};

export default LinkWhatsApp;
