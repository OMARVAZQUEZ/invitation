import React, { useState, useEffect } from 'react';
import { MapPin, Gift, Clock, Mail } from 'lucide-react';
import styles from './WeddingInvitation.module.css';

export default function WeddingInvitation() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2023-12-31T18:00:00'); // Set your wedding date here
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.reveal_box}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Conferencia para </h1>
          <h2 className={styles.subtitle}> MATRIMONIOS </h2>
          <p className={styles.date}>
                        7 • NOVIEMBRE • 24
                    </p>
        </div>
      </header>
      </div>

      <main className={styles.main}>
        <section className= {`${styles.section} ${styles.counter}`}>
          <h2 className={styles.sectionTitle}>Faltan</h2>
          <div className={styles.countdown}>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{timeLeft.days}</span>
              <p>Días</p>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{timeLeft.hours}</span>
              <p>Horas</p>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{timeLeft.minutes}</span>
              <p>Minutos</p>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{timeLeft.seconds}</span>
              <p>Segundos</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Confirmar Asistencia</h2>
          <a
            href="https://wa.me/1234567890?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20a%20la%20boda"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            Confirmar por WhatsApp
          </a>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ubicación</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Código de Vestimenta</h2>
          <div className={styles.dressCode}>
            <div className={styles.dressCodeItem}>
              <Clock className={styles.icon} />
              <p>Formal</p>
            </div>
            <div className={styles.dressCodeItem}>
              <MapPin className={styles.icon} />
              <p>Elegante</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nuestros Momentos</h2>
          <div className={styles.gallery}>
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"  className={styles.galleryImage} />
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" className={styles.galleryImage} />
            <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"  className={styles.galleryImage} />
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"  className={styles.galleryImage} />
            <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" className={styles.galleryImage} />
            <img src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" className={styles.galleryImage} />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mesa de Regalos</h2>
          <p className={styles.giftText}>Si deseas hacernos un regalo, aquí tienes algunas opciones:</p>
          <div className={styles.giftRegistry}>
            <a href="#" className={styles.giftLink}>
              <Gift className={styles.icon} />
              <p>Amazon</p>
            </a>
            <a href="#" className={styles.giftLink}>
              <Gift className={styles.icon} />
              <p>Liverpool</p>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Ana & Chance. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}