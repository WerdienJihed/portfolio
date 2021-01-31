import { Button } from "../../reusable/Button";
import styles from "../../../Styles/home/projects/project.module.css";

export function Project(props) {
  return (
    <div
      className={styles.card}
      data-aos={props.dataAos}
      data-aos-delay={props.dataAosDelay}
      data-aos-duration={props.dataAosDuration}
    >
      <img src={props.image} alt="project screen shot" />
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
