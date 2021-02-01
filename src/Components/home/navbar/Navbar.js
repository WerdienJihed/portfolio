import { useState } from "react";
import styles from "../../../Styles/home/navbar/navbar.module.css";
import Logo from "./../../../assets/logo.png";
import { Link } from "react-scroll";
import { useMediaQuery } from "./useMediaQuery";

export function Navbar() {
  let isOnMobileVersion = useMediaQuery("(max-width: 768px)");

  const [navbarInScroll, setNavbarInScroll] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbarInScroll(true);
    } else {
      setNavbarInScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={styles.navbar}
      style={{ backgroundColor: navbarInScroll ? "#ebebebf5" : null }}
    >
      <div className={styles.container}>
        {isOnMobileVersion && navbarInScroll ? null : (
          <Link to="Header" smooth={true} className={styles.link}>
            <img src={Logo} alt="logo" className={styles.logo} />
          </Link>
        )}

        {navbarOpen || !isOnMobileVersion ? (
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
        ) : null}
      </div>
      {isOnMobileVersion ? (
        <div
          className={styles.burgerIconContaienr}
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
        >
          {navbarOpen ? (
            <i className="fas fa-caret-up fa-3x"></i>
          ) : (
            <i className="fas fa-caret-down fa-3x"></i>
          )}
        </div>
      ) : null}
      <hr className={styles.line} />
    </div>
  );
}
