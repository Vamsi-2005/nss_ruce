import Hero from "../../components/home/Hero";
import Stats from "../../components/home/Stats";
import Objectives from "../../components/home/Objectives";
import FeatureCards from "../../components/home/FeatureCards";
import CTA from "../../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Objectives />
      <FeatureCards />
      <CTA />
    </>
  );
};

export default Home;