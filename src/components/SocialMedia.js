import React from "react";
import * as styles from "../styles/social-media.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
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
        <FontAwesomeIcon icon={faGithubSquare} color="#211f1f" size="2x" />
      </a>
      <a
        className={styles.socialMediaItem}
        href="https://www.facebook.com/werdien.jihed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare} color="#4267b2" size="2x" />
      </a>
      <a
        className={styles.socialMediaItem}
        href="https://www.instagram.com/werdien.jihed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagramSquare} color="#e4405f" size="2x" />
      </a>
      <a
        className={styles.socialMediaItem}
        href="https://twitter.com/werdien_jihed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitterSquare} color="#1da1f2" size="2x" />
      </a>
    </div>
  );
}
