import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/frank.jpg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={16} lg={8}>
          <div className="hero-info">
            <h1 className="weight800 font60">Frank Macwan</h1>
            <h3 className="weight800 font40">
              Full Stack / Software Developer
            </h3>
            <p className="font20">
              I am passionate developer with keen interest and skills in both front end and back end development.
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={4} lg={4}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
