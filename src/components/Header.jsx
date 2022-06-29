// /* eslint-disable max-len */
// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// import styled from 'styled-components';

// const HeaderWrapper = styled.header`
//   align-items: center;
//   background: black;
//   display: flex;
//   justify-content: space-between;
//   padding: 1rem 1.5rem;
//   & > a {
//     color: #fefefe;
//     text-decoration: none;
//   }
//   a,
//   a:visited {
//     color: #fefefe;
//   }
//   h1 {
//     margin: 1rem 0;
//   }
//   span {
//     padding: 0 1rem;
//   }
//   nav {
//     ul {
//       display: flex;
//       list-style-type: none;
//     }
//     li {
//       padding-left: 1.5rem;
//       &:first-child {
//         padding-left: 0;
//       }
//     }
//     a {
//       color: #fefefe;
//       font-size: 1.25rem;
//       font-weight: 700;
//       text-decoration: none;
//       &:hover {
//         color: lightgrey;
//       }
//       &.active {
//         color: #009900;
//         font-style: italic;
//         &:hover {
//           color: #009900;
//         }
//       }
//     }
//   }
// `;

// const Header = () => {
//   return (
//     <HeaderWrapper>
//       <Link to="/">
//         <h1>SA</h1>
//       </Link>
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/services">Projects</NavLink>
//           </li>
//           <li>
//             <NavLink to="/reviews">Resume</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact">Blogs</NavLink>
//           </li>
//         </ul>
//       </nav>
//     </HeaderWrapper>
//   );
// };

// export default Header;
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/sisay.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(true);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} style={{
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            height: 50,
            width: 60
          }} className="logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
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
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://blogs.soumya-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
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
  );
}

export default NavBar;
