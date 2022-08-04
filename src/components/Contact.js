import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__line"></div>
      <h4 className="contact__heading">
        <span className="tags positioned-top"> &lt;h4&gt;</span>
        Connect with me
        <span className="tags positioned-bottom">&lt;&#47;h4&gt;</span>
      </h4>
      <div className="contacts">
        <div className="contact-circle linkedin">
          <div className="outer-circle">
            <span>&lt;&gt;</span>
            Linkedin
            <span>&lt;&#47;&gt;</span>
          </div>
          <div className="inner-circle"></div>
        </div>
        <div className="contact-circle github">
          <div className="outer-circle">
            <span>&lt;&gt;</span>
            Github
            <span>&lt;&#47;&gt;</span>
          </div>
          <div className="inner-circle"></div>
        </div>
        <div className="contact-circle gmail">
          <div className="outer-circle">
            <span>&lt;&gt;</span>
            Gmail
            <span>&lt;&#47;&gt;</span>
          </div>
          <div className="inner-circle"></div>
        </div>
        <div className="contact-circle instagram">
          <div className="outer-circle">
            <span>&lt;&gt;</span>
            Instagram
            <span>&lt;&#47;&gt;</span>
          </div>
          <div className="inner-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
