import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const AboutCardWrapper = styled.div`
	margin: 91px 0px;
	.quote-card-view {
		border: none;
		color: white;
		background-color: transparent;
	}
	.about-activity {
		list-style: none;
		text-align: left;
		font-size: 16px;
		padding-left: 1px;
	}
	.blockquote-footer {
		color: #f0aa70 !important;
	}
`;
function AboutCard() {
	return (
		<AboutCardWrapper>
			<Card className="quote-card-view">
				<Card.Body>
					<blockquote className="blockquote mb-0">
						<p style={{ textAlign: "justify", fontSize: "20px" }}>
							Hi Everyone, I am <span className="purple">Sisay Areaya </span>
							from <span className="purple">Jacksonville, Florida</span>
							<br />I am a Full Stack Developer
							<br />
							<br />
							Apart from coding, some other activities that I love to do!
						</p>
						<ul>
							<li className="about-activity">✅ Playing Games</li>
							<li className="about-activity">✅ Sport</li>
							<li className="about-activity">✅ Travelling</li>
						</ul>

						<p style={{ color: " #f0aa70" }}>
							"Strive to build things that make a difference!"
						</p>
						<footer className="blockquote-footer">Sisay</footer>
					</blockquote>
				</Card.Body>
			</Card>
		</AboutCardWrapper>
	);
}

export default AboutCard;
