import React, { createContext } from "react";
// import Cart from "./MainContentcontents/Cart";
import Contact from "./MainContentcontents/Contact";
import Home from "./MainContentcontents/Home";
import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Community from "./MainContentcontents/Community";

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
        <Route path="/solutions" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MainContent;
