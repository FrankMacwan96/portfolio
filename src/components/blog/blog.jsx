import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "./blog.scss";
import "swiper/css/swiper.css";
// Assets
import animenews from "../../assets/blog/animenews.png";
import astutebell from "../../assets/blog/astutebell.jpg";
import bookstore from "../../assets/blog/bookstore.png";
import chatterpi from "../../assets/blog/chatterpi.jpg";
import fastfind from "../../assets/blog/fastfind.jpg";
import notes from "../../assets/blog/Notes.png";
import tictactoe from "../../assets/blog/TicTacToe.png";
import spfx from "../../assets/blog/spfx.jpg";
// Components
import Title from "../ui-components/title/title";
import BlogBox from "./blogBox";

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: notes,
        id: "1",
        title: "Notes",
        description: "A simple web application for taking notes through REST API developed with ExpressJS. Front-end in React.",
        date: "ReactJS | SCSS | NodeJS | ExpressJS | MongoDB",
        url: "https://github.com/FrankMacwan96/Notes",
      },
      {
        image: animenews,
        id: "2",
        title: "Anime News",
        description: "Web Application for viewing blogs of Animated TV series and youtube videos.",
        date: "ReactJS | SCSS | NodeJS | Firebase | JSON",
        url: "https://github.com/FrankMacwan96/AnimeNews",
      },
      {
        image: tictactoe,
        id: "3",
        title: "Tic Tac Toe Game",
        description: "A Tic Tac Toe game in Angular 8.0 ",
        date: "Angular 8 | SCSS",
        url:"https://github.com/FrankMacwan96/Tic-Tac-Toe",
      },
      {
        image: bookstore,
        id: "4",
        title: "The Bookstore",
        description: "An online bookstore through which we can buy and lent books, create user account and manage your own library.",
        date: "Python | Django | HTML | CSS | Bootstrap",
        url:"https://github.com/FrankMacwan96/The_Bookstore",
      },
      {
        image: spfx,
        id: "5",
        title: "SharePoint Webpart",
        description: "A webpart developed using SPFx framework and react. It is a content viewer app in SharePoint for adding modifieable text, images and video." ,
        date: "SPFx framework | ReactJS",
        url:"https://github.com/FrankMacwan96/React-webpart-for-SharePoint",
      },
      {
        image: fastfind,
        id: "6",
        title: "Fast Find",
        description: "A web search engine which index 1500 pages and ranks them according to keyword search",
        date: "JAVA | AngularJS",
        url:"https://github.com/FrankMacwan96/Fast-Find",
      },
      {
        image: chatterpi,
        id: "7",
        title: "Chatter PI",
        description: "An IOT project in which client server communicates via text and audio message",
        date: "Python | Flask | HTML | CSS | Bootstrap | Raspberry pi 3",
        url:"https://github.com/FrankMacwan96/Chatter-Pi",
      },{
        image: astutebell,
        id: "8",
        title: "Astute Bell",
        description: "A security system which detects and captures picture of person, open lock through face recognition",
        date: "Python | Flask | HTML | CSS | Numpy | Bootstrap | Raspberry pi 3",
        url:"https://github.com/FrankMacwan96/AstuteBell",
      },
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <BlogBox article={story} />
        </div>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      pagination:{
        el:'.swiper-pagination',
      },
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="blog" id="blog">
        <div className="wrapper">
          <Title title="Projects" />
          <p className="font35">
            My personal and academic projects.
          </p>
          <div className="padding30">
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
