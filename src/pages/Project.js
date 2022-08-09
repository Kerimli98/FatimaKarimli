import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  const [updateScreen2, setUpdateScreen2] = useState(
    window.innerWidth > 556 ? true : false
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) {
        setUpdateScreen(true);
      } else setUpdateScreen(false);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 556) {
        setUpdateScreen2(true);
      } else setUpdateScreen2(false);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  const [index, setIndex] = useState(0);
  const languages = project.languages;

  const changeLang = () => {
    if (index < languages.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0);
    }
  };
  useEffect(() => {
    AOS.init({
      delay: 170,
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      changeLang();
    }, 1200);
    return () => clearInterval(interval);
  });

  return (
    <div className="project-detail">
      <Link to="/">
        <button className="button button--one home-btn">
          &lt;Home&#47;&gt;
        </button>
      </Link>

      <div className="project-container">
        <section className="project-brief">
          <div
            className="project-brief__left"
            data-aos="fade-right"
            data-aos-duration="800"
          >
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
          <div
            className="project-brief__right"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="inner">
              <div className="inner-figure">
                <img
                  src={
                    updateScreen2 ? project.screenshot1 : project.screenshot2
                  }
                  alt=""
                  className="inner-image"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="which-languages">
          <div
            className="languages-left"
            data-aos="zoom-in-right"
            data-aos-duration="500"
          >
            <p className="left-title">
              Which technologies
              <span className="green-text-lang"> I used</span>
            </p>
            <p className="lang-details" key={project.id}>
              <ul>
                {project.langDetails.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
            </p>
          </div>
          <div
            className="languages-right"
            data-aos="zoom-in-left"
            data-aos-duration="00"
          >
            <div className="outerr-circle"></div>
            <div className="dotted-circle">
              <p className="scewed-tag"> &lt;&#47;&gt;</p>
              <div className="outer-circle">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="inner-circle"></div>
                <p className="green-text z-top text-font">
                  &lt;
                  {languages[index]}
                  &#47;&gt;
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="project-goal">
          <p className="title" data-aos="fade-up" data-aos-duration="1000">
            Project <span className="green-text-lang"> Goal </span> and{" "}
            <span className="green-text-lang">Features</span>
          </p>

          <div
            className="goal-container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
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
