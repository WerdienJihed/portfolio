import { SectionHeader } from "./SectionHeader.js";
import { Service } from "./Service.js";
import styles from "./../Styles/Services.module.css";
export function Services() {
  return (
    <div className={styles.wrapper}>
      <SectionHeader title="Services" subTitle="what i do" dark="true" />
      <div className={styles.services}>
        <Service
          title="DEVELOPEMENT"
          subTitle="I building websites and applications"
          icon="fas fa-code"
        />
        <Service
          title="DESIGN"
          subTitle="I design my projects before i start coding"
          icon="fas fa-layer-group"
        />
        <Service
          title="DIGITAL MARKETING"
          subTitle="I make my projects have strong online presence"
          icon="far fa-chart-bar"
        />
      </div>
    </div>
  );
}
