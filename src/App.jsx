/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
// import Home from './pages/Home';
import Home from "./components/Home/Home";
import Preloader from "./components/Pre";
import AboutUs from './pages/AboutUs';
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
        <Route path="about" element={<AboutUs />}>
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
