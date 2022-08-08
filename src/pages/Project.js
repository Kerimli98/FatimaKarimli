import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import projects from "../data";
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="slider-arrow-left"></div>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <div className="slider-arrow-right"></div>
    </div>
  );
};
const Project = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const sliderRef = useRef();

  const settings = {
    dots: false,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };
  const { id } = useParams();
  const project = projects.find((project) => project.title === id);
  const [updateScreen, setUpdateScreen] = useState(
    window.innerWidth > 820 ? true : false
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) {
        setUpdateScreen(true);
      } else setUpdateScreen(false);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  //   useEffect(() => {
  //     window.addEventListener("resize", () => {
  //       if (window.innerWidth < 820) {
  //         setUpdateScreen(false);
  //       }
  //     });
  //     return () => window.removeEventListener("resize", () => {});
  //   }, []);

  return (
    <div className="project-detail">
      <Link to="/">
        <div className="backBtn">
          <span className="line tLine"></span>
          <span className="line mLine"></span>
          <span className="label">Home</span>
          <span className="line bLine"></span>
        </div>
      </Link>

      <div className="project-container">
        <section className="project-brief">
          <div className="project-brief__left">
            <p className="project-title">{project.title}</p>
            <p className="project-desc">{project.desc}</p>
            <a
              href={project.websitelink}
              rel="noreferrer"
              target="_black"
              className="go-to-btn"
            >
              Go to website
            </a>
          </div>
          <div className="project-brief__right">
            <div className="inner">
              <div className="inner-figure">
                <img
                  src="/assets/images/eazypizz.png"
                  alt=""
                  className="inner-image"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="which-languages">
          <div className="languages-left">
            <p className="left-title">
              Which languages <span className="green-text-lang"> I used</span>{" "}
            </p>
            <p className="lang-details" key={project.id}>
              {project.desc}
            </p>
          </div>
          <div className="languages-right">
            <div className="outerr-circle"></div>
            <div className="dotted-circle">
              <p className="scewed-tag"> &lt;&#47;&gt;</p>
              <div className="outer-circle">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="inner-circle"></div>
                <p className="green-text z-top text-font">
                  {" "}
                  &lt; HTML &#47;&gt;
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="project-goal">
          <p className="title">
            Project <span className="green-text-lang"> Goal</span>
          </p>

          <div className="goal-container">
            {updateScreen ? (
              <>
                <div className="hexagon">
                  <div className="inner-hexagon">
                    <div className="inner-inner-hex">
                      <div className="deep-hex">{slideIndex + 1}</div>
                    </div>
                  </div>
                </div>
                <div className="big-chip-before"></div>

                <div className="big-chip">
                  <div className="big-chip-inner">
                    <Slider {...settings} ref={sliderRef}>
                      {project.goal.map((goal) => (
                        <div key={goal.goalName} className="goal-slide">
                          <p className="goal-name">{goal.goalName}</p>
                          <p className="goal-desc">{goal.goalDesc}</p>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="big-chip-after"></div>
              </>
            ) : (
              <>
                {project.goal.map((goal) => (
                  <div className="goal" key={goal.id}>
                    <div className="hexagon">
                      <div className="inner-hexagon">
                        <div className="inner-inner-hex">
                          <div className="deep-hex">{goal.id}</div>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content">
                      <div className="goal-title">{goal.goalName}</div>
                      <div className="goal-desc">{goal.goalDesc}</div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
