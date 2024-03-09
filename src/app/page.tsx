/* @jsxImportSource react */
'use client';

import type { NextPage } from 'next';
import { use, useState } from 'react';
import LinkWhatsApp from './components/LinkWhatsApp';


const Home: NextPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const generateWhatsAppLink = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="bg-slate-700 flex min-h-screen flex-col items-center justify-center py-2">


      <form onSubmit={generateWhatsAppLink} className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="phone" className="text-white y-100 block text-sm font-medium">
            Número do WhatsApp
          </label>
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Insira o número com código do país"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Mensagem inicial
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Sua mensagem"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Gerar Link do WhatsApp
        </button>
      </form>


      <div className="mt-28">
        <LinkWhatsApp number="551999999999" message="Olá! Gostaria de mais informações." />
      </div>


    </div>



  );
};

export default Home;
