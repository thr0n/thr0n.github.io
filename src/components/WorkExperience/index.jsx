import React from "react";
import * as styles from "./WorkExperience.module.css";

/**
 * @typedef {Object} ExperienceEntry
 * @property {string} title
 * @property {string} company
 * @property {string} period
 * @property {string[]} skills
 */

/**
 * @param {{ experiences?: ExperienceEntry[] }} props
 */
const WorkExperience = ({ experiences = [] }) => {
  if (!experiences.length) {
    return null;
  }

  return (
    <section className={styles.wrapper} aria-label="Work experience">
      <ol className={styles.timeline}>
        {experiences.map((experience) => {
          const key = `${experience.title}-${experience.company}-${experience.period}`;

          return (
            <li key={key} className={styles.entry}>
              <div className={styles.marker} aria-hidden="true" />
              <article className={styles.card}>
                <h3 className={styles.title}>{experience.title}</h3>
                <p className={styles.meta}>
                  {experience.company} - {experience.period}
                </p>
                <ul className={styles.skillList} aria-label={`${experience.title} skills`}>
                  {experience.skills.map((skill) => (
                    <li key={`${key}-${skill}`} className={styles.skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default WorkExperience;
