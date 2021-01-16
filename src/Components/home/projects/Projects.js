import { SectionHeader } from "../../reusable/SectionHeader";
import { Project } from "./Project";
import styles from "../../../Styles/home/projects/Projects.module.css";
import Expensify from "../../../assets/Expensify.png";
import LeaveManagement from "../../../assets/Leave-management.png";
import myPortfolio from "../../../assets/My Portfolio.png";
export function Projects() {
  const projects = [
    {
      name: "Expensify",
      description: "",
      image: Expensify,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: "https://expensify-application-project.herokuapp.com/",
    },
    {
      name: "Leave management",
      description: "",
      image: LeaveManagement,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: "",
    },
    {
      name: "Werdien jihed portfolio",
      description: "",
      image: myPortfolio,
      sourceCodeLink:
        "https://github.com/WerdienJihed/Werdien-jihed---Portfolio",
      liveLink: "https://werdienjihed.github.io/werdien-jihed-portfolio",
    },
  ];
  const projectsItems = projects.map((project) => (
    <Project
      key={project.name}
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
