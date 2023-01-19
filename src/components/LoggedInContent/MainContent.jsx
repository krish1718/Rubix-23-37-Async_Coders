import React, { createContext } from "react";
// import Cart from "./MainContentcontents/Cart";
import Contact from "./MainContentcontents/Contact";
import Home from "./MainContentcontents/Home";
import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Community from "./MainContentcontents/Community";
import About from "./MainContentcontents/About";
import Activities from "./MainContentcontents/Activities";
import Profile from "./MainContentcontents/Profile";
import Breathe from "./MainContentcontents/Breathe";
import Yoga from "./MainContentcontents/Yoga";
import MorningExercises from "./MainContentcontents/MorningExercises";

const cartContext = createContext({
  cartItems: [],
  setcartItems: () => {},
});

const MainContent = () => {
  return (
    <>
      {/* <div>
        <Home />
      </div>
      <div>
        <Cart />
      </div> */}
      {/* <div>
        <Contact />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/breathe" element={<Breathe />} />
        <Route path="/morningexercises" element={<MorningExercises />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MainContent;
