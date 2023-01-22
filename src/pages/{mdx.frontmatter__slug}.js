import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout.js";
import * as styles from "../styles/project-page.module.css";

export default function Project({ data }) {
  const image = getImage(data.mdx.frontmatter.image);
  const image_alt = data.mdx.frontmatter.image_alt;
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <GatsbyImage image={image} alt={image_alt} />
        </div>
        <div className={styles.projectDescription}>
          <h2 className={styles.projectName}>{data.mdx.frontmatter.title}</h2>
          <div>{data.mdx.body}</div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        image_alt
        image {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
      body
    }
  }
`;

export function Head({ data }) {
  return <title>Werdien Jihed | {data.mdx.frontmatter.title}</title>;
}
