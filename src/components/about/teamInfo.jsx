import React from "react";
// SCSS
import "./teamInfo.scss";

import pdf from "../../assets/about/Frank_Macwan.pdf"

const about = () => (
  <div className="team__info flex-center">
    <div>
      
      <p className="font12 weight500">
      
      I am graduate student from University of Windsor, finished Masters of Applied Computing in August 2020 with 3.9 GPA. I have 8 months of proffesional experience as Web Software Developer
      at BlackBeryy Ltd. 

      I am a passionate developer with an inquisitive and explorative attitude towards the state-of-the art-technologies which led to a continuous learning process and through which I have acquired knowledge and experience in the field of Software Development.

      I have completed over 10 projects with hands-on experience in technologies like ReactJS, NodeJS, Python, Django, SQL, HTML, CSS, Sass, JavaScript, Flask, MongoDB, ExpressJS, PHP, JSON, REST API, OAuth 2.0 and SPFx framework. Effective communicator and Team Player, always finding new approaches for solutions.

      </p>
      <a className="link font35" href={pdf} target="_blank">Resume</a>
    </div>
  </div>
);

export default about;
