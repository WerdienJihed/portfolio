import styles from "./../Styles/top_footer.module.css";
import dotNetCoreLogo from "./../assets/dotNetCore.png";
import { GetInTouch } from "./GetInTouch";
export function TopFooter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shape}>
        <div className={styles.container}>
          <h1 className={styles.title}>Technologies i use</h1>
          <div className={styles.technlogies_table}>
            <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" />
            <img src="https://img.icons8.com/color/48/000000/javascript.png" />
            <img src="https://img.icons8.com/color/48/000000/python.png" />
            <img src={dotNetCoreLogo} className={styles.icon} />
            <img src="https://img.icons8.com/color/48/000000/react-native.png" />
            <img src="https://img.icons8.com/color/48/fa314a/django.png" />

            <img src="https://img.icons8.com/fluent/48/000000/adobe-photoshop.png" />
            <img src="https://img.icons8.com/color/48/000000/adobe-illustrator.png" />
            <img src="https://img.icons8.com/windows/48/fa314a/figma.png" />
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
