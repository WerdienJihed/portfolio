import React from "react";
import Button from "./Button";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "./SocialMedia";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import scrollTo from "gatsby-plugin-smoothscroll";
import { downloadResume } from "../utils/utils";
import * as styles from "../styles/main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.imageContainer}>
        <StaticImage src="../../static/person.png" alt="Werdien Jihed photo" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <h1>Full-Stack Developer</h1>
          <h2>Werdien Jihed</h2>
          <p>
            I am a FullStack developer with more than 3 years of professional
            experience in the CRM domain as a Javascript/.NET developer. I also
            have substantial experience working with databases mainly Microsoft
            SQL Server,Postgres SQL and some Front-End frameworks like ReactJs.
            I like working on projects where it is necessary to come up with a
            non-standard solution and I am always looking for new knowledge
            horizons.
          </p>
          <SocialMedia />
          <div className={styles.buttonsContainer}>
            <Button
              content="Keep reading"
              callbackFunction={() => scrollTo("#projects-section")}
            />
            <button
              className={styles.downloadResumeButton}
              onClick={() => downloadResume()}
            >
              <span>Resume</span>
              <FontAwesomeIcon
                icon={faDownload}
                className={styles.downloadIcon}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
