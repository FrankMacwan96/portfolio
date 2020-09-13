import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "swiper/css/swiper.css";
// Components
import PartnerBox from "./partnerBox";
// Assets
import react from "../../assets/partners/react.svg";
import python from "../../assets/partners/python.svg";
import nodejs from "../../assets/partners/nodejs.svg";
import mongodb from "../../assets/partners/mongodb.svg";
import php from "../../assets/partners/php.svg";
import sass from "../../assets/partners/sass.svg";
import django from "../../assets/partners/django.svg";
import flask from "../../assets/partners/flask.svg";
import cpp from "../../assets/partners/c++.svg";
import angular from "../../assets/partners/angularjs.svg";
import api from "../../assets/partners/api.svg";
import aws from "../../assets/partners/aws.svg";
import firebase from "../../assets/partners/firebase.svg";
import github from "../../assets/partners/github.svg";
import gulp from "../../assets/partners/gulp.svg";
import java from "../../assets/partners/java.svg";
import jira from "../../assets/partners/jira.svg";
import js from "../../assets/partners/js.svg";
import json from "../../assets/partners/json.svg";
import linux from "../../assets/partners/linux.svg";
import mysql from "../../assets/partners/mysql.svg";
import sharepoint from "../../assets/partners/sharepoint.svg";
import sql from "../../assets/partners/sql.svg";
import windows10 from "../../assets/partners/windows10.svg";
import docker from "../../assets/partners/docker.svg";

class MutipleSlidesPerView extends React.Component {
  state = {
    partners: [
      {
        preview: react,
        id: "1",
      },
      {
        preview: python,
        id: "2",
      },
      {
        preview: nodejs,
        id: "3",
      },
      {
        preview: mongodb,
        id: "4",
      },
      {
        preview: php,
        id: "5",
      },
      {
        preview: django,
        id: "6",
      },
      {
        preview: angular,
        id: "7",
      },
      {
        preview: aws,
        id: "8",
      },
      {
        preview: api,
        id: "9",
      },
      {
        preview: js,
        id: "10",
      },
      {
        preview: sass,
        id: "11",
      },
      {
        preview: sql,
        id: "12",
      },{
        preview: firebase,
        id: "13",
      },
      {
        preview: jira,
        id: "14",
      },
      {
        preview: flask,
        id: "15",
      },
      {
        preview: cpp,
        id: "16",
      },
      {
        preview: github,
        id: "17",
      },
      {
        preview: java,
        id: "18",
      },{
        preview: gulp,
        id: "19",
      },
      {
        preview: json,
        id: "20",
      },
      {
        preview: linux,
        id: "21",
      },
      {
        preview: mysql,
        id: "22",
      },
      {
        preview: sharepoint,
        id: "23",
      },
      {
        preview: windows10,
        id: "24",
      },{
        preview: docker,
        id: "25",
      },
    ],
  };

  render() {
    let partnersRender = null;

    if (this.state.partners) {
      partnersRender = this.state.partners.map((partner) => (
        <div key={partner.id}>
          <PartnerBox partner={partner.preview} />
        </div>
      ));
    }

    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination:{
        el:'.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    };
    return <Swiper {...params}>{partnersRender}</Swiper>;
  }
};
export default MutipleSlidesPerView;
