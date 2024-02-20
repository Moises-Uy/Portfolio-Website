import React from "react";
import { getImage } from "../utils";
import styles from "./Skills.module.css";
import skills from "../skills.json";

export const Skills = () => {
  return (
    <section id="skills">
      <div className={styles.skels}>
        <h2 className={styles.h2s}>Skills</h2>
        <div className={styles.imageContainer}>
          {skills.map((skill, id) => {
            return (
              <div key={id}>
                <div>
                  <img src={getImage(skill.imageSrc)} alt={skill.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
