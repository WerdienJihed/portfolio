import React from "react";
import * as styles from "../styles/button.module.css";
export default function Button() {
  return (
    <button className={styles.keepReadingBtn}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <span className={styles.buttonText}>Keep reading</span>
    </button>
  );
}
