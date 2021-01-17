import styles from "../../Styles/404/not_found.module.css";
import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.error_code}>404</div>
      <div className={styles.error}>
        THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST
      </div>
      <Link to="/" className={styles.link}>
        Back home
      </Link>
    </div>
  );
}
