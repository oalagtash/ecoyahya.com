import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Services = () => (
  <section id="Our services">
    <Container>
      <div className="services-wrapper">
        <Title title="Our services" />
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="service_box">
              <div className="service_icon">
                <i className="fa fa-film" />
              </div>
              <h3>Corporate / Project Films</h3>
              <p>
                We present your business on a new level of promoting and raising awareness to your
                company / Project as a whole{' '}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service_box">
              <div className="service_icon">
                <i className="fa fa-video-camera" />
              </div>
              <h3>Commercial Videos</h3>
              <p>
                We provide your business / Product with a unique business Advertising Video for you
                to stream on multiple platforms{' '}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service_box">
              <div className="service_icon">
                <i className="fa fa-sitemap" />
              </div>
              <h3>Social Video Content</h3>
              <p>
                Is your business focused on social media? we got you, we Kraft you a monthly
                Schedule Video, Images, Daily Stories ready to post{' '}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service_box">
              <div className="service_icon">
                <i className="fa fa-lightbulb-o" />
              </div>
              <h3>Advertising & Marketing </h3>
              <p>
                let us control every thing , Creating a marketing strategy for a year, and kraft
                all the content that is needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Services;
