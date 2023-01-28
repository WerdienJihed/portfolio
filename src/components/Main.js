import React from "react";
import Button from "./Button";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import scrollTo from "gatsby-plugin-smoothscroll";
import resumeURL from "/static/resume.pdf";
import * as styles from "../styles/main.module.css";

export default function Main() {
  const handleDownloadResume = () => {
    fetch(resumeURL).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "werdien-jihed-resume.pdf";
        alink.click();
      });
    });
  };

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
          <div className={styles.socialMediaContainer}>
            <a
              className={styles.socialMediaItem}
              href="https://www.linkedin.com/in/werdien-jihed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#007bb5" size="2x" />
            </a>
            <a
              className={styles.socialMediaItem}
              href="https://github.com/WerdienJihed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                color="#211f1f"
                size="2x"
              />
            </a>
            <a
              className={styles.socialMediaItem}
              href="https://www.facebook.com/werdien.jihed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                color="#4267b2"
                size="2x"
              />
            </a>
            <a
              className={styles.socialMediaItem}
              href="https://www.instagram.com/werdien.jihed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagramSquare}
                color="#e4405f"
                size="2x"
              />
            </a>
            <a
              className={styles.socialMediaItem}
              href="https://twitter.com/werdien_jihed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitterSquare}
                color="#1da1f2"
                size="2x"
              />
            </a>
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              content="Keep reading"
              callbackFunction={() => scrollTo("#projects-section")}
            />
            <button
              className={styles.downloadResumeButton}
              onClick={handleDownloadResume}
            >
              <span>Download resume</span>
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
