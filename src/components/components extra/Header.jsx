import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Invitación de Matrimonio</h1>
      <img src="./esposos.jpeg" alt="Foto de los esposos" className={styles.photo} />
      <p className={styles.date}>7 de Noviembre 2024</p>
    </header>
  );
}

export default Header;