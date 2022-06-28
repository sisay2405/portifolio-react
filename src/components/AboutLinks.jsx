import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  ul {
    border-top: 1px dotted #abcdef;
    border-bottom: 1px dotted #abcdef;
    list-style-type: none;
    margin-top: -1rem;
    padding: 0.75rem 0;
  }
  li {
    display: inline-block;
    &:first-child {
      &::after {
        content: '|';
      }
      a {
        padding-left: 0;
      }
    }
    a {
      font-weight: 700;
      padding: 0 0.5rem;
      text-decoration: none;
      &:hover {
        color: #0a3b6b;
      }
    }
    a,
    a:visited {
      color: #0000ff;
      &:hover {
        color: #000099;
      }
    }
  }
`;

const AboutLinks = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/about/history">Our History</Link>
        </li>
        <li>
          <Link to="/about/staff">Our Staff</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default AboutLinks;
