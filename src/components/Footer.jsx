import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
const FooterWrapper = styled.div`
  // .social-icons {
  //   display: inline-block !important;
  //   padding-right: 15px;
  //   padding-left: 15px;
  // }
  .footer-copywright {
    text-align: center !important;
  }

  .footer-body {
    z-index: 1;
    text-align: center !important;
  }
  @media (max-width: 767px) {
    .footer-copywright {
      text-align: center !important;
    }

    .footer-body {
      text-align: center !important;
    }
  }

  .footer h3 {
    font-size: 1em;
    color: white !important;
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
  .footer-icons {
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
    padding: 0 !important;
  }
`;
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <FooterWrapper>
      <Container fluid className="footer">
        <Row className="footer-row">
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Sisay Areaya</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} </h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/sisay2405"
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={ 20} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  style={{ color: "#1d98f0" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter size={ 23}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sisay-areaya-0a983b6b/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={ 20}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram size={ 20}/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
