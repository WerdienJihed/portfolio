import styles from "../../../Styles/home/navbar/Navbar.module.css";
import Logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo_container}>
          <img src={Logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.links}>
          <Link to="/contact" className={styles.link}>
            contact
          </Link>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
