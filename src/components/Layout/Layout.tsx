import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import AuthModal from '../AuthModal/AuthModal';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const handleLoginClick = (): void => {
    setIsAuthModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Preloader />
      <Header onLoginClick={handleLoginClick} />
      
      <main className={styles.main}>
        {children}
      </main>
      
      <Footer onSignUpClick={handleLoginClick} />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Layout;