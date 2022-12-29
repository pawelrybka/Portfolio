import React from 'react'
import styles from './hero.module.scss'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const hero = () => {
  return (
    <div className={styles.hero} id='hero'>
      <img src='./me.jpg' className={styles.heroImage}/>
      <div className={styles.heroLeft}>
        <div className={styles.heroDes}>
          <h1>Paweł Rybka</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className={styles.heroIcons}> 
          <a href='https://github.com/pawelrybka'><AiFillGithub size={60} className={styles.heroIcon} /></a>
          <a href='https://www.linkedin.com/in/pawe%C5%82-rybka-8454a1251/'><AiFillLinkedin size={60} className={styles.heroIcon} /></a>
        </div>
      </div>  
    </div>
  )
}

export default hero;

