import About from "../components/About";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Routers from "../Routes/Routers";
const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <About />
      <div>
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
