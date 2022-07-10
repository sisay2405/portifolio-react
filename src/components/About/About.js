import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import styled from "styled-components";


const Aboutwrapper = styled.section`
 position: relative ;
  padding-top: 150px ;
  padding-bottom: 30px ;
  background-image: var(--section-background-color) ;
  color: white ;
  .project-heading {
    // color: white;
    // font-size: 2.3em ;
    // font-weight: 500 ;
    // padding-top: 10px ;
  }
`
function About() {
  return (
    <Aboutwrapper>
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 >
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 >
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
    </Aboutwrapper>
  );

}

export default About;
