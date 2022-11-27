import React from 'react';
import style from './pagenotfound.module.css'

function PageNotFound() {
  return (
    <div className={style.container}>
      <p className={style.code}>404</p>
      <p>Page Not Found</p>
    </div>
  );
}

export default PageNotFound;
