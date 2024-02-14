import styles from "./businessTeam.module.css";
import imag1 from "../../assets/images/Frame 92.png";

const BusinessTeam = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.teamImage}>
        <img src={imag1} alt="" />
      </div>
      <div className={styles.teamText}>
        <h1>We Lead Your Business Team To Victory</h1>
        <p>
          We are a team of passionate business consultants & technology veterans
          eager to help companies reach their full potential.
        </p>

        <div className={styles.motive}>
          <div>Our Mission</div>
          <div>Our Vision</div>
          <div>Our Value</div>
        </div>

        <p className={styles.pbg}>
          Our strategic planning process rapidly delivers plans that stick, with
          execution support to make your plans a reality.
        </p>
      </div>
    </section>
  );
};

export default BusinessTeam;
