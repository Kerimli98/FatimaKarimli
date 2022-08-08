import React, { useEffect, useState } from "react";
import projects from "../data";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [category, setCategory] = useState("ALL");
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
  }, [category]);
  const [itemId, setItemId] = useState(0);

  return (
    <div className="projects-page">
      <Link to="/">
        <button className="button button--one">
         &lt;Home&#47;&gt;
        </button>
      </Link>
      <h3>My Works</h3>
      <div className="filter-btns">
        <button
          className={category === "All" ? "btn-clicked" : "filter-btn"}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "HTML" ? "btn-clicked" : "filter-btn"}
          onClick={() => setCategory("HTML")}
        >
          HTML
        </button>

        <button
          className={category === "CSS" ? "btn-clicked" : "filter-btn"}
          onClick={() => setCategory("CSS")}
        >
          CSS
        </button>
        <button
          className={category === "SCSS" ? "btn-clicked" : "filter-btn"}
          onClick={() => setCategory("SCSS")}
        >
          SCSS
        </button>
        <button
          className={category === "Vanilla JS" ? "btn-clicked" : "filter-btn"}
          onClick={() => setCategory("Vanilla JS")}
        >
          Vanilla JS
        </button>
        <button
          className={category === "React" ? " btn-clicked" : "filter-btn"}
          onClick={() => setCategory("React")}
        >
          React
        </button>

        <button
          className={category === "Redux" ? "btn-clicked" : "filter-btn"}
          onClick={() => setCategory("Redux")}
        >
          Redux
        </button>
      </div>
      <div className="projects">
        {allProjects.map((item) => (
          <div
            className={
              item.id === itemId && window.innerWidth < 768
                ? "project-border clicked"
                : "project-border "
            }
            onClick={() => {
              setItemId(item.id);
            }}
            key={item.id}
          >
            <div
              className={
                item.id === itemId && window.innerWidth < 768
                  ? "project clicked"
                  : "project"
              }
            >
              <div className="overlay"></div>
              <img className="project__img" src={item.screenshots} alt="" />

              <div className={"project-content"}>
                <p className="project__title">{item.title}</p>
                <Link to={`/projects/${item.title}`}>
                  <div className="project__btn">
                    View Project <i className="fa-solid fa-angle-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
