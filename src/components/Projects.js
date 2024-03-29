import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectCard from "./Project-card.js";
import * as styles from "../styles/projects.module.css";
import SectionHeader from "./SectionHeader.js";

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            slug
            description
            technologies
            image_alt
            image {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allMdx.nodes.map((item) => ({
    id: item.id,
    title: item.frontmatter.title,
    slug: item.frontmatter.slug,
    description: item.frontmatter.description,
    image: item.frontmatter.image,
    image_alt: item.frontmatter.image_alt,
    technologies: item.frontmatter.technologies.split(","),
  }));

  return (
    <section className={styles.container} id="projects-section">
      <SectionHeader
        title="Projects"
        subtitle="Some of my recent work"
        switchColors={true}
      />
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
}
