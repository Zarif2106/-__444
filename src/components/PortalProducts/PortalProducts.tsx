// components/PortalProducts/PortalProducts.tsx
import React from 'react';
import styles from './PortalProducts.module.css';

interface CardProps {
  id: number;
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ id, title, body }) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardImage}>
        <img 
          src={`https://picsum.photos/300/200?random=${id}`} 
          alt={title} 
        />
      </div>
      <p className={styles.cardDescription}>{body}</p>
      <div className={styles.cardButtons}>
        <button className={styles.buyButton}>Read more</button>
        <a href={`#post-${id}`} className={styles.moreLink}>Details</a>
      </div>
    </div>
  );
};

export default Card;