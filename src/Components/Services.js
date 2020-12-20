import { SectionHeader } from "./SectionHeader.js";
import { Service } from "./Service.js";
import styles from "./../Styles/Services.module.css";
export function Services() {
  return (
    <div className={styles.wrapper}>
      <SectionHeader title="Services" subTitle="What i can do" dark="true" />
      <div className={styles.services}>
        <Service
          title="DEVELOPEMENT"
          subTitle="I am passionate about building websites and applications to improve the live of those around"
          icon="fas fa-code"
        />
        <Service
          title="DESIGN"
          subTitle="I design my applications, websites before i start coding"
          icon="fas fa-layer-group"
        />
        <Service
          title="DIGITAL MARKETING"
          subTitle="i make my projects have strong online presence . my layout will work on any device , i love making pages come to life"
          icon="far fa-chart-bar"
        />
      </div>
    </div>
  );
}
