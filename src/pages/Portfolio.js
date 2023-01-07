import React, { useEffect, useState } from "react";
// import projects from "../data";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Portfolio = () => {
  const [category, setCategory] = useState("ALL");
  // const [allProjects, setAllProjects] = useState(projects);
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  window.addEventListener("load", AOS.refresh);

  // useEffect(() => {
  //   if (category === "All") {
  //     setAllProjects(projects);
  //   }
  //   if (category === "React") {
  //     const filteredProjects = projects.filter((item) =>
  //       item.languages.includes("React")
  //     );
  //     setAllProjects(filteredProjects);
  //   }
  //   if (category === "Vanilla JS") {
  //     const filteredProjects = projects.filter((item) =>
  //       item.languages.includes("Vanilla JS")
  //     );
  //     setAllProjects(filteredProjects);
  //   }
  //   if (category === "HTML") {
  //     const filteredProjects = projects.filter((item) =>
  //       item.languages.includes("HTML")
  //     );
  //     setAllProjects(filteredProjects);
  //   }
  //   if (category === "CSS") {
  //     const filteredProjects = projects.filter((item) =>
  //       item.languages.includes("CSS")
  //     );
  //     setAllProjects(filteredProjects);
  //   }
  //   if (category === "SCSS") {
  //     const filteredProjects = projects.filter((item) =>
  //       item.languages.includes("SCSS")
  //     );
  //     setAllProjects(filteredProjects);
  //   }
  //   if (category === "Redux") {
  //     const filteredProjects = projects.filter((item) =>
  //       item.languages.includes("Redux")
  //     );
  //     setAllProjects(filteredProjects);
  //   }
  //   if (category === "Jquery") {
  //     const filteredProjects = projects.filter((item) =>
  //       item.languages.includes("Jquery")
  //     );
  //     setAllProjects(filteredProjects);
  //   }
  //   if (category === "Next") {
  //     const filteredProjects = projects.filter((item) =>
  //       item.languages.includes("Next")
  //     );
  //     setAllProjects(filteredProjects);
  //   }
  //   if (category === "Typescript") {
  //     const filteredProjects = projects.filter((item) =>
  //       item.languages.includes("Typescript")
  //     );
  //     setAllProjects(filteredProjects);
  //   }
  // }, [category]);

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
          className={category === "Jquery" ? "btn-clicked" : "filter-btn"}
          onClick={() => setCategory("Jquery")}
        >
          Jquery
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
        <button
          className={category === "Next" ? "btn-clicked" : "filter-btn"}
          onClick={() => setCategory("Next")}
        >
          Next
        </button>
        <button
          className={category === "Typescript" ? "btn-clicked" : "filter-btn"}
          onClick={() => setCategory("Typescript")}
        >
          Typescript
        </button>
      </div>
      <div className="projects">
        {/* {allProjects.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay="100"
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
          </div>
        ))} */}
        <p style={{ color: "white", fontSize: "50px", marginTop: "50px" }}>
          under construction
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
