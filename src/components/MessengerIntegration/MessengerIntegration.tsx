import React from 'react';
import styles from './MessengerIntegration.module.css';

const MessengerIntegration: React.FC = () => {
  return (
    <section className={styles.messenger}>
      <div className={styles.container}>
        <div className={styles.content}>
          
          <div className={styles.imageWrapper}>
            
            <img src="src/assets/images/messenger.jpg" alt="Messenger Integration" className={styles.mainImage} />
            
          </div>
          <div className={styles.imageWrapper__1}>
            <img src="src/assets/images/icons__masenger__1.svg" alt="Messenger" className={styles.icon1} />
            <img src="src/assets/images/icons__masenger__2.svg" alt="WhatsApp" className={styles.icon2} />
          </div>
          
          <div className={styles.textContent}>
            <h2 className={styles.title}>Совершает видеозвонки с помощью Messenger и WhatsApp</h2>
            <p className={styles.description}>
              Легко звоните друзьям и родственникам по видеосвязи на их смартфонах и планшетах, даже если
              у них нет портала.
            </p>
            <p className={styles.note}>
              Доступность голосовой команды «Эй, портал» варьируется. Узнать больше. Требуется учетная
              запись Messenger или WhatsApp. WhatsApp недоступен на планшетах.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessengerIntegration;