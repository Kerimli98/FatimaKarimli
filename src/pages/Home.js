import About from "../components/About";
import Header from "../components/Header";
import Slider from "../components/ProjectsSlider";
import Contact from "../components/Contact";
import ProjectsSmooth from "../components/ProjectsSmooth";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      {/* <Slider /> */}
      <ProjectsSmooth />
      <Contact />
    </>
  );
};

export default Home;
