
import React, { useState, useEffect } from 'react';
import PortalProducts from '../PortalProducts/PortalProducts';

interface Card {
  id: number;
  title: string;
  body: string;
}

const CardList: React.FC<{ limit?: number }> = ({ limit = 10 }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(` https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCards(data);
      } catch (err) {
        console.error('Ошибка при загрузке данных:', err); // 💡 Важно!
        setError('Не удалось загрузить данные. Проверьте подключение к интернету.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]);

  if (loading) return <p>Загрузка карточек...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map(card => (
        <PortalProducts key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;