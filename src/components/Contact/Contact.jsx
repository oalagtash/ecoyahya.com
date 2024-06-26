import React, { useContext } from 'react';
import Fade from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, email, phone } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta || 'Want to work with us? Awesome!'}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : ''}
            >
              {email}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={phone ? `tel:${phone}` : ''}
            >
              {phone}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
