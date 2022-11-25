import React from 'react';
import { PageFooter } from '../footers';
import { PageNav } from '../navbars';
import styles from './Wrapper.module.css';

function PageWrapper({ children }) {
  return (
    <div>
      <nav>
        <PageNav />
      </nav>
      <main className={styles.wrapper}>{children}</main>
      <footer>
        <PageFooter />
      </footer>
    </div>
  );
}

export default PageWrapper;
