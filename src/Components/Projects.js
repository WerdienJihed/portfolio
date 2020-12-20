import { SectionHeader } from "./SectionHeader";
import { Project } from "./Project";
import Expensify from "./../assets/Expensify.png";
import styles from "./../Styles/Projects.module.css";
export function Projects() {
  return (
    <div className={styles.wrapper}>
      <SectionHeader title="Projects" subTitle="Some of my recent work" />
      <div className={styles.projects}>
        <Project
          name="Expensify"
          description="Description "
          image={Expensify}
        />
        <Project
          name="Expensify"
          description="Description test"
          image={Expensify}
        />
        <Project
          name="Expensify"
          description="Description test"
          image={Expensify}
        />
        <Project
          name="Expensify"
          description="Description "
          image={Expensify}
        />
        <Project
          name="Expensify"
          description="Description sdfg sdfgs sdf dfgs sdfgsdfqsdfqsdfqsdfqsdfqsdfqsdfqsdf dsfr dfgsdfg dfgsdfg dsfg sddfg dfg sdg gsdfg  dfgsdfg sdfgd fg dfg sdfg dfgsdg dfg sdfg  sdfg sd"
          image={Expensify}
        />
        <Project
          name="Expensify"
          description="Description test"
          image={Expensify}
        />
      </div>
    </div>
  );
}
