import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export function Head() {
  return <title>Werdien Jihed - Portfolio | Home </title>;
}
