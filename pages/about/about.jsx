import React from 'react';

import './about.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <motion.div
      // whileInView={{ opacity: 1 }}
      // whileHover={{ scale: 1.1 }}
      // transition={{ duration: 0.5, type: 'tween' }}
      >
        <section id="about" className="about-mf sect-pt4 route">
          <div id="container" className="container">
            <div id="row" className="row">
              <div id="col" className="col-sm-12">
                <div id="box" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img
                              src="https://github.com/biruk-kassaw/Personal-React-Portfolio/blob/main/me-removebg.png?raw=true"
                              className="img-fluid rounded b-shadow-a"
                              alt="me"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p>
                              <span className="title-s">Name: </span>{' '}
                              <span>Biruk Kassaw</span>
                            </p>
                            <p>
                              <span className="title-s">Profile: </span>{' '}
                              <span>Full stack developer</span>
                            </p>
                            <p>
                              <span className="title-s">Email: </span>{' '}
                              <span>se.biruk.kassaw@gmail.com</span>
                            </p>
                            <p>
                              <span className="title-s">Phone: </span>{' '}
                              <span>+251 930 995 547</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">Skill</p>
                        <span>HTML</span>{' '}
                        <span className="pull-right">85%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '85%;' }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>CSS3</span>{' '}
                        <span className="pull-right">75%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '75%' }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>PHP</span> <span className="pull-right">50%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '50%' }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>JAVASCRIPT</span>{' '}
                        <span className="pull-right">90%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h2 className="head-text">
                            WHO <span>AM</span> I
                          </h2>
                        </div>
                        <p className="lead">
                          Motivated software engineer with advanced knowledge of
                          software design, development and testing. I am
                          Passionate about problem solving and web
                          development(Backend and Frontend).
                        </p>
                        <p className="lead">
                          I am a hard worker with strong interpersonal skills,
                          experienced in working with diverse groups. I am
                          creative, open-minded and easygoing, and I enjoy
                          working with others.
                        </p>
                        <p className="lead">
                          A proven group leader , having led multiple projects
                          to completion and seeking for more opportunities to
                          grow as a software engineer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};
export default About;
