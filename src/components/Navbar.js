import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import * as styles from "../styles/navbar.module.css";
import { downloadResume } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faContactCard,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <nav>
        <div
          className={`${styles.buttonContainer} ${
            isActive ? styles.buttonActive : null
          }`}
        >
          <div
            className={styles.button}
            onClick={() => setActive(!isActive)}
            onKeyDown={() => setActive(!isActive)}
          >
            <div className={`${styles.line} ${styles.line1}`}></div>
            <div className={`${styles.line} ${styles.line2}`}></div>
            <div className={`${styles.line} ${styles.line3}`}></div>
          </div>
        </div>
      </nav>
      <div
        className={`${styles.linksContainer} ${
          isActive ? styles.linksContainerActive : null
        }`}
      >
        <div className={styles.linkWrapper}>
          <Link
            to="/"
            className={styles.link}
            onClick={() => setActive(!isActive)}
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link
            to="/contact"
            className={styles.link}
            onClick={() => setActive(!isActive)}
          >
            <FontAwesomeIcon icon={faContactCard} />

            <span>Contact</span>
          </Link>
          <div className={styles.link} onClick={() => downloadResume()}>
            <FontAwesomeIcon icon={faDownload} />
            <span>Resume</span>
          </div>
        </div>
      </div>
    </>
  );
}
