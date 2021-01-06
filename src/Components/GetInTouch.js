import styles from "./../Styles/Get_in_touch.module.css";
import { SocialMedia } from "./SocialMedia";
import { Informations } from "./Informations";
export function GetInTouch() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Get in touch</h1>
        <Informations />
        <SocialMedia />
      </div>
    </div>
  );
}
