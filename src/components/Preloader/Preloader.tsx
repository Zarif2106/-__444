import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 10));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.preloader} ${progress >= 100 ? styles.hidden : ''}`}>
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
        <span className={styles.progress}>
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;