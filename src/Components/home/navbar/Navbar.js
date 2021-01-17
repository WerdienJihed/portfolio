import styles from "../../../Styles/home/navbar/Navbar.module.css";
import Logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Link to="/portfolio" className={styles.logo_container}>
          <img src={Logo} alt="logo" className={styles.logo} />
        </Link>
        <Link to="/portfolio/contact" className={styles.link}>
          contact <i className="fas fa-angle-double-right"></i>
        </Link>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
