import AboutSection from "../../components/about/AboutSection";
import Motto from "../../components/about/Motto";
import History from "../../components/about/History";
import Objectives from "../../components/about/Objectives";
import Activities from "../../components/about/Activities";
import Team from "../../components/about/Team";

const About = () => {
  return (
    <div className="space-y-8">
      <AboutSection />
      <Motto />
      <History />
      <Objectives />
      <Activities />
      <Team />
    </div>
  );
};

export default About;