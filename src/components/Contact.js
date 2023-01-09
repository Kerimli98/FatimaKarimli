import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h4 className="contact__heading">
        <span className="tags positioned-top"> &lt;h4&gt;</span>
        Connect with me
        <span className="tags positioned-bottom">&lt;&#47;h4&gt;</span>
      </h4>
      <div className="contacts">
        <motion.div
          className="contact-circle linkedin"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
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
        </motion.div>
        <motion.div
          className="contact-circle github"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
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
        </motion.div>
        <motion.div
          className="contact-circle gmail"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <a href="mailto:fatimakarimly@gmail.com" className="outer-circle">
            <span>&lt;&gt;</span>
            Gmail
            <span>&lt;&#47;&gt;</span>
          </a>
          <div className="inner-circle"></div>
        </motion.div>
        <motion.div
          className="contact-circle instagram"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
