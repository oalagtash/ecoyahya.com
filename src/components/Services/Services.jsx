import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Services = () => {
  return (
    <section id="services">
      <Container>
        <div className="services-wrapper">
          <Title title="Services" />
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="service_box">
                <div className="service_icon">
                  <i className="fa fa-code"></i>
                </div>
                <h3>Developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Deleniti, ducimus Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service_box">
                <div className="service_icon">
                  <i className="fa fa-weibo"></i>
                </div>
                <h3>Web</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Deleniti, ducimus Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service_box">
                <div className="service_icon">
                  <i className="fa fa-apple"></i>
                </div>
                <h3>Designer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Deleniti, ducimus Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service_box">
                <div className="service_icon">
                  <i className="fa fa-sort-alpha-desc"></i>
                </div>
                <h3>UI Designer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Deleniti, ducimus Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
