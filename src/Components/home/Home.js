import { Navbar } from "./navbar/Navbar";
import { Header } from "./header/Header";
import { Services } from "./services/Services";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";

export function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
