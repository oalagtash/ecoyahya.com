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
          slidesToShow: 2,
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
            <img src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image1.png" />
          </div>
          <div className="slide">
            <img src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image2.png" />
          </div>
          <div className="slide">
            <img src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image3.png" />
          </div>
          <div className="slide">
            <img src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image4.png" />
          </div>
          <div className="slide">
            <img src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image5.png" />
          </div>
          <div className="slide">
            <img src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image6.png" />
          </div>
          <div className="slide">
            <img src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image7.png" />
          </div>
          <div className="slide">
            <img src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image8.png" />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Clients;
