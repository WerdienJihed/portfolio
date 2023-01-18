import React from "react";
import ProjectCard from "./project-card.js";
import * as styles from "../styles/projects.module.css";

export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus tempora sint, qui doloribus aut libero recusandae molestias reiciendis atque dolore dolores veniam? Ducimus illo vel tempore distinctio tenetur molestiae?...",
      technologies: ["html", "react"],
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus tempora sint, qui doloribus aut libero recusandae molestias reiciendis atque dolore dolores veniam? Ducimus illo vel tempore distinctio tenetur molestiae?...",
      technologies: ["html", "react"],
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus tempora sint, qui doloribus aut libero recusandae molestias reiciendis atque dolore dolores veniam? Ducimus illo vel tempore distinctio tenetur molestiae?...",
      technologies: ["html", "react"],
    },
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus tempora sint, qui doloribus aut libero recusandae molestias reiciendis atque dolore dolores veniam? Ducimus illo vel tempore distinctio tenetur molestiae?...",
      technologies: ["html", "react"],
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus tempora sint, qui doloribus aut libero recusandae molestias reiciendis atque dolore dolores veniam? Ducimus illo vel tempore distinctio tenetur molestiae?...",
      technologies: ["html", "react"],
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus tempora sint, qui doloribus aut libero recusandae molestias reiciendis atque dolore dolores veniam? Ducimus illo vel tempore distinctio tenetur molestiae?...",
      technologies: ["html", "react"],
    },
  ];
  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <h3 className={styles.sectionSubtitle}>Some of my recent work</h3>
      <div className={styles.projectsContainer}>
        {projects.map((project) => {
          return (
            <ProjectCard
              name={project.name}
              description={project.description}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </section>
  );
}
