import React, { useEffect } from "react";

import { setLoad } from "./store/loadSlice";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
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
  const dispatch = useDispatch();
  const { load } = useSelector((state) => state.loader, shallowEqual);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoad(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);
  return (
    <>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <GlobalStyle />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <ResumeNew />
        <Footer />
      </div>
    </>
  );
};

export default App;
