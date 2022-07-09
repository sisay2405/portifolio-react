import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myImage from '../../Assets/home-bg.jpg';
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";

const HomeTwoWrapper = styled.div`
position: relative;
z-index: -1;
background-image: var(--image-gradient), url(${myImage});
background-position: top center;
background-repeat: no-repeat;
padding-bottom: 30px;
padding-top: 30px;
.home-about-section {
  position: relative;
  padding-bottom: 70px !important;
  padding-top: 70px !important;
}
.home-about-description {
  color: white !important;
  padding-top: 100px !important;
  padding-bottom: 20px !important;
  text-align: center;
}
.home-about-body {
  padding-top: 50px;
  font-size: 1.2em !important;
  text-align: left;
}
.home-about-social {
  text-align: center !important;
  padding-top: 25px;
  color: white !important;
}
.home-about-social-links {
  justify-content: center !important;
  padding-top: 15px !important;
  display: inline-block !important;
  position: relative !important;
  padding-inline-start: 0 !important;
} 
.home-social-icons {
  position: relative !important;
  display: inline-block !important;
  width: 40px !important;
  height: 40px !important;
  text-align: center !important;
  font-size: 1.2em !important;
  line-height: 2em !important;
  background: rgba(255, 255, 255, 0.972) !important;
  border-radius: 50% !important;
  transition: 0.5s !important;
}

.home-social-icons::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #de6c25;
  transition: 0.5s;
  transform: scale(0.9);
  z-index: -1;
}

.home-social-icons:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #de6c25;
}

.home-social-icons:hover {
  color: #de6c25;
  box-shadow: 0 0 5px #de6c25;
  text-shadow: 0 0 2px #de6c25;
}


.icon-colour {
  color: #de6c25 !important;
}
`;

function Home2() {
  return (
    <HomeTwoWrapper>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am  classics like
              <i>
                <b className="purple"> Javascript, React . </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sisay2405"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </HomeTwoWrapper>
  );
}
export default Home2;
