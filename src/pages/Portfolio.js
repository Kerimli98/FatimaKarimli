import React, { useEffect, useState } from "react";
import projects from "../data";
import { Link } from "react-router-dom";
import { easeIn, easeInOut, motion } from "framer-motion";

const Portfolio = () => {
  const [category, setCategory] = useState("ALL");
  const [delayTrue, setDelayTrue] = useState(true);
  const [allProjects, setAllProjects] = useState(projects);

  useEffect(() => {
    if (category === "All") {
      setAllProjects(projects);
    }
    if (category === "React") {
      const filteredProjects = projects.filter((item) =>
        item.languages.includes("React")
      );
      setAllProjects(filteredProjects);
    }
    if (category === "Vanilla JS") {
      const filteredProjects = projects.filter((item) =>
        item.languages.includes("Vanilla JS")
      );
      setAllProjects(filteredProjects);
    }
    if (category === "HTML") {
      const filteredProjects = projects.filter((item) =>
        item.languages.includes("HTML")
      );
      setAllProjects(filteredProjects);
    }
    if (category === "CSS") {
      const filteredProjects = projects.filter((item) =>
        item.languages.includes("CSS")
      );
      setAllProjects(filteredProjects);
    }
    if (category === "SCSS") {
      const filteredProjects = projects.filter((item) =>
        item.languages.includes("SCSS")
      );
      setAllProjects(filteredProjects);
    }
    if (category === "Redux") {
      const filteredProjects = projects.filter((item) =>
        item.languages.includes("Redux")
      );
      setAllProjects(filteredProjects);
    }
    if (category === "Jquery") {
      const filteredProjects = projects.filter((item) =>
        item.languages.includes("Jquery")
      );
      setAllProjects(filteredProjects);
    }
    if (category === "Next") {
      const filteredProjects = projects.filter((item) =>
        item.languages.includes("Next")
      );
      setAllProjects(filteredProjects);
    }
    if (category === "Typescript") {
      const filteredProjects = projects.filter((item) =>
        item.languages.includes("Typescript")
      );
      setAllProjects(filteredProjects);
    }
  }, [category]);

  return (
    <div className="projects-page">
      <Link to="/">
        <button className="button button--one home-btn">
          &lt;Home&#47;&gt;
        </button>
      </Link>
      <h3>My Works</h3>
      <div className="filter-btns">
        <button
          className={category === "All" ? "btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("All");
            setDelayTrue(true);
          }}
        >
          All
        </button>
        <button
          className={category === "HTML" ? "btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("HTML");
            setDelayTrue(false);
          }}
        >
          HTML
        </button>
        <button
          className={category === "CSS" ? "btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("CSS");
            setDelayTrue(false);
          }}
        >
          CSS
        </button>
        <button
          className={category === "SCSS" ? "btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("SCSS");
            setDelayTrue(false);
          }}
        >
          SCSS
        </button>
        <button
          className={category === "Vanilla JS" ? "btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("Vanilla JS");
            setDelayTrue(false);
          }}
        >
          Vanilla JS
        </button>
        <button
          className={category === "Jquery" ? "btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("Jquery");
            setDelayTrue(false);
          }}
        >
          Jquery
        </button>
        <button
          className={category === "React" ? " btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("React");
            setDelayTrue(false);
          }}
        >
          React
        </button>
        <button
          className={category === "Redux" ? "btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("Redux");
            setDelayTrue(false);
          }}
        >
          Redux
        </button>
        <button
          className={category === "Next" ? "btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("Next");
            setDelayTrue(false);
          }}
        >
          Next
        </button>
        <button
          className={category === "Typescript" ? "btn-clicked" : "filter-btn"}
          onClick={() => {
            setCategory("Typescript");
            setDelayTrue(false);
          }}
        >
          Typescript
        </button>
      </div>
      <div className="projects">
        {allProjects.map((item, index) => {
          console.log("index:", index, "itemId:", item.id);
          return (
            <motion.div
              initial={{
                opacity: delayTrue ? 0 : 1,
                scale: delayTrue ? 1.1 : 1,
              }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: delayTrue ? item.delay : 0,
                duration: 0.4,
              }}
              className="project-border"
              key={item.id}
            >
              <div className="project">
                <img className="project__img" src={item.screenshot2} alt="" />

                <div className="overlay">
                  <div className="project-content">
                    <p className="project__title">{item.title}</p>
                    <Link to={`/projects/${item.title}`}>
                      <div className="project__btn">
                        View Project <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
