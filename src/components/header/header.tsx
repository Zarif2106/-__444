import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';


interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="src/assets/images/logo__abz.svg" alt="Portal Logo" />
        </div>
        
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
          <Link to="/products" className={styles.link}>Продукты</Link>
          <Link to="/features" className={styles.link}>Функции</Link>
          <Link to="/support" className={styles.link}>Поддержка</Link>
          <button className={styles.loginButton} onClick={onLoginClick}>
          Войти
        </button>
        </nav>

        
      </div>
    </header>
  );
};

export default Header;