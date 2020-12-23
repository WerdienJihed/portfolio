import CustomPieChart from "./CustomPieChart";
import { SectionHeader } from "./SectionHeader";
import styles from "./../Styles/Skills.module.css";

const COLORS = { green: "#7AC74F", orange: "#DA7635", blue: "#56A3A6" };
const coreData1 = [
  { name: "programming languages", value: 550, fill: COLORS.orange },
  { name: "frameworks and libraries ", value: 450, fill: COLORS.green },
  { name: "tools", value: 450, fill: COLORS.blue },
];

const shellData1 = [
  { name: "javascript", value: 100, fill: COLORS.orange },
  { name: "C#", value: 100, fill: COLORS.orange },

  { name: "React.js", value: 100, fill: COLORS.green },
  { name: "WPF", value: 100, fill: COLORS.green },
  { name: "entity framework", value: 100, fill: COLORS.green },
  { name: "ASP.NET", value: 100, fill: COLORS.green },
  { name: "Jest", value: 100, fill: COLORS.green },

  { name: "Visual studio", value: 100, fill: COLORS.blue },
  { name: "Visual studio code", value: 100, fill: COLORS.blue },
  { name: "Talend", value: 100, fill: COLORS.blue },
];

const coreData2 = [
  { name: "Tools", value: 450, fill: COLORS.orange },
  { name: "products", value: 550, fill: COLORS.green },
];

const shellData2 = [
  { name: "Figma", value: 100, fill: COLORS.orange },
  { name: "illustrator ", value: 100, fill: COLORS.orange },
  { name: "photoshop ", value: 100, fill: COLORS.orange },

  { name: "logos", value: 100, fill: COLORS.green },
  { name: "web applications", value: 100, fill: COLORS.green },
  { name: "mobile applications", value: 100, fill: COLORS.green },
];
const coreData3 = [
  { name: "Tools", value: 450, fill: COLORS.orange },
  { name: "products", value: 550, fill: COLORS.green },
];

const shellData3 = [
  { name: "Google Analytics", value: 100, fill: COLORS.orange },

  { name: "Search Engine Optimization", value: 100, fill: COLORS.green },
];

export function Skills() {
  return (
    <div className={styles.wrapper}>
      <SectionHeader title="My skills" dark="true" />
      <div className={styles.skills}>
        <div>
          <h2 className={styles.title}>Developement</h2>
          <CustomPieChart
            title="Developement"
            coreData={coreData1}
            shellData={shellData1}
          />
        </div>
        <div>
          <h2 className={styles.title}>Design</h2>

          <CustomPieChart
            title="Design"
            coreData={coreData2}
            shellData={shellData2}
          />
        </div>
        <div>
          <h2 className={styles.title}>Degital Marketing</h2>

          <CustomPieChart
            title="Degital Marketing"
            coreData={coreData3}
            shellData={shellData3}
          />
        </div>
      </div>
    </div>
  );
}
