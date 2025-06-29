import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css'; // <-- оставлено

interface Slide {
  id: number;
  title: string;
  subtitle: string;
}

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Если вы не можете быть там, почувствуйте себя там с Portal",
      subtitle: "Умные видеозвонки с помощью встроенной Alexa."
    },
    {
      id: 2,
      title: "Оставайтесь на связи, где бы вы ни были, с Portal",
      subtitle: "Видеозвонки с технологией Alexa."
    },
    {
      id: 3,
      title: "Если расстояние разделяет, Portal объединяет",
      subtitle: "Интеллектуальные видеозвонки со встроенной Alexa."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.cardHome}>
        <img src="/src/assets/images/home__mini.jpg" alt="Promo" className={styles.cardHomeDecaration} />
        <div className={styles.promoContent}>
          <p className={styles.titleCardHome}>Купите любые 2 за 50$</p>
          <p className={styles.cardHome1}>Доставка без дополнительной оплаты.</p>
        </div>
      </div>
      <div className={styles.slide}>
        <h2 className={styles.titleHomeDecaration}>{slides[currentSlide].title}</h2>
        <p className={styles.titleHomeDecaration1}>{slides[currentSlide].subtitle}</p>
        <div className={styles.buttons}>
          <button className={styles.buttonHomeDecaration}>Посмотреть демо</button>
          <a href="#compare" className={styles.buttonHomeDecaration1}>Сравнить порталы</a>
        </div>
      </div>

      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
      

      
    </div>
  );
};

export default Slider;