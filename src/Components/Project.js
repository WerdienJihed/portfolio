import { Button } from "./Button";
import styles from "./../Styles/Project.module.css";

export function Project(props) {
  return (
    <div className={styles.card}>
      <img src={props.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{props.name}</h2>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.buttons}>
          <Button value="live" link={props.liveLink} />
          <Button value="code" link={props.sourceCodeLink} />
        </div>
      </div>
    </div>
  );
}
