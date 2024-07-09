import YouTube from 'react-youtube';
import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-awesome-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const opts = {
    height: '390', // Set a fixed height to maintain aspect ratio
    width: '100%', // Responsive width
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
          <Row>
            {projects.map(project => {
              const { title, info, info2, videoId } = project;
              return (
                <Col md={6} key={project.id} className="mb-4">
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
                        <p>{info || ''}</p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                    </div>
                    <div className="thumbnail rounded">
                      <YouTube opts={opts} videoId={videoId} />
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
