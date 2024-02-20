import React from "react";
import { getImage } from "../utils";
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section id="skills">
      <div className={styles.skels}>
        <h2 className={styles.h2s}>Skills</h2>
        <div className={styles.imageContainer}>
          <img src={getImage("html5.png")} alt="HTML" />
          <img src={getImage("css3.png")} alt="CSS" />
          <img src={getImage("js.png")} alt="JavaScript" />
          <img src={getImage("react.png")} alt="ReactJS" />
        </div>
      </div>
    </section>
  );
};
