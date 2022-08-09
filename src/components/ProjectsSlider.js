import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../data";
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="slider-arrow">
        <i className="fa-solid fa-angle-left"></i>
      </div>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <div className="slider-arrow">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};
const ProjectsSlider = () => {
  useEffect(() => {
    AOS.init({
      delay: 170,
    });
    AOS.refresh();
  }, []);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const settings = {
    dots: false,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    dotsClass: "slick-dots custom-indicator",
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const sliderRef = useRef();
  const n = slideIndex + 1;
  const [animated, setAnimated] = useState(false);
  return (
    <div className="project-slider">
      <h2
        className="project-slider__heading"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="tags positioned-top"> &lt;h2&gt;</span>
        My Portfolio
        <span className="tags positioned-bottom">&lt;&#47;h2&gt;</span>
      </h2>
      <input
        onChange={(e) => sliderRef.current.slickGoTo(e.target.value)}
        value={slideIndex + 1}
        type="range"
        min={0}
        max={projects.length}
      />

      <Slider {...settings} ref={sliderRef}>
        {projects.map((item) => (
          <div key={item.id} className="project-slide">
            <Link
              data-aos="zoom-in-right"
              data-aos-duration="500"
              to={`/projects/${item.title}`}
              className="img-container"
              onMouseEnter={() => setAnimated(() => true)}
              onAnimationEnd={() => setAnimated(() => false)}
            >
              <div className="svg-box">
                <img src={item.screenshot3} alt="" />
              </div>

              <div className={animated ? "circle animated1" : ""}></div>
              <div className={animated ? " circle animated2" : ""}></div>
              <div className={animated ? "circle animated3" : ""}></div>
              <div className={animated ? "circle animated4" : ""}></div>
            </Link>

            <div
              className="slide-content"
              data-aos="zoom-in-left"
              data-aos-duration="500"
            >
              <Link to={`/projects/${item.title}`} className="slide-title">
                {item.title}
              </Link>
              <p className="slide-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="progressbar">
        {[...Array(n)].map((elem, i) => (
          <div key={i} className="progress"></div>
        ))}
      </div>
      <Link to="/projects" className="btn-slider">
        <button style={{ letterSpacing: "0" }} className="button button--one ">
          &lt; See All &#47;&gt;
        </button>
      </Link>
    </div>
  );
};

export default ProjectsSlider;
