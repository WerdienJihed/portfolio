import styles from "../../../Styles/home/footer/informations.module.css";

export function Informations() {
  return (
    <>
      <div
        className={styles.address_item}
        data-aos="fade-right"
        data-aos-delay="0"
      >
        <i className="fas fa-envelope"></i>
        werdien.jihed1996@gmail.com
      </div>
      <div
        className={styles.address_item}
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <i className="fas fa-map-marker-alt"></i>
        Tunisia , Djerba
      </div>
      <div
        className={styles.address_item}
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <i className="fas fa-phone-alt"></i>
        +216 50802935
      </div>
    </>
  );
}
