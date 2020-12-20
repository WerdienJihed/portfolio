import styles from "./../Styles/Button.module.css";
export function Button(props) {
  return (
    <div className={styles.button}>
      <span>{props.value}</span>
    </div>
  );
}
