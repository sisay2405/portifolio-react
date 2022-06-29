/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Home from "./components/Home/Home";
import Preloader from "./components/Pre";
import Aboute from './components/About/About';
import OurHistory from './components/OurHistory';
import OurStaff from './components/OurStaff';
import Treasure from './components/Treasure';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
  <>
<Preloader load={load} />
<div className="App" id={load ? "no-scroll" : "scroll"}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/project" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="about" element={<Aboute />}>
          <Route path="history" element={<OurHistory />} />
          <Route path="staff" element={<OurStaff />} />
          <Route path="treasure" element={<Treasure />} />
        </Route>
        <Route path="services" element={<Services />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </div>
    </>
  );
};

export default App;
