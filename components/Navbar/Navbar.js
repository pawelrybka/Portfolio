import React, { useState } from 'react';
import styles from './Navbar.module.css'
import Image from 'next/Image';
import logo from '../../images/logo.png'

const Navbar = () => {
  
  
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Image src={logo} width={60}/>
        <nav className={styles.header__content__nav}>
          <ul>
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
        </nav>
        <div className={styles.header__content__hamburgermenu}>
          <div className={styles.header__content__hamburgerline}></div>
          <div className={styles.header__content__hamburgerline}></div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;