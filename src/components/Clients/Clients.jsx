import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import Title from '../Title/Title';

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <section id="clients">
      <Container>
        <Title title="Our Clients" />
        <Slider className="customer-logos" {...settings}>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com//oalagtash/ecoyahya.com/feature/content-edit/src/images/clientsLogo/Derma.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com//oalagtash/ecoyahya.com/feature/content-edit/src/images/clientsLogo/Eatalio.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com//oalagtash/ecoyahya.com/feature/content-edit/src/images/clientsLogo/GJU.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com//oalagtash/ecoyahya.com/feature/content-edit/src/images/clientsLogo/Jafco.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com//oalagtash/ecoyahya.com/feature/content-edit/src/images/clientsLogo/Prestieg.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com//oalagtash/ecoyahya.com/feature/content-edit/src/images/clientsLogo/Ruba.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com//oalagtash/ecoyahya.com/feature/content-edit/src/images/clientsLogo/Samah.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com//oalagtash/ecoyahya.com/feature/content-edit/src/images/clientsLogo/SHAMI_EYE.png"
              alt=""
            />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Clients;
