// App.js
import React, { useState } from 'react';
import WeddingInvitation from './components/WeddingInvitation.tsx';
import './App.css'; // Importa los estilos

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      <WeddingInvitation />
    </div>
  );
};

export default App;
