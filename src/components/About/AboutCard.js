import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sisay Areaya </span>
            from <span className="purple">Jacksonville, Florida</span>
            <br />I am a Full Stack Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: " #f0aa70" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Sisay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
