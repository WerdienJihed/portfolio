import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <Layout>
      <Main />
      <Projects />
    </Layout>
  );
}

export function Head() {
  return <title>Werdien Jihed - Portfolio | Home </title>;
}
