import { SectionHeader } from "../../reusable/SectionHeader";
import { TimeLine } from "./TimeLine";
import styles from "../../../Styles/home/experience/experience.module.css";
export function Experience() {
  return (
    <div className={styles.wrapper} id="Experience">
      <SectionHeader
        title="Experience"
        subTitle="Past and current jobs"
        dark="true"
      />
      <TimeLine />
    </div>
  );
}
