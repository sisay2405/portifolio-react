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

const App = () => {
  return (
    <>
      <GlobalStyle />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <ResumeNew />
        <Footer />
    </>
  );
};

export default App;
