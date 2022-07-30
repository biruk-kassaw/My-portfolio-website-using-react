import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './services.scss';
// import { urlFor, client } from '../../client';

const Services = () => {
  const abouts = [
    {
      imgUrl:
        'https://github.com/biruk-kassaw/Personal-React-Portfolio/blob/main/Front-end-Development.jpeg?raw=true',
      title: 'FRONT END DEVELOPMENT',
      description:
        'I design and code Beautiful, Fast, Responsive, Intuitive and Dynamic websites from scratch, and enjoy bringing ideas to life in the browser.',
    },
    {
      imgUrl:
        'https://github.com/biruk-kassaw/Personal-React-Portfolio/blob/main/backend.jpg?raw=true',
      title: 'BACK END DEVELOPMENT',
      description:
        'I make full stack web apps that are secure, maintainable and scalable using the latest web technologies.',
    },
    {
      imgUrl:
        'https://github.com/biruk-kassaw/Personal-React-Portfolio/blob/main/mobile.png?raw=true',
      title: 'MOBILE APP DEVELOPMENT',
      description:
        'I make apps that are well architected, robust, maintainable and of course testable.',
    },
    // {
    //   imgUrl:
    //     'https://github.com/biruk-kassaw/Personal-React-Portfolio/blob/main/Front-end-Development.jpeg?raw=true',
    //   title: 'FRONT END DEVELOPER',
    //   description:
    //     'I design and code Beautiful, Fast, Responsive, Intuitive and Dynamic websites from scratch, and enjoy bringing ideas to life in the browser.',
    // },
  ];

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Services;
