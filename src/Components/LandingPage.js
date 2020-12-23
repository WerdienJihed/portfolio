import styles from "./../Styles/Landing_page.module.css";
import photo from "./../assets/WerdienJihed.png";
import { SocialMedia } from "./socialMedia";

export function LandingPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_side}>
        <img src={photo} alt="werdien jihed" />
        <h2>Werdien Jihed</h2>
        <h1> curious and creative developer</h1>
      </div>
      <div className={styles.right_side}>
        <p>
          Since my childhood, working and playing with pc was my passion so I
          started studying information technology. Frustrated by our old
          education system I decided to leave the university looking for new
          knowledge horizons to build my dreams.
        </p>
        <p>
          I consider myself as a self-taught person , curious and creative
          developer who loves design and passionate about digital marketing.
        </p>
        <SocialMedia />
      </div>
    </div>
  );
}
