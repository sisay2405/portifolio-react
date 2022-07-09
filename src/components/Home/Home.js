import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import myImage from '../../Assets/home-bg.jpg';
import Home2 from "./Home2";
import Type from "./Type";
// import Particle1 from "./Particle";
import styled from "styled-components";

const HomeWrapper = styled.div`
 .home-section {
  position: relative;
  z-index: -1;
  background-image: var(--image-gradient), url(${myImage});
  background-position: top center;
  background-repeat: no-repeat;
  padding-bottom: 30px;
  padding-top: 30px;
} 

.home-content {
  padding: 9rem 0 2rem !important;
  color: whitesmoke;
  text-align: left;
}
.home-header {
  padding-top: 80px !important;
}
.heading {
  font-size: 2.4em !important;
  padding-left: 50px !important;
}
main-name {
  color: #f8d95f;
}
 
`;


function Home() {
  return (
  <HomeWrapper>
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle1 /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏽
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SISAY AREAYA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  </HomeWrapper >
  );
}

export default Home;
