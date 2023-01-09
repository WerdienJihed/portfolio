import React from "react";
import "../styles/global.css";
export default function Layout({ children }) {
  return (
    <div>
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
