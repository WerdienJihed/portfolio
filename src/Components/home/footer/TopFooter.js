import styles from "../../../Styles/home/footer/top_footer.module.css";
import dotNetCoreLogo from "../../../assets/dotNetCore.png";
import { GetInTouch } from "./GetInTouch";
export function TopFooter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shape}>
        <div className={styles.container}>
          <h1 className={styles.title}>Technologies i use</h1>
          <div className={styles.technlogies_table}>
            <img
              src="https://img.icons8.com/color/48/000000/c-sharp-logo.png"
              alt="C#"
            />
            <img
              src="https://img.icons8.com/color/48/000000/javascript.png"
              alt="javascript"
            />
            <img
              src="https://img.icons8.com/color/48/000000/python.png"
              alt="python"
            />
            <img src={dotNetCoreLogo} className={styles.icon} alt=".NET Core" />
            <img
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt="react.js"
            />
            <img
              src="https://img.icons8.com/color/48/fa314a/django.png"
              alt="django"
            />

            <img
              src="https://img.icons8.com/fluent/48/000000/adobe-photoshop.png"
              alt="photoshop"
            />
            <img
              src="https://img.icons8.com/color/48/000000/adobe-illustrator.png"
              alt="illustrator"
            />
            <img
              src="https://img.icons8.com/windows/48/fa314a/figma.png"
              alt="figma"
            />
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
