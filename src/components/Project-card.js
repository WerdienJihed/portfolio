import React from "react";
import Button from "./Button.js";
import ProjectImage from "../../static/project.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import * as styles from "../styles/project-card.module.css";

export default function ProjectCard({ name, description, technologies }) {
  const iconsArray = technologies.map((item, index) => {
    switch (item) {
      case "html":
        return <FontAwesomeIcon key={index} icon={faHtml5} size="2x" />;
      case "react":
        return <FontAwesomeIcon key={index} icon={faReact} size="2x" />;
      default:
        return (
          <FontAwesomeIcon key={index} icon={faQuestionCircle} size="2x" />
        );
    }
  });
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div
          className={styles.imageWrapper}
          style={{
            backgroundImage: `url(${ProjectImage})`,
          }}
        ></div>
      </div>
      <div className={styles.contentWrapper}>
        <h1 className={styles.name}>{name}</h1>
        <hr className={styles.divider}></hr>
        <div className={styles.technologiesWrapper}>{iconsArray}</div>
        <hr className={styles.divider}></hr>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button />
      </div>
    </div>
  );
}
