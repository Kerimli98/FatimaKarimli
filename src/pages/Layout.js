import About from "../components/About";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Slider from "../components/ProjectsSlider";
import Routers from "../Routes/Routers";
import Contact from "../components/Contact";
const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <About />
      <Slider />
      <Contact />
      <div>
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
