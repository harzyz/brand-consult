import styles from "./mentors.module.css";
import { MentorsData } from "./mentorsData";

const Mentors = () => {
  return (
    <section id="portfolio" className={styles.wrapper}>
      <h1>Our mentors are experts in different fields </h1>
      <div className={styles.mentorsList}>
        {MentorsData.map((item) => (
          <div key={item.id}>
            <div  className={styles.mentorsItem}>
              <div className={styles.mentorsImage}>
                <img src={item.image} alt={item.label} />
              </div>
              <h2>{item.label}</h2>
              <p>{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
