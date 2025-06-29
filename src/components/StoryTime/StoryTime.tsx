import React from 'react';
import styles from './StoryTime.module.css';

const StoryTime: React.FC = () => {
  return (
    <section className={styles.storyTime}>
      <div className={styles.background}></div>

      <div className={styles.content}>
        <div className={styles.divider}></div>

        <div className={styles.mainContent}>
          <h2 className={styles.title}>Не просто читайте эти истории. Истории Бэ Тэ.</h2>
          <p className={styles.description}>
            С помощью Story Time вы можете воплотить в жизнь любимые истории своих детей с помощью
            музыки, анимации и эффектов AR.
          </p>
          <a href="#discover" className={styles.discoverButton}>Обнаружить</a>
        </div>

        <div className={styles.sideNote}>
          <p>Подарите себе улыбку с помощью AR-масок.</p>
          <p>Фоторамка, которая идеальна для фотографий</p>
        </div>
        
        
      
      </div>

      
    </section>
  );
};

export default StoryTime;