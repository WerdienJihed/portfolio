import styles from "../../Styles/home/reusable/button.module.css";
export function Button(props) {
  let button;
  if (props.link != null) {
    button = (
      <div className={styles.button}>
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.value}
        </a>
      </div>
    );
  } else {
    button = <div className={styles.disabledButton}>{props.value}</div>;
  }
  return button;
}
