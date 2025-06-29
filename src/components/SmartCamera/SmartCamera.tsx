import React from 'react';
import styles from './SmartCamera.module.css';

const SmartCamera: React.FC = () => {
  return (
    <section className={styles.smartCamera}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>
          Умная камера держит каждый разговор в центре внимания
        </h2>
      </div>

      <div className={styles.imageContainer}>
        <img src="src/assets/images/page__cameres.jpg" alt="Smart Camera" />
      </div>

      <div className={styles.featuresWrapper}>
        <div className={styles.feature}>
          <h3 className={styles.featureTitle}>Идет в ногу с действием</h3>
          <p className={styles.featureText}>
            Умная камера автоматически панорамирует и масштабирует изображение, чтобы не отставать от
            происходящего. Двигайтесь и разговаривайте свободно и всегда оставайтесь в кадре.
          </p>
          <a href="#learn-more" className={styles.learnMore}>
            Узнать больше
          </a>
        </div>

        <div className={styles.feature}>
          <h3 className={styles.featureTitle}>Держит всех в поле зрения</h3>
          <p className={styles.featureText}>
            Когда в комнату входит больше людей, интеллектуальная камера автоматически расширяется,
            чтобы держать всех в поле зрения, так что вы не упустите ни единого момента.
          </p>
          <a href="#learn-more" className={styles.learnMore}>
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
};

export default SmartCamera;