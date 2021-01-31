import styles from "../../../Styles/home/footer/get_in_touch.module.css";
import { SocialMedia } from "../../reusable/SocialMedia";
import { Informations } from "./Informations";
export function GetInTouch() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title} data-aos="zoom-in">
          Get in touch
        </h1>
        <Informations />
        <SocialMedia />
      </div>
    </div>
  );
}
