import React from "react";
import "../styles/global.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
