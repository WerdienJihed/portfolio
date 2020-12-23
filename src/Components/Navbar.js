import styles from "./../Styles/Navbar.module.css";
import Logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Link to="/">
          <img src={Logo} alt="logo" className={styles.logo} />
        </Link>
        <ul className={styles.navbar_links}>
          <Link to="/skills" className={styles.link_item}>
            <li>skills</li>
          </Link>
          <Link to="/contactMe" className={styles.link_item}>
            <li>contact me</li>
          </Link>
        </ul>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
