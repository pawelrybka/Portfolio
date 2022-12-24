import React from 'react'
import styles from './header.module.scss'

const header = () => {
  return (
    <div className={styles.header}>
      <ul>
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
      <button className={styles.hamburger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </div>
  )
}

export default header;

