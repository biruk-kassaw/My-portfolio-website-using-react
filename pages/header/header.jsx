import React from 'react';

import './header.scss';

import { motion } from 'framer-motion';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Biruk</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Full Stack Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img
        src="https://github.com/biruk-kassaw/Personal-React-Portfolio/blob/main/me-removebg.png?raw=true"
        alt="profile_bg"
      />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src="https://raw.githubusercontent.com/biruk-kassaw/Personal-React-Portfolio/44a953e8b78412890f5625fc31d0a879edbe5eb4/circle.svg"
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[
        'https://github.com/biruk-kassaw/Personal-React-Portfolio/blob/main/node.png?raw=true',
        'https://github.com/biruk-kassaw/Personal-React-Portfolio/blob/main/react.png?raw=true',
        'https://github.com/biruk-kassaw/Personal-React-Portfolio/blob/main/python.png?raw=true',
      ].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default Header;
