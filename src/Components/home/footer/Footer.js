import styles from "../../../Styles/home/footer/footer.module.css";
import { TopFooter } from "./TopFooter";
import { Copyright } from "./Copyright";
export function Footer() {
  return (
    <div className={styles.container}>
      <TopFooter />
      <Copyright />
    </div>
  );
}
