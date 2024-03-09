// use client

import { useState, FormEvent, ChangeEvent } from "react";
import React from 'react';

const FormWhatsApp = () => {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const generateLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `https://wa.me/${number}?text=${encodeURI(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <form onSubmit={generateLink} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Número com código do país"
          value={number}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
          className="border-2 p-2"
        />
        <textarea
          placeholder="Sua mensagem"
          value={message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          className="border-2 p-2"
        />
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Gerar Link do WhatsApp
        </button>
      </form>
    </div>
  );
};

export default FormWhatsApp;

export const getServerSideProps = async () => {
  return {
    props: {}, // you can pass props here if needed
  };
};
