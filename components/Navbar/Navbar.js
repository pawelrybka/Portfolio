import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '../../images/logo.png'

const Navbar = () => {
  
  const [menuClass, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setMenuClicked] = useState(false)

  function show(){
    if(isMenuClicked) {
      setMenuClass('menu visible')
    }
    else {
      setMenuClass('menu hidden')
    }
  }
  
  return (
    <>
      <nav className={styles.nav}>
        <Image src={logo} height={50} className={styles.logo}  />
        <ul className={styles.ul}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={styles.hamurgerMenu}>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </div>
        <div className={style.menu}></div>
      
      </nav>
    </>
  )
}

export default Navbar;

