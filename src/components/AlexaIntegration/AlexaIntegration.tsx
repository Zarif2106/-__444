import React from 'react';
import styles from './AlexaIntegration.module.css';

const AlexaIntegration: React.FC = () => {
  return (
    <section className={styles.alexa}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="src/assets/images/logo__Alexa.svg" alt="Alexa" />
        </div>
        
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Alexa</h2>
            <p className={styles.subtitle}>Built-in</p>
          </div>
          
          <div className={styles.imageContainer}>
            <img src="src/assets/images/Alexa__Page__img.jpg" alt="Alexa Integration" className={styles.image} />
            <p className={styles.disclaimer}>
              Amazon, Alexa и все связанные с ними логотипы являются товарными знаками Amazon.com, Inc.
              или ее аффилированного лица. Могут взиматься дополнительная регистрация учетной записи,
              условия и сборы. Функции могут различаться в зависимости от местоположения.
            </p>
          </div>
          
          <div className={styles.description}>
            <p>
              В Portal встроена функция Alexa, поэтому вы можете видеть и делать больше. Используйте свой
              голос, чтобы управлять своим умным домом и проверять, кто находится у входной двери, слушать
              любимую музыку, смотреть новости и многое другое, без помощи рук. Просто спросите.
            </p>
            <button className={styles.learnMoreButton}>Узнать больше</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlexaIntegration;