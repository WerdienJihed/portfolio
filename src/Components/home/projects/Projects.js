import { SectionHeader } from "../../reusable/SectionHeader";
import { Project } from "./Project";
import styles from "../../../Styles/home/projects/Projects.module.css";
import Expensify from "../../../assets/Expensify.png";
import app1 from "../../../assets/app1.jpg";
import app2 from "../../../assets/app2.jpg";
import app3 from "../../../assets/app3.jpg";
export function Projects() {
  const projects = [
    {
      name: "Expensify",
      description: "test",
      image: Expensify,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: "https://expensify-application-project.herokuapp.com/",
    },
    {
      name: "Leave management",
      description: "tqsdfqsdf sdfqsdfest",
      image: app1,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: "https://expensify-application-project.herokuapp.com/",
    },
    {
      name: "ExcelToDB",
      description: "test",
      image: app2,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: "https://expensify-application-project.herokuapp.com/",
    },
    {
      name: "Task manager",
      description: "test",
      image: app3,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: "https://expensify-application-project.herokuapp.com/",
    },
    {
      name: "TEST",
      description: "test",
      image: app3,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: "https://expensify-application-project.herokuapp.com/",
    },
    {
      name: "TEST",
      description: "test",
      image: app3,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: "https://expensify-application-project.herokuapp.com/",
    },
  ];
  const projectsItems = projects.map((project) => (
    <Project
      name={project.name}
      description={project.description}
      image={project.image}
      sourceCodeLink={project.sourceCodeLink}
      liveLink={project.liveLink}
    />
  ));
  return (
    <div className={styles.wrapper}>
      <SectionHeader title="Projects" subTitle="Some of my recent work" />
      <div className={styles.projects}>{projectsItems}</div>
    </div>
  );
}
