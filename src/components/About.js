import React, { useEffect, useState } from "react";
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
  return (
    <section className="about">
      {/* {end > 0 ? (
        <a href="#about">
          <div className="start">
            <span>About</span>
          </div>
        </a>
      ) : null}
      <motion.div className="progress-bar" style={{ scaleY: scaleX }} />
      {end > 0.09 ? (
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
      ) : null} */}

      <div className="about__container" id="about">
        <div className="about__left">
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.7 }}
            className="green-text mt"
          >
            <span className="tags"> &lt;p&gt;</span>This is
            <span className="tags">&lt;&#47;p&gt;</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="about__name"
          >
            <span className="tags"> &lt;h1&gt;</span>
            Fatima Karimli
            <span className="tags">&lt;&#47;h1&gt;</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="green-text mt"
          >
            <span className="tags"> &lt;p&gt;</span>Front-end developer
            <span className="tags">&lt;&#47;p&gt;</span>
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 170 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="about__right"
        >
          <p className="scewed-tag"> &lt;&#47;&gt;</p>
          <div className="outer-circle">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="inner-circle"></div>
            <a
              href="/assets/FatimaKarimli.pdf"
              download
              className="green-text z-top"
            >
              &lt;Download CV&#47;&gt;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
