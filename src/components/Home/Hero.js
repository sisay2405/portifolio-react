import React from "react";
import styled from "styled-components";
import HeroImage from "../../Assets/Hero.png";
import Type from "./Type";
const Hero = () => {
	return (
		<HeroWrapper>
			<div className="paddingX inner" id="hero">
				<div className="circle">
					<div className="w-1 sm:h-80 h-40 line violet-gradient"></div>
				</div>
				<div className="text">
					<h1 className="heroHeadText">
						Hi,I'm &nbsp;
						<span className="text-[#915eff]">Sisay</span>
					</h1>
					<Type />
				</div>
			</div>
			<div className="HeroImage">
				<img src={HeroImage} alt="heroimage" />
			</div>
		</HeroWrapper>
	);
};
export default Hero;

const HeroWrapper = styled.section`
	width: 90%;
	height: 100vh;
	margin: auto;
	display: flex;
	align-items: center;

	position: relative;
	.inner {
		display: flex;
		flex: grow;
		align-items: start;
		max-width: 1280px;
		margin: 0 auto;
		position: absolute;
		top: 150px;
		gap: 20px;
		.circle {
			width: 20px;
			height: 20px;
			background-color: #915eff;
			border-radius: 50%;
			.line {
				width: 4px;
				height: 320px;
			}
		}
	}
	.text {
		h1 {
			font-weight: 600;
			font-size: 80px;
			color: white;
			span {
				color: #915eff;
			}
		}
	}
	.HeroImage {
		position: absolute;
		right: 0;
		top: 20%;
	}
`;
