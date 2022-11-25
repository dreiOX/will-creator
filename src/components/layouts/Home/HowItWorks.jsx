import React from 'react';
import { forms, printer } from '../../../assets/images';
import styles from './HeroSection.module.css';

function HowItWorks() {
  return (
    <div className={styles.howcontainer}>
      <h2 className={styles.head}>How does it work?</h2>
      <div className={styles.form}>
        <div>
          <h3 className={styles.texthead}>Complete the document</h3>
          <p className={styles.textparagraph}>
            Answer a few questions and your document is created automatically.
          </p>
        </div>
        <img src={forms} alt='form' />
      </div>
      <div className={styles.print}>
        <img src={printer} alt='printer' />
        <div>
          <h3 className={styles.texthead}>save and print</h3>
          <p className={styles.textparagraph}>
            Your document is ready! You will receive it in Word and PDF formats.
            You will be able to modify it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
