import React, { useState } from 'react'
import styles from './header.module.scss'
import {Link} from 'react-scroll'

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => setMenuOpen(!menuOpen)
    
  return (
    <div className={styles.header}>
      <ul className={menuOpen ? styles.isMenu : ''}>
        <li>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500} onClick={menuToggleHandler}>Home</Link>
        </li>  
        <li>
          <Link to="projects" spy={true} smooth={true} offset={0} duration={500} onClick={menuToggleHandler}>Projects</Link>
        </li>  
        <li>
          <Link to="aboutme" spy={true} smooth={true} offset={0} duration={500} onClick={menuToggleHandler}>About</Link>
        </li>  
        <li>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={menuToggleHandler}>Contact</Link>
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

