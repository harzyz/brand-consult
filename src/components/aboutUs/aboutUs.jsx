import styles from "./aboutUs.module.css";
import { AboutUsData } from "./aboutUsData";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section id="about" className={styles.wrapper}>
      <div className={styles.aboutusText}>
        <div className={styles.part1}>
          <h1>We Provide The Best Solution For Your Business Development</h1>
        </div>
        <div className={styles.part2}>
          <p>
            Make your business prosper with our great team of experts. We'll
            make your new business plan a success!
          </p>
        </div>
      </div>
      <div className={styles.navigation}>
        <FaRegArrowAltCircleLeft />
        <FaRegArrowAltCircleRight />
      </div>
      <div className={styles.aboutusImage}>
        {AboutUsData.map((item) => (
          <div key={item.id}>
            <div className={styles.aboutusList}>
             <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
