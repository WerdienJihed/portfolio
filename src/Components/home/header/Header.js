import styles from "../../../Styles/home/header/header.module.css";
import photo from "../../../assets/werdien jihed.png";
import { SocialMedia } from "../../reusable/SocialMedia";

export function Header() {
  return (
    <div className={styles.wrapper} id="Header">
      <div
        className={styles.image_container}
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img src={photo} alt="werdien jihed" />
      </div>
      <div
        className={styles.description}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1>Werdien Jihed</h1>
        <h2> Curious and creative developer</h2>
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
