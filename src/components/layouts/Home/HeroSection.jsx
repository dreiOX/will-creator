import React from 'react';
import { image } from '../../../assets/images';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h1 className={styles.header}>
          Build your <span className={styles.span}>will</span> faster with our{' '}
          <span className={styles.span}>will Builder</span>
        </h1>
        <div className={styles.anchor}>
          <a href='/will-form' className={styles.button}>
            Build your will
          </a>
        </div>
      </div>
      <div className={styles.boxcontainer}>
        <div className={styles.box}></div>
        <img src={image} alt='hero' />
      </div>
    </div>
  );
}

export default HeroSection;
