import { getImage } from "../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Moises Andrei G. Uy</h1>
        <p className={styles.description}>
          I possess a foundational understanding of web programming,
          particularly in the realm of front-end development. I'm familiar with
          concepts such as responsive design, accessibility, and browser
          compatibility, ensuring that websites function seamlessly across
          various devices and platforms.
        </p>
        <a
          href="mailto:it.moisesuy@gmail.com"
          target="_blank"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img src={getImage("hero.png")} className={styles.heroImg} alt="" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
