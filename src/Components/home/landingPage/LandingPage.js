import styles from "../../../Styles/home/landingPage/Landing_page.module.css";
import photo from "../../../assets/WerdienJihed.png";
import { SocialMedia } from "../../reusable/SocialMedia";

export function LandingPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_side}>
        <img src={photo} alt="werdien jihed" />
        <h2>Werdien Jihed</h2>
      </div>
      <div className={styles.right_side}>
        <h1> Curious and creative developer</h1>
        <p>
          I consider myself as a self-taught person , curious and creative
          developer who loves design and passionate about digital marketing.
          Since my childhood, working and playing with pc was my passion and i
          am always looking for new knowledge horizons to build my dreams.
        </p>
        <SocialMedia />
      </div>
    </div>
  );
}
