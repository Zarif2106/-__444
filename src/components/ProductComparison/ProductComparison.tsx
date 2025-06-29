import React from 'react';
import styles from './ProductComparison.module.css';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const ProductComparison: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Portal TV",
      price: "$149",
      image: "src/assets/images/img__partall__tv__prise.jpg",
      description: "Умные видеовызовы на вашем телевизоре"
    },
    {
      id: 2,
      name: "Portal",
      price: "$179",
      image: "src/assets/images/img__partall__prise.jpg",
      description: "Умные видеовызовы на 10-дюймовом HD-дисплее"
    },
    {
      id: 3,
      name: "Portal+",
      price: "$279",
      image: "src/assets/images/img__partall__plus.jpg",
      description: "Умные видеовызовы на 15-дюймовом HD-дисплее"
    },
    {
      id: 4,
      name: "Portal Mini",
      price: "$129",
      image: "src/assets/images/img__partall__prise.jpg",
      description: "Умные видеовызовы на 8-дюймовом HD-дисплее"
    }
  ];

  return (
    <section className={styles.comparison}>
      <div className={styles.container}>
        <h2 className={styles.title}>Найдите портал, который подходит именно вам</h2>
        
        
        
        
        
        <div className={styles.productsGrid}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productHeader}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
              </div>
              
              <img src={product.image} alt={product.name} className={styles.productImage} />
              
              <p className={styles.description}>{product.description}</p>
              
              <div className={styles.buttons}>
                <button className={styles.buyButton}>Купить сейчас</button>
                <a href="#learn-more" className={styles.learnMore}>Узнать больше</a>
              </div>
            </div>
          ))}
        </div>
        
        <button className={styles.compareButton}>Сравнить продукты</button>
      </div>
    </section>
  );
};

export default ProductComparison;