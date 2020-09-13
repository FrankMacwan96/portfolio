import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";


const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT MYSELF." />
      <Row>
        <Col >
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
