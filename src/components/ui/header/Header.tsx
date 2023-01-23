import React, { useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'

function Header(){
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen)
  const menuToggleHandler = () => setMenuOpen(!menuOpen)
    
  return (
    <div className={styles.header}>
    
      <Link className={styles.header__logo} href="/">
        <p>pablO</p>
      </Link>
      
      <ul className={`${styles.menu} ${menuOpen ? styles.isMenu : ''}`}>
        
        <Link className={styles.header__nav} href="/about">
          <p>About</p>
        </Link>
        
        <Link className={styles.header__nav} href="/contact">
          <p>Contact</p>
        </Link>
        
        <a className={styles.header__nav} href="https://github.com/pawelrybka">Github</a>
        
      </ul>
      <button className={styles.hamburger} onClick={menuToggleHandler}>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
      </button>
    </div>
  )
}

export default Header
