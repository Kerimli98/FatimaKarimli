import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const [end, setEnd] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setEnd(latest);
    });
  }, []);
  console.log(end);
  return (
    <section className="about">
      {end > 0 ? (
        <a href="#about">
          <div className="start">
            <span>About</span>
          </div>
        </a>
      ) : null}
      <motion.div className="progress-bar" style={{ scaleY: scaleX }} />
      {end > 0.4 ? (
        <a href="#portfolio">
          <div className="middle">
            <span>Portfolio</span>
          </div>
        </a>
      ) : null}
      {end > 0.95 ? (
        <a href="#contact">
          <div className="end">
            <span>Contact</span>
          </div>
        </a>
      ) : null}

      <div className="about__container" id="about">
        <div className="about__left">
          <p className="green-text mt">
            <span className="tags"> &lt;p&gt;</span>This is
            <span className="tags">&lt;&#47;p&gt;</span>
          </p>
          <h1
            className="about__name"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="tags"> &lt;h1&gt;</span>
            Fatima Karimli
            <span className="tags">&lt;&#47;h1&gt;</span>
          </h1>
          <p className="green-text mt">
            <span className="tags"> &lt;p&gt;</span>Front-end developer
            <span className="tags">&lt;&#47;p&gt;</span>
          </p>
        </div>
        <div
          className="about__right"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="scewed-tag"> &lt;&#47;&gt;</p>
          <div className="outer-circle">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="inner-circle"></div>
            <a href="/temp" download className="green-text z-top">
              &lt;Download CV&#47;&gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
