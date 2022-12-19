import React, { useState } from 'react';
import styles from './Navbar.module.css'
import Image from 'next/Image';
import logo from '../../images/logo.png'

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
  }

  return (
    <header className={styles.header}>
      <Image src={logo} width={60} className={styles.logo}/>
        <ul className={`${styles.headerNav} ${menuOpen ? styles.isMenu : ''}`}>
          <li>
            <a href='/'>
              Home
            </a>
          </li>
          <li>
            <a href='/about'>
              About
            </a>
          </li>
          <li>
            <a href='/contact'>
              Contact
            </a>
          </li>
        </ul>
      <div className={styles.headerBurgerMenu} onClick={menuToggleHandler}>
        <div className={`${styles.headerBurgerline} ${menuOpen ? styles.clicked : styles.unclicked}`}></div>
        <div className={`${styles.headerBurgerline} ${menuOpen ? styles.clicked : styles.unclicked}`}></div>
      </div>
    </header>
  )
}

export default Navbar;