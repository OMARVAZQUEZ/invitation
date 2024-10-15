import React, {  useEffect } from 'react';
import styles from './BackgroundMusic.module.css';


const BackgroundMusic = ({ isPlaying, setIsPlaying }) => {
  const audioRef = (null);

  useEffect(() => {
    if (isPlaying) {
     // audioRef.current?.play();
    } else {
     // audioRef.current?.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.musicControl}>
      <button onClick={togglePlay} className={styles.musicButton}>
        {isPlaying ? '🔇 Pausar Música' : '🔊 Reproducir Música'}
      </button>
      <audio ref={audioRef} loop>
        <source src="/path-to-your-christian-wedding-music.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}

export default BackgroundMusic;