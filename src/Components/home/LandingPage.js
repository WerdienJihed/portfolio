import { Header } from "./header/Header";
import { Services } from "./services/Services";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Footer } from "./footer/Footer";
export function LeandingPage() {
  return (
    <div>
      <Header />
      <Services />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
