import styles from "./../Styles/Navbar.module.css";
import Logo from "./../assets/logo.png";
export function Navbar() {
  return (
    <div>
      <nav className={styles.wrapper}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <ul className={styles.navbar_links}>
          <li className={styles.link_item}>
            <a href="#">skills</a>
          </li>
          <li className={styles.link_item}>
            <a href="#">contact me</a>
          </li>
        </ul>
      </nav>
      <hr className={styles.line} />
    </div>
  );
}
