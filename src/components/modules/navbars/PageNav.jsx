import React, { useState, useEffect } from 'react';
import styles from './PageNav.module.css';

function PageNav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);
  }, []);
  return (
    <nav className={styles.container}>
      <div className={styles.logocontainer}>
        <a href='/' className={styles.logo}>
          Will<span className={styles.span}>Creator</span>
        </a>
      </div>
      {(toggleMenu || screenWidth > 512) && (
        <ul className={styles.list}>
          <a href='/' className={styles.items}>
            Home
          </a>
          <a href='/will-form' className={styles.items}>
            Build will
          </a>
        </ul>
      )}
      <button onClick={toggleNav} className={styles.btn}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='#5d3a6f'
          class='bi bi-card-text'
          viewBox='0 0 16 16'
        >
          {' '}
          <path d='M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z' />{' '}
          <path d='M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z' />{' '}
        </svg>
      </button>
    </nav>
  );
}

export default PageNav;
