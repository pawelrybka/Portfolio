import React, { useState } from 'react'
import styles from './header.module.scss'

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
  }

  return (
    <div className={styles.header}>
      <ul className={menuOpen ? styles.isMenu : ''}>
        <li>
          <a href=''>Home</a>
        </li>  
        <li>
          <a href=''>About</a>
        </li>  
        <li>
          <a href=''>Contact</a>
        </li> 
      </ul>
      <button className={styles.hamburger} onClick={menuToggleHandler}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </div>
  )
}

export default header;

