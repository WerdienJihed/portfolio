import { SectionHeader } from "../../reusable/SectionHeader";
import { Project } from "./Project";
import styles from "../../../Styles/home/projects/projects.module.css";
import Expensify from "../../../assets/Expensify.png";
import LeaveManagement from "../../../assets/Leave-management.png";
import myPortfolio from "../../../assets/My Portfolio.png";

export function Projects() {
  const projects = [
    {
      name: "Expensify",
      description:
        "Application for expense management , tools i used in this project : react.js,redux,firebase,jest,sass",
      image: Expensify,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: "https://expensify-application-project.herokuapp.com/",
    },
    {
      name: "Leave management",
      description:
        "Application handles employee vacation requests , tools i used in this project : ASP.NET,entity framework,SQL,bootstrap",
      image: LeaveManagement,
      sourceCodeLink: "https://github.com/WerdienJihed/expensify-app",
      liveLink: null,
    },
    {
      name: "Werdien jihed portfolio",
      description:
        "My portfolio is a way to demonstrate my competence and  showcases my work , tools i used in this projects (react.js)",
      image: myPortfolio,
      sourceCodeLink: "https://github.com/WerdienJihed/portfolio/tree/main",
      liveLink: "https://werdienjihed.github.io/portfolio/",
    },
  ];
  const projectsItems = projects.map((project, index) => (
    <Project
      key={project.name}
      name={project.name}
      description={project.description}
      image={project.image}
      sourceCodeLink={project.sourceCodeLink}
      liveLink={project.liveLink}
      dataAos="fade-up"
      dataAosDelay={index * 200}
      dataAosDuration="1000"
    />
  ));
  return (
    <div className={styles.wrapper} id="Projects">
      <SectionHeader title="Projects" subTitle="Some of my recent work" />
      <div className={styles.projects}>{projectsItems}</div>
    </div>
  );
}
