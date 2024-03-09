// components/LinkWhatsApp.js
import React from 'react';


// Define uma interface para as props do componente
interface LinkWhatsAppProps {
  number: string; // Declara que `number` deve ser uma string
  message: string; // Declara que `message` deve ser uma string
}

const LinkWhatsApp: React.FC<LinkWhatsAppProps> = ({ number, message }) => {
  const url = `https://wa.me/${number}?text=${encodeURI(message)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Enviar Mensagem
    </a>
  );
};

export default LinkWhatsApp;