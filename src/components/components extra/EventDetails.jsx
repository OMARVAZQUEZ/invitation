import React from 'react';
import styles from './EventDetails.module.css';

const EventDetails = () => {
  return (
    <section className={styles.eventDetails}>
      <h2>Detalles del Evento</h2>
      <p>Únete a nosotros en la celebración de nuestro amor. Habrá una hermosa ceremonia seguida de una recepción con cena y baile.</p>
      <p>Ubicación: Iglesia San José, Calle Principal 123, Ciudad</p>
      <button className={styles.locationButton} onClick={() => window.open('https://maps.google.com/?q=Iglesia+San+José')}>
        Ver Ubicación
      </button>
    </section>
  );
}

export default EventDetails;