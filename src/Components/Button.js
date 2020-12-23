import styles from "./../Styles/Button.module.css";
export function Button(props) {
  return (
    <div className={styles.button}>
      <a href={props.link} target="_blank">
        {props.value}
      </a>
    </div>
  );
}
