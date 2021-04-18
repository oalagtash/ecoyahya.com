import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import YouTube from 'react-youtube';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      loop: 1,
      controls: 1,
      modestbranding: 1,
    },
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Show Case" />
          <div className="grid">

            {projects.map((project) => {
              const { title, info, info2, videoId, id } = project;

              return (
                <container className="gallery-video">
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info || 'bla bla'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                    </div>
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <YouTube opts={opts} videoId={videoId} />
                      </div>
                    </Tilt>
                  </Fade>
                </container>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
