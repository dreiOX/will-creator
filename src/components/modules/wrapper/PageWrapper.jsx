import React from 'react';
import { PageFooter } from '../footers';
import { PageNav } from '../navbars';

function PageWrapper({ children }) {
  return (
    <div>
      <nav>
        <PageNav />
      </nav>
      <main>{children}</main>
      <footer>
        <PageFooter />
      </footer>
    </div>
  );
}

export default PageWrapper;
