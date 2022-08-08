import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      delay: 170,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="contact">
      <div className="contact__line"></div>
      <h4
        className="contact__heading"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <span className="tags positioned-top"> &lt;h4&gt;</span>
        Connect with me
        <span className="tags positioned-bottom">&lt;&#47;h4&gt;</span>
      </h4>
      <div className="contacts">
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          className="contact-circle linkedin"
        >
          <a
            href="https://www.linkedin.com/in/fatimakarimli"
            target="_blank"
            rel="noreferrer"
            className="outer-circle"
          >
            <span>&lt;&gt;</span>
            Linkedin
            <span>&lt;&#47;&gt;</span>
          </a>
          <div className="inner-circle"></div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          className="contact-circle github"
        >
          <a
            href="https://github.com/Kerimli98"
            target="_blank"
            rel="noreferrer"
            className="outer-circle"
          >
            <span>&lt;&gt;</span>
            Github
            <span>&lt;&#47;&gt;</span>
          </a>
          <div className="inner-circle"></div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          className="contact-circle gmail"
        >
          <a href="mailto:fatimakarimly@gmail.com" className="outer-circle">
            <span>&lt;&gt;</span>
            Gmail
            <span>&lt;&#47;&gt;</span>
          </a>
          <div className="inner-circle"></div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          className="contact-circle instagram"
        >
          <a
            href="https://www.instagram.com/veistsin/"
            target="_blank"
            rel="noreferrer"
            className="outer-circle"
          >
            <span>&lt;&gt;</span>
            Instagram
            <span>&lt;&#47;&gt;</span>
          </a>
          <div className="inner-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
