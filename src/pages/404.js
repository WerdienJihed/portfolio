import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import * as styles from "../styles/404.module.css";
export default function NotFound() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>404</h1>
          <h2>Page does't exist</h2>
          <Link to="/">
            <button className={styles.button}>
              <FontAwesomeIcon icon={faHandPointLeft} className={styles.icon} />
              <span>Back home</span>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return <title>Werdien Jihed - Portfolio | 404 </title>;
}
