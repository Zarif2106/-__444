
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../../components/Cardlist/Cardlist';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  return (
    <div>
      <h2>Карточки продуктов</h2>
      <CardList limit={limit} />
    </div>
  );
};

export default CardsPage;