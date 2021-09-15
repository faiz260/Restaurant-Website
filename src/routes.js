import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import About from "./Pages/About/About";

function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default RouterConfig;
