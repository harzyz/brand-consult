import styles from "./contactUs.module.css";

const ContactUs = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.innerWrapperText}>
          <h1>Ready to change your business route</h1>
          <p>
            Contact with us now and get the all effecient service on your door
            let's have a chat. Shall we?
          </p>
        </div>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Your email here" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
