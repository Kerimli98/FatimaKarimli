import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Portfolio from "../pages/Portfolio";
import Project from "../pages/Project";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Portfolio />} />
      <Route path="/projects/:id" element={<Project />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
