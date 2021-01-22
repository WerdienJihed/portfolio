import styles from "../../../Styles/home/navbar/Navbar.module.css";
import Logo from "./../../../assets/logo.png";
import { Link } from "react-scroll";
import React, { useState } from "react";

export function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? styles.navbarScroll : styles.navbar}>
      <div className={styles.wrapper}>
        <Link to="Header" smooth={true} className={styles.link}>
          <img src={Logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.navLinks}>
          <Link to="Services" smooth={true} className={styles.link}>
            Services
          </Link>
          <Link to="Projects" smooth={true} className={styles.link}>
            Projects
          </Link>
          <Link to="Experience" smooth={true} className={styles.link}>
            Experience
          </Link>
          <Link to="Contact" smooth={true} className={styles.link}>
            Contact
          </Link>
        </div>
        <div className={styles.burger}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
