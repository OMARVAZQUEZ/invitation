import React from 'react';
import styles from './BiblicalQuote.module.css';

const BiblicalQuote: React.FC = () => {
  return (
    <section className={styles.biblicalQuote}>
      <h2>Palabra de Dios</h2>
      <blockquote>
        "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor."
      </blockquote>
      <p>- 1 Corintios 13:4-5</p>
    </section>
  );
}

export default BiblicalQuote;