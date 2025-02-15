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
              <h3>Corporate & Brand Films</h3>
              <p>
                Bring your brand’s story to life. We create professional corporate videos that showcase your company’s mission, values, and impact. Whether it’s an about-us video, investor presentation, 
                or internal communications piece, we make sure your message is powerful and visually compelling.{' '}
                 Ideal for: Corporate profiles, internal communication, investor relations, recruitment videos, project case studies.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service_box">
              <div className="service_icon">
                <i className="fa fa-video-camera" />
              </div>
              <h3>Social Media Content Creation</h3>
              <p>
                Content that drives engagement. We craft monthly content strategies and produce high-quality videos, reels, 
                and short-form content designed to grow your brand's social presence. Our content is optimized for platforms like Instagram, TikTok, LinkedIn, Facebook, and YouTube.
                Includes:
 Monthly content calendars, Short-form videos (reels, TikToks, YouTube Shorts), Storytelling-based brand content, Product and service highlights{' '}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service_box">
              <div className="service_icon">
                <i className="fa fa-sitemap" />
              </div>
              <h3>Event Coverage & Behind-the-Scenes (BTS) Content</h3>
              <p>
                Capture the moments that matter. Whether it's a corporate event, product launch, seminar, or industry expo, we document the highlights and key moments with a cinematic touch. We also create Behind-the-Scenes (BTS) content, 
                offering audiences an inside look at your company’s culture and creative process.
                Ideal for: Conferences, networking events, product launches, team-building activities, BTS content for campaigns.{' '}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service_box">
              <div className="service_icon">
                <i className="fa fa-lightbulb-o" />
              </div>
              <h3>Testimonial & Case Study Videos </h3>
              <p>
                Turn customer success into your best marketing tool. We craft authentic testimonial videos and case studies that build trust and credibility. 
                Let your clients and team share real success stories that highlight your company’s impact.
                 Ideal for: Client testimonials, partner success stories, employee spotlight videos, industry case studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Services;
