import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { TechStack } from "../../constant";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
const TechSkills = () => {
	return (
		<Skills className="skills">
			{TechStack.map((stack, index) => {
				const Icons = stack.icon;
				return (
					<Tilt className="tilt" key={index}>
						<motion.div
							variants={fadeIn("right", "spring", index + 0.5, 0.75)}
							className="tilt-div green-pink-gradient "
						>
							<div
								options={{
									max: 45,
									scale: 1,
									speed: 450,
								}}
								className="card-tilt"
							>
								<div>{Icons}</div>
								<h3 className="">{stack.title}</h3>
							</div>
						</motion.div>
					</Tilt>
				);
			})}
		</Skills>
	);
};

const Skills = styled.div`
	margin: 90px 0px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	.tilt {
		width: 200px;
		margin: 10px;
		background-color: #151030;
		display: flex;
		height: 100px;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		margin: 30px;
		border: 1px solid gray;
		.tilt-div {
			width: 100%;
			padding: 12px 12px;
			.card-tilt {
				border-radius: 20px;

				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				min-height: 280px;
				width: 100%;
				h3 {
					margin-top: 10px;
					font-size: 20px;
				}
			}
		}
	}
`;
export default TechSkills;
