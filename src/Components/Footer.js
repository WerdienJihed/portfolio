import styles from "./../Styles/footer.module.css";
import { TopFooter } from "./TopFooter";
import { Copyright } from "./Copyright";
export function Footer() {
  return (
    <div className={styles.wrapper}>
      <TopFooter />
      <Copyright />
    </div>
  );
}
