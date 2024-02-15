import styles from "./heroSection.module.css";
import heroImg from '../../assets/images/Frame 95.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className={styles.wrapper}>
      <div className={styles.heroText}>
        <h1>Utilize our solution to expand <br /> your business.</h1>
        <p>
          Make your business prosper with our great team of experts. We'll make
          your new business plan a success!
        </p>
        <button>Let's Talk <FaLongArrowAltRight className={styles.arrow} /></button>
      </div>
      <div className={styles.heroImage}>
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
