import styles from "../../Styles/home/reusable/section_header.module.css";

export function SectionHeader(props) {
  return (
    <div className={styles.wrapper} data-aos="zoom-in">
      <div
        className={styles.wrapper && props.dark ? styles.dark : styles.light}
      >
        <div className={styles.title}>{props.title}</div>
        <hr className={styles.ligne} />
        <div className={styles.subTitle}>{props.subTitle}</div>
      </div>
    </div>
  );
}
