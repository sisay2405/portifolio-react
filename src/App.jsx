import React from "react";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Home/Hero";
import Header from "./components/Header";
import About from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import ResumeNew from "./components/Resume/ResumeNew";
import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Hero />
        <About />
        <div className="container">
          <div className="row">
            <div className="col">
              <Projects />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Contact />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ResumeNew />
            </div>
          </div>
        </div>
        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;

const AppWrapper = styled.div`
  min-width: 300px; /* Set a minimum width for the app container */
  overflow-x: hidden; /* Hide horizontal overflow on small screens */
`;

