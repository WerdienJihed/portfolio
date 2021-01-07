import { LandingPage } from "./landingPage/LandingPage";
import { Services } from "./services/Services";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Footer } from "./footer/Footer";
export function Home() {
  return (
    <div>
      <LandingPage />
      <Services />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
