/* eslint-disable max-len */
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { setLoad } from "./store/loadSlice";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Preloader from "./components/Pre";
import Aboute from "./components/About/About";
import Treasure from "./components/Treasure";
import NotFound from "./pages/NotFound";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();
  const { load } = useSelector((state) => state.search, shallowEqual);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoad(false));
    }, 1200);

    return () => clearTimeout(timer);
  }, [dispatch]);
  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="about" element={<Aboute />}>
              <Route path="treasure" element={<Treasure />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
