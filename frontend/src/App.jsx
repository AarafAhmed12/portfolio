import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const location = useLocation();
  return (
    <>
      <div className="app">
        <Navbar />
        <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            {/* <Route index element={<Home/>}/> */}
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skill" element={<Skill />} />
          </Routes>
          {/* <Home/>
      <About/>
      <Skill/> */}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default App;
