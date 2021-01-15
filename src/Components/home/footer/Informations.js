import styles from "../../../Styles/home/footer/informations.module.css";

export function Informations() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.address_item}>
        <i className="fas fa-envelope"></i>
        werdien.jihed1996@gmail.com
      </div>
      <div className={styles.address_item}>
        <i className="fas fa-map-marker-alt"></i>
        Tunisia , Djerba
      </div>
      <div className={styles.address_item}>
        <i className="fas fa-phone-alt"></i>
        +216 50802935
      </div>
    </div>
  );
}
