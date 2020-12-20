import styles from "./../Styles/Get_in_touch.module.css";
import { SocialMedia } from "./socialMedia";
export function GetInTouch() {
  return (
    <div className={styles.get_in_touch}>
      <h1>Get in touch</h1>
      <SocialMedia />
      <div className={styles.addresses}>
        <div className={styles.address_item}>
          <i className="fas fa-phone-alt"></i>
          +216 50802935
        </div>
        <div className={styles.address_item}>
          <i className="fas fa-map-marker-alt"></i>
          Tunisia , Djerba
        </div>

        <div className={styles.address_item}>
          <i className="fas fa-envelope"></i>
          informatique.jihed@gmail.com
        </div>
      </div>
    </div>
  );
}
