import React from 'react';
import styles from './PhotoGallery.module.css';

const PhotoGallery: React.FC = () => {
  // Aquí puedes agregar las fotos reales después del evento
  const photos = [
    '/placeholder.svg?height=200&width=300',
    '/placeholder.svg?height=200&width=300',
    '/placeholder.svg?height=200&width=300',
    '/placeholder.svg?height=200&width=300',
  ];

  return (
    <section className={styles.photoGallery}>
      <h2>Fotos del Evento</h2>
      <div className={styles.photoGrid}>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Foto del evento ${index + 1}`} className={styles.photo} />
        ))}
      </div>
    </section>
  );
}

export default PhotoGallery;