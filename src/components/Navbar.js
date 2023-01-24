import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import * as styles from "../styles/navbar.module.css";

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
        <Link
          to="/"
          className={styles.link}
          onClick={() => setActive(!isActive)}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className={styles.link}
          onClick={() => setActive(!isActive)}
        >
          Contact
        </Link>
        <Link
          to="/resume"
          className={styles.link}
          onClick={() => setActive(!isActive)}
        >
          Resume
        </Link>
      </div>
    </>
  );
}
