import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="curvy-line">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
      </div>
      <div className="about__container">
        <div className="about__left">
          <p className="green-text mt">
            <span className="tags"> &lt;p&gt;</span>This is
            <span className="tags">&lt;&#47;p&gt;</span>
          </p>
          <h1 className="about__name">
            <span className="tags"> &lt;h1&gt;</span>
            Fatima Karimli
            <span className="tags">&lt;&#47;h1&gt;</span>
          </h1>
          <p className="green-text mt">
            <span className="tags"> &lt;p&gt;</span>Front-end developer
            <span className="tags">&lt;&#47;p&gt;</span>
          </p>
        </div>
        <div className="about__right">
          <p className="scewed-tag"> &lt;&#47;&gt;</p>
          <div className="outer-circle">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="inner-circle"></div>
            <p className="green-text z-top"> &lt;Download CV&#47;&gt;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;