// App.js
import React, { useState } from 'react';
import Header from './components/components extra/Header.jsx';
import Countdown from './components/components extra/Countdown.jsx';
import EventDetails from './components/components extra/EventDetails.jsx';
import BiblicalQuote from './components/components extra/BiblicalQuote.jsx';
import ReserveButton from './components/components extra/ReserveButton.jsx';
import PhotoGallery from './components/components extra/PhotoGallery.jsx';
import BackgroundMusic from './components/components extra/BackgroundMusic.jsx';
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
