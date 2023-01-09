import React from "react";
import "../styles/global.css";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="main">{children}</main>
      <footer></footer>
    </div>
  );
}
