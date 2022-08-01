import React from 'react';
import skills from '../../constants/skills';
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
                              <span>
                                <a href="mailto:se.biruk.kassaw@gmail.com">
                                  se.biruk.kassaw@gmail.com
                                </a>
                              </span>
                            </p>
                            <p>
                              <span className="title-s">Phone: </span>{' '}
                              <span>
                                <a href="tel:+251930995547">+251 930 995 547</a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">SKILLS</p>
                        <motion.div className="app__skills-list">
                          {skills.map((skill) => (
                            <motion.div
                              whileInView={{ opacity: [0, 1] }}
                              transition={{ duration: 0.5 }}
                              className="app__skills-item app__flex"
                              key={skill.name}
                            >
                              <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                              >
                                <img src={skill.icon} alt={skill.name} />
                              </div>
                              <p className="p-text">{skill.name}</p>
                            </motion.div>
                          ))}
                        </motion.div>
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
