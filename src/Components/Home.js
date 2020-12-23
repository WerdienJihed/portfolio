import { LandingPage } from "./LandingPage";
import { Services } from "./Services";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
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
