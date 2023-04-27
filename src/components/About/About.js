import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import styled from "styled-components";
import SubHeader from "../SubHeader";
import TechSkills from "./TechSkills";
const Aboutwrapper = styled.section`
	position: relative;
	padding-top: 150px;
	padding-bottom: 30px;
	background-image: var(--section-background-color);
	color: white;
	.project-heading {
		color: white;
		font-size: 2.3em;
		font-weight: 500;
		padding-top: 10px;
	}
`;
function About() {
	return (
		<Aboutwrapper>
			<Container fluid className="about-section" id="about">
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
							<SubHeader subHeader="About Me" />
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
					<SubHeader subHeader="Professional Skillset" />
					<TechSkills />
					<Github />
					<Toolstack />
				</Container>
			</Container>
		</Aboutwrapper>
	);
}

export default About;
