import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';


interface FooterProps {
  onSignUpClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSignUpClick }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="src/assets/images/logo__footer.svg" alt="Portal Logo" />
        </div>
        
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <Link to="/" className={styles.link}>Главная</Link>
            <Link to="/products" className={styles.link}>Продукты</Link>
            <Link to="/features" className={styles.link}>Функции</Link>
            <Link to="/support" className={styles.link}>Поддерживать</Link>
            <Link to="/privacy" className={styles.link}>Частный по дизайну</Link>
            <Link to="/sitemap" className={styles.link}>Карта сайта</Link>
          </div>
          
          <div className={styles.linkGroup}>
            <Link to="/privacy-policy" className={styles.link}>политика конфиденциальности</Link>
            <Link to="/cookies" className={styles.link}>Файлы cookie</Link>
            <Link to="/terms" className={styles.link}>Условия эксплуатации</Link>
            <Link to="/legal" className={styles.link}>Юридический</Link>
            <Link to="/sales-terms" className={styles.link}>Условия продажи</Link>
            <Link to="/ad-choices" className={styles.link}>Выбор рекламы</Link>
          </div>
        </div>
        
        <div className={styles.newsletter}>
          <p>
            Получайте электронные письма от Facebook о портале и других аппаратных продуктах Facebook.
          </p>
          <button className={styles.signUpButton} onClick={onSignUpClick}>
            Зарегистрироваться
          </button>
          <button className={styles.languageButton}>
            США (Английский)
          </button>
        </div>
      </div>
      
      <div className={styles.legal}>
        <p>
          Доступность голосовой команды "Привет, портал" может варьироваться. Выучить больше. Имитация
          изображений на экране. Пользовательский опыт может отличаться. Требуется подключение к
          беспроводному Интернету и учетная запись Facebook или WhatsApp. WhatsApp недоступен на
          планшетах. Функции и наполнение различаются и могут быть доступны не во всех моделях
          портала, а также не во всех регионах и языках. Для некоторых функций может потребоваться
          наличие учетной записи Facebook и загрузка мобильного приложения Портала. Могут применяться
          дополнительные условия регистрации учетной записи и сборы.
        </p>
        
        <p>
          *Представляет собой экономию по сравнению с обычными, не акционными ценами. Оба продукта
          должны быть приобретены по одному и тому же чеку, чтобы соответствовать требованиям.
          Действительно для покупок, соответствующих требованиям, на сайте portal.facebook.com. Не
          распространяется на предыдущие покупки и не подлежит передаче другим лицам. Не
          распространяется на наличные или их эквивалент. Распространяется только на товары, имеющиеся
          в наличии. Предложение может быть отменено или изменено в любое время без предварительного
          уведомления. Недействительно, если это запрещено.
        </p>
        
        <p>
          ©2021 Facebook, Inc. или ее аффилированные лица. Все права защищены. Facebook, портал
          Facebook и логотип Facebook являются товарными знаками Facebook, Inc. Amazon, Alexa и все
          связанные с ними логотипы являются товарными знаками компании Amazon.com, Inc. или ее
          аффилированных лиц. Другие названия и бренды могут быть объявлены собственностью других лиц.
        </p>
      </div>
    </footer>
  );
};

export default Footer;