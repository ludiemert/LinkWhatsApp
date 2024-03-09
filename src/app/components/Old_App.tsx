// App.tsx ou outro componente
import React from 'react';
import LinkWhatsApp from './LinkWhatsApp';


const App: React.FC = () => {
  return (
    <div>
      <h1>Entre em contato pelo WhatsApp</h1>
      <LinkWhatsApp number="551999xxxxxx" message="Olá! Gostaria de mais informações." />
    </div>
  );
};

export default App;
