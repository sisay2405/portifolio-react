import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
const ProjectCards = ({ imgPath, title, description, ghLink, demoLink }) => {
	return (
		<ProjectCardsWrapper>
			<motion.div>
				<div className="tilt">
					<div className="tilt-card">
						<img src={imgPath} alt={title} />
					</div>
					<div className="project-title">
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
					<div className="button">
						{demoLink.length > 0 ? (
							<button onClick={() => window.open(demoLink, "_black")}>
								Demo
							</button>
						) : (
							""
						)}
						{ghLink.length > 0 ? (
							<button onClick={() => window.open(ghLink, "_black")}>
								View Code
							</button>
						) : (
							""
						)}
					</div>
				</div>
			</motion.div>
			;
		</ProjectCardsWrapper>
	);
};

const ProjectCardsWrapper = styled.div`
	width: 100%;
	.tilt {
		background-color: #151030;
		border-radius: 20px;
		padding: 20px;
		width: 350px;
		.tilt-card {
			height: 230px;
			width: 100%;
			border-radius: 10px;
			img {
				width: 100%;
				height: 100%;
				border-radius: 10px;
				object-fit: cover;
			}
		}
		.project-title {
			margin-top: 20px;
			h3 {
				color: white;
				font-weight: 600;
				font-size: 24px;
			}
			p {
				margin: 16px;
				color: #aaa6c3;
				font-size: 14px;
				font-weight: 500;
			}
		}
		:hover {
			transform: scale(1.02);
			border: 1px solid gray;
		}
		.button {
			width: 70%;
			margin-top: 50px;
			display: flex;
			justify-content: space-between;
			button {
				padding: 3px 10px;
				border-radius: 8px;
				font-weight: 600;
			}
		}
	}
`;
export default ProjectCards;
