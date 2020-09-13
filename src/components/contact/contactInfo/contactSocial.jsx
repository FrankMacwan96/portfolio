
import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import li from "../../../assets/contact/linkedin.svg";
import git from "../../../assets/contact/github.svg";



const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://linkedin.com/in/frank-macwan"><img src={li} alt="LinkedIn" /></a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://github.com/FrankMacwan96"><img src={git} alt="Github" /></a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
