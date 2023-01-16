import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as styles from "../styles/navbar.module.css";
const Navbar = () => {
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (isActive) document.querySelector("main").classList.add("main-blur");
    else document.querySelector("main").classList.remove("main-blur");
  }, [isActive]);

  return (
    <>
      <nav>
        <div
          className={`${styles.icon} ${isActive ? styles.iconActive : null}`}
          onClick={() => setActive(!isActive)}
          onKeyDown={() => setActive(!isActive)}
        >
          <div className={`${styles.line} ${styles.line1}`}></div>
          <div className={`${styles.line} ${styles.line2}`}></div>
          <div className={`${styles.line} ${styles.line3}`}></div>
        </div>
      </nav>
      <div>
        <li
          className={`${styles.navLink} ${
            isActive ? styles.navLinkActive : null
          }`}
        >
          <p href="#">Home</p>
        </li>
        <li
          className={`${styles.navLink} ${
            isActive ? styles.navLinkActive : null
          }`}
        >
          <p href="#">About</p>
        </li>
        <li
          className={`${styles.navLink} ${
            isActive ? styles.navLinkActive : null
          }`}
        >
          <p href="#">Contact</p>
        </li>
        <li
          className={`${styles.navLink} ${
            isActive ? styles.navLinkActive : null
          }`}
        >
          <p href="#">Resume</p>
        </li>
      </div>
    </>
  );
};

export default Navbar;
