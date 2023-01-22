import React from "react";
import { navigate } from "gatsby";
import Button from "./Button.js";
import ProjectImage from "../../static/project.svg";
import CIcon from "@coreui/icons-react";
import {
  cibReact,
  cibGatsby,
  cibHtml5,
  cibCss3,
  cilWarning,
} from "@coreui/icons";

import * as styles from "../styles/project-card.module.css";

export default function ProjectCard({
  title,
  description,
  technologies,
  slug,
}) {
  const iconsArray = technologies.map((item, index) => {
    switch (item) {
      case "html":
        return <CIcon key={index} icon={cibHtml5} width={25} />;
      case "css":
        return <CIcon key={index} icon={cibCss3} width={25} />;
      case "react":
        return <CIcon key={index} icon={cibReact} swidth={25} />;
      case "gatsbyjs":
        return <CIcon key={index} icon={cibGatsby} width={25} />;
      default:
        return <CIcon key={index} icon={cilWarning} width={25} />;
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
        <h1 className={styles.title}>{title}</h1>
        <hr className={styles.divider}></hr>
        <div className={styles.technologiesWrapper}>{iconsArray}</div>
        <hr className={styles.divider}></hr>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button content="Details" callbackFunction={() => navigate(slug)} />
      </div>
    </div>
  );
}
