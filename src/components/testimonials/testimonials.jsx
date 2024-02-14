import styles from "./testimonials.module.css";
import { FaStar } from "react-icons/fa6";
import testimonial1 from '../../assets/images/Frame 61.png'
import quote from '../../assets/images/Vector 12.png'

const Testimonials = () => {
  return (
    <section className={styles.wrapper}>
      <h1>What's Our Client Saying?</h1>
      <p>
        We are trusted by numerous companies from different business to meet
        their needs.
      </p>
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialImage}>
          <img src={testimonial1} alt="Maya Language" />
        </div>
        <div className={styles.testimonialText}>
          <div>
            <img src={quote} alt="qoutes" />
          </div>
          <p>Working with Consuly to implement their strategic planning framework has helped us focus on the biggest opportunities for growth.</p>
          <div>
            <FaStar className={styles.stars}/>
            <FaStar className={styles.stars}/>
            <FaStar className={styles.stars}/>
            <FaStar className={styles.stars}/>
            <FaStar className={styles.starsW}/>
          </div>
          <h2>Maya Language</h2>
          <p>Director ACT</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
