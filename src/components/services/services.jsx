import styles from "./services.module.css";
import { ServicesData } from "./servicesData";

const Services = () => {
  return (
    <section className={styles.wrapper}>
      <h1>What We Do To Serve Your Best</h1>
      <p>
        We provide comprehensive services to support your business by leveraging
        strategy to drive people, process, and information.
      </p>
      <div className={styles.serviceList}>
        {ServicesData.map((item) => (
          <div key={item.id} className={styles.serviceItemContainer}>
            <div  className={styles.serviceItem}>
              <div className={styles.iconbg}>
                <img src={item.icon} alt={item.title} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
