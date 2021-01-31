import styles from "../../../Styles/home/footer/top_footer.module.css";
import dotNetCoreLogo from "../../../assets/dotNetCore.png";
import { GetInTouch } from "./GetInTouch";
export function TopFooter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shape}>
        <div className={styles.container}>
          <h1 className={styles.title} data-aos="zoom-in">
            Technologies i use
          </h1>
          <div className={styles.technlogies_table}>
            <img
              src={dotNetCoreLogo}
              className={styles.icon}
              alt=".NET Core"
              data-aos="flip-left"
              data-aos-duration="1000"
            />

            <img
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt="react.js"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
            <img
              src="https://img.icons8.com/color/58/fa314a/django.png"
              alt="django"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
            <img
              src="https://img.icons8.com/fluent/48/000000/adobe-photoshop.png"
              alt="photoshop"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
            <img
              src="https://img.icons8.com/color/48/000000/adobe-illustrator.png"
              alt="illustrator"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
            <img
              src="https://img.icons8.com/windows/48/fa314a/figma.png"
              alt="figma"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
            <img
              src="https://img.icons8.com/color/48/000000/microsoft-sql-server.png"
              alt="sql server"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
