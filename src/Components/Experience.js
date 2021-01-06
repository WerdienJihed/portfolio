import { SectionHeader } from "./SectionHeader";
import { TimeLine } from "./TimeLine";
import styles from "./../Styles/Experience.module.css";
export function Experience() {
  return (
    <div className={styles.wrapper}>
      <SectionHeader
        title="Experience"
        subTitle="Past and current jobs"
        dark="true"
      />
      <TimeLine />
    </div>
  );
}
