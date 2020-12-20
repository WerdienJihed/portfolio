import styles from "./../Styles/Footer.module.css";
import { GetInTouch } from "./GetInTouch";
import { Articles } from "./Articles";
export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.informations}>
        <Articles />
        <GetInTouch />
      </div>
      <div className={styles.copyright}>
        <p>©2021 Copyright: werdien jihed</p>
      </div>
    </div>
  );
}
