import React from "react";
import * as styles from "../styles/section-header.module.css";
export default function SectionHeader({ title, subtitle, switchColors }) {
  const titleClassName = switchColors
    ? styles.titleOpposite
    : styles.titleNormal;
  const subtitleClassName = switchColors
    ? styles.subtitleOpposite
    : styles.subtitleNormal;
  return (
    <div>
      <h2 className={`${styles.title} ${titleClassName}`}>{title}</h2>
      <hr className={styles.divider} />
      <h3 className={`${styles.subtitle} ${subtitleClassName}`}>{subtitle}</h3>
    </div>
  );
}
