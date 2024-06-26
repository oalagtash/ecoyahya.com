import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import loadable from '@loadable/component';
import PortfolioContext from '../../context/context';

const YoutubeBackground = loadable(() => import('react-youtube-background'));

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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

  const playerOptions = {
    mute: 1,
    autoplay: 1,
  };

  return (
    <YoutubeBackground videoId="tf0gygmdeSs" playerOptions={playerOptions}>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || 'Hi, my name is'}{' '}
              <br/>
              <span className="text-color-main">{name || 'Your Name'}</span>
              {subtitle || "I'm the Unknown Developer."}
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="Our services" smooth duration={1000}>
                  {cta || 'Know more'}

                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      </section>
    </YoutubeBackground>
  );
};

export default Header;
