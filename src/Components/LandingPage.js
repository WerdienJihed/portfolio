import styles from "./../Styles/Landing_page.module.css";
import photo from "./../assets/WerdienJihed.png";
import { SocialMedia } from "./socialMedia";

export function LandingPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_side}>
        <img src={photo} alt="werdien jihed" />
        <h2>Werdien Jihed</h2>
        <h1>Developer/Designer</h1>
      </div>
      <div className={styles.right_side}>
        <p>
          Since my childhood, working and playing with pc was my passion so I
          started studying information technology. Frustrated by our old
          education system I decided to leave the university looking for new
          knowledge horizons to build my dreams. I'm a curious and creative
          Developer who loves design and passionate about digital marketing. in
          2019 I started working as a .NET developer in the CRM domain in which
          I truly learned that there’s much more yet to learn, yet more problems
          to solve, and yet more to build.
        </p>
        <SocialMedia />
      </div>
    </div>
  );
}
