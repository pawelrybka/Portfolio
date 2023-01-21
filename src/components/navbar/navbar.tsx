import React, { useState } from 'react'
import styles from './navbar.module.css'

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen)
  const menuToggleHandler = () => setMenuOpen(!menuOpen)
    
  return (
    <div className={styles.header}>
      <a className={styles.header__logo} href="/">pawelrybka.com</a>
      <ul className={`${styles.menu} ${menuOpen ? styles.isMenu : ''}`}>
        <li>
          <a href="/contact">Contact</a>
        </li>  
        <li>
            <a href="/about">About</a>
        </li>  
        <li>
          <a href="https://github.com/pawelrybka">Github</a>
        </li>  
      </ul>
      <button className={styles.hamburger} onClick={menuToggleHandler}>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
      </button>
    </div>
  )
}

export default header;

