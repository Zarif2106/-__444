
import React, { useState, useEffect } from 'react';
import Card from '../PortalProducts/PortalProducts';
import styles from './Cardlict.module.css';

const CardList: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setCards(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading posts...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.cardList}>
      <h2 className={styles.title}>Latest Posts</h2>
      <div className={styles.cardsContainer}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            body={card.body}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;