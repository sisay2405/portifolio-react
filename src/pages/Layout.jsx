/* eslint-disable max-len */
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyle from '../globalStyle';
// import GlobalStyle from '../globalStyle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
    padding: 0 1.5rem 1rem;
    h2 {
      color: #009900;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    h3 {
      font-size: 1.15rem;
      font-weight: 700;
      margin: 1.5rem 0 1rem;
    }
    img {
      margin: 0.45rem 0 1rem;
    }
    button {
      margin-left: 1rem;
      width: auto;
    }
  }
`;


const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle/>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
