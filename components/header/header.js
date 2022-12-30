import React, { useState } from 'react'
import styles from './header.module.scss'

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => setMenuOpen(!menuOpen)
    
  

  return (
    <div className={styles.header}>
      <ul className={menuOpen ? styles.isMenu : ''}>
        <li>
          <a href='#hero' onClick={menuToggleHandler}>Home</a>
        </li>  
        <li>
          <a href='#projects' onClick={menuToggleHandler}>Projects</a>
        </li>  
        <li>
          <a href='#aboutme' onClick={menuToggleHandler}>About</a>
        </li>  
        <li>
          <a href='#contact' onClick={menuToggleHandler}>Contact</a>
        </li> 
      </ul>
      <button className={styles.hamburger} onClick={menuToggleHandler}>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
      </button>
    </div>
  )
}

export default header;

