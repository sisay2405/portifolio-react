import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { setNavColor } from "../store/headerSlice";
import { setExpanded } from "../store/headerSlice";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/sisay.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
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
`;
function NavBar() {
  const dispatch = useDispatch();
  const { expand, navColor } = useSelector(
    (state) => state.search,
    shallowEqual
  );
  function scrollHandler() {
    if (window.scrollY >= 20) {
      dispatch(setNavColor(true));
    } else {
      dispatch(setNavColor(true));
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <HeaderWrapper className="footer">
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
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
                height: 50,
                width: 60,
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
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => dispatch(setExpanded(false))}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
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
