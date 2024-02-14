import logo from '../../assets/images/Frame 5.png'
import styles from "./footer.module.css";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.group}>
          <div className={styles.logo}>
            <div className={styles.logoImage}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.logotext}>
              <h3>Brand</h3>
              <p>consult</p>
            </div>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className={styles.group}>
          <h3>Our Company</h3>
          <ul>
            <li>Home</li>
            <li>About us </li>
            <li>Portfolio</li>
            <li>Our services</li>
          </ul>
        </div>
        <div className={styles.group}>
          <h3>Services</h3>
          <ul>
            <li>Business Analysis</li>
            <li>Strategic Planning</li>
            <li>Business Consulting</li>
            <li>Marketing Strategy</li>
            <li>Experience Design</li>
            <li>Audit & Evaluation</li>
          </ul>
        </div>
        <div className={styles.group}>
          <h3 className={styles.subscribeh3}>Subscribe to our newsletter</h3>
          <div className={styles.subscribe}>
            <input className={styles.onlyInput} type="email" placeholder='Your email here' />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <h3>All Copyrights are reserved my Mamdou Ghaneemy</h3>
        <div className={styles.socials}>
          <FaFacebook />
          <FaLinkedin />
          <RiTwitterXLine />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
