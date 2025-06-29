import React from 'react';
import styles from './PrivacyFeatures.module.css';

const PrivacyFeatures: React.FC = () => {
  return (
    <section className={styles.privacy}>
      <div className={styles.grid}>
        {/* Первый блок */}
        <div className={styles.feature}>
          <div className={styles.imageContainer}>
            <img
              src="src/assets/images/img__dising__1.jpg"
              alt="Частный дизайн"
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h3>Частный по дизайну</h3>
            <p>
              Легко отключите камеру и микрофон или закройте объектив крышкой камеры. А все
              видеозвонки Портала зашифрованы.
            </p>
            <a href="#learn-more" className={styles.link}>
              Узнать больше
            </a>
          </div>
        </div>

        {/* Второй блок */}
        <div className={styles.feature}>
          <div className={styles.imageContainer}>
            <img
              src="src/assets/images/img__dising__2.jpg"
              alt="Работайте умнее дома"
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h3>Работайте умнее дома</h3>
            <p>
              Независимо от того, используете ли вы и ваши коллеги Workplace, BlueJeans,
              GoToMeeting, Webex или Zoom, у Portal есть инструменты, которые помогут вам
              продуктивно работать, работая из дома.
            </p>
            <a href="#learn-more" className={styles.link}>
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyFeatures;