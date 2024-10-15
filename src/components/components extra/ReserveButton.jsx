import React from 'react';
import styles from './ReserveButton.module.css';



const ReserveButton = ({ phoneNumber }) => {
  const handleReserve = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hola,%20me%20gustaría%20confirmar%20mi%20asistencia%20a%20la%20boda.`);
  };

  return (
    <button className={styles.reserveButton} onClick={handleReserve}>
      Aparte su lugar
    </button>
  );
}

export default ReserveButton;