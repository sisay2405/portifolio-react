import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import SubHeader from "../SubHeader";

const GithubWrpper = styled.div`
	margin: 120px 0px;
	justify-content: center;
	padding-bottom: 10px;
	h1 {
		padding-bottom: 20px;
	}
`;
function Github() {
	return (
		<GithubWrpper>
			<Row>
				<h1 style={{ paddingBottom: "20px" }}>
					<SubHeader subHeader="Days Code" />
				</h1>
				<GitHubCalendar
					username="sisay2405"
					blockSize={14}
					blockMargin={7}
					color="#74e12b"
					fontSize={16}
				/>
			</Row>
		</GithubWrpper>
	);
}

export default Github;
