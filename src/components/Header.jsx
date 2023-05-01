import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { setNavColor, setExpanded } from "../store/reducer";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/sisay.jpg";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: rgb(10, 4, 22);
  display: flex;
  align-items: center;
  z-index: 2;
`;

function NavBar() {
  const dispatch = useDispatch();
  const { expand, navColor } = useSelector(
    (state) => state.header,
    shallowEqual
  );

  function scrollHandler() {
    if (window.scrollY >= 200) {
      dispatch(setNavColor(true));
    } else {
      dispatch(setNavColor(false));
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <HeaderWrapper id="home">
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColor ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img
              src={logo}
              style={{
                borderRadius: "50%",
                height: 50,
                width: 50,
                objectFit: "cover",
                border: "2px solid ##804dee",
              }}
              className="logo"
              alt="brand"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              dispatch(setExpanded(expand ? false : "expanded"));
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto " defaultActiveKey="#home">
              <Nav.Item>
                <a
                  href="#home"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </a>
              </Nav.Item>

              <Nav.Item>
                <a
                  href="#about"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </a>
              </Nav.Item>
              <Nav.Item>
                <a
                  href="#contact"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> Contact
                </a>
              </Nav.Item>
              <Nav.Item>
                <a
                  href="#project"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </a>
              </Nav.Item>

              <Nav.Item>
                <a
                  href="#resume"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </a>
                </Nav.Item>
              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/sisay2405/portifolio-react"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderWrapper>
  );
}

export default NavBar;