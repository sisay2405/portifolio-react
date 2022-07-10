import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import styled from "styled-components";

const GithubWrpper = styled.div`
justify-conetent: center,
padding-bottom: 10px"
h1{
  padding-bottom: 20px
}
`
function Github() {
  return (
    <GithubWrpper>
    
    <Row >
      <h1 style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
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
