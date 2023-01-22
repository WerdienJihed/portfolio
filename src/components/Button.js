import React from "react";
import * as styles from "../styles/button.module.css";
export default function Button({ content, callbackFunction }) {
  const handleClick = (callback) => {
    if (!callback) return;
    callback();
  };
  return (
    <button
      className={styles.keepReadingBtn}
      onClick={() => handleClick(callbackFunction)}
    >
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <span className={styles.buttonText}>{content}</span>
    </button>
  );
}
