import React from "react";
import { Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { project } from "../../constant";
import SubHeader from "../SubHeader";
import styled from "styled-components";

function Projects() {
	return (
		<div className="container" id="project">
			<ProjectWrapper>
				<SubHeader subHeader="My Recent Works" />
				<div className="project-card">
					{project.map((item, index) => (
						<Col md={4} className="project-card">
							<ProjectCard {...item} key={index} />
						</Col>
					))}
				</div>
			</ProjectWrapper>
		</div>
	);
}
const ProjectWrapper = styled.div`
	width: 100%;
	.project-card {
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		gap: 7;
	}
`;
export default Projects;
