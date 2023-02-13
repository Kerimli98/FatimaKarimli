import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import projects from "../data";
import { Link } from "react-router-dom";

const ProjectsSmooth = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0.19, 0.8],
    [0.19, -scrollRange + viewportW]
  );

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <div className="scroll-container">
        <h2 className="scroll-container__heading">
          <span className="tag positioned-top"> &lt;h2&gt;</span>
          My Portfolio
          <span className="tag positioned-bottom">&lt;&#47;h2&gt;</span>
        </h2>
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="thumbnails">
            {projects.slice(0, 5).map((item) => (
              <div key={item.id} className="project-border ">
                <div className="project">
                  <img className="project__img" src={item.screenshot2} alt="" />

                  <div className="overlay">
                    <div className="project-content">
                      <p className="project__title">{item.title}</p>
                      <Link to={`/projects/${item.title}`}>
                        <div className="project__btn">
                          View Project
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        <Link to="/projects" className="btn-slider">
          <button
            style={{ letterSpacing: "0" }}
            className="button button--one "
          >
            &lt; See All &#47;&gt;
          </button>
        </Link>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  );
};

export default ProjectsSmooth;
