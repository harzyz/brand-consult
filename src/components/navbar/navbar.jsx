import styles from './navbar.module.css'
import logo from '../../assets/images/Frame 5.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenuOpen = () => {
    setMenu(true)
  }

  const toggleMenuClose = () => {
    setMenu(false)
  }

  return (
    <section className={styles.navbar}>

      <div className={styles.logo}>
        <div className={styles.logoImage}>
          <img src={logo} alt="" />
        </div>
        <div>
          <h1>Brand</h1>
          <p>consult</p>
        </div>
      </div>

      <ul className={menu ? styles.navList : styles.close}>
        <li>Home</li>
        <li>About us</li>
        <li>Portfolio</li>
        <li>Our services</li>
        <FaRegWindowClose onClick={toggleMenuClose} className={styles.closeIcon} />
      </ul>
      
      <button className={styles.signupBtn}>Sign up</button>
      <GiHamburgerMenu onClick={toggleMenuOpen} className={styles.hamburger}/>
    </section>
  )
}

export default Navbar
