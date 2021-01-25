import styles from "../../../Styles/home/services/service.module.css";
export function Service(props) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.face + " " + styles.face1}>
          <div className={styles.content}>
            <i className={props.icon + " fa-5x"} />
            <h3 className={styles.title}>{props.title} </h3>
          </div>
        </div>
        <div className={styles.face + " " + styles.face2}>
          <div className={styles.content}>
            <div className={styles.subtitle}>{props.subTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
