import styles from './navbar.module.css'
import logo from '../../assets/images/Frame 5.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleBodyOverflow = open => {
    const body = document.body;
      if (body) {
        body.style.overflow = open ? 'hidden' : 'unset';
      }
    };

  useEffect(() => {
    toggleBodyOverflow(menu);
  }, [menu]);


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

      <div onClick={toggleMenuClose} className={menu ? styles.navListWapper : styles.closeListWapper}>
        <ul onClick={e => e.stopPropagation()} className={menu ? styles.navList : styles.close}>
          <a onClick={toggleMenuClose} href="#home"><li>Home</li></a>
          <a onClick={toggleMenuClose} href="#about"><li>About us</li></a>
          <a onClick={toggleMenuClose} href="#portfolio"><li>Portfolio</li></a>
          <a onClick={toggleMenuClose} href="#services"><li>Our services</li></a>
          <FaRegWindowClose onClick={toggleMenuClose} className={styles.closeIcon} />
        </ul>
      </div>
      
      <button className={styles.signupBtn}>Sign up</button>
      <GiHamburgerMenu onClick={toggleMenuOpen} className={styles.hamburger}/>
    </section>
  )
}

export default Navbar
