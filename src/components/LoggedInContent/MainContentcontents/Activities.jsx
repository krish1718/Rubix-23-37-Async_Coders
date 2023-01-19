import React from "react";
import Breathe from "./Breathe";
import { NavLink } from "react-router-dom";
import yoga from "../../../assets/meditation.jpg";
import breathe from "../../../assets/breathing.jpg";
import walking from "../../../assets/walking.jpg";
import gamesimage from "../../../assets/gamesimage.jpg";

const Activities = () => {
  return (
    <div>
      <div>
        {/* <div>
          <Breathe />
        </div> */}
        <div>
          <div className="min-h-screen p-4">
            <div className="text-3xl text-center font-semibold my-5 text-purple-600">
              Select Categories
            </div>
            <div className="flex flex-wrap">
              <NavLink
                to="/breathe"
                className="border-4 w-[44vw] hover:bg-purple-100 border-purple-600 text-purple-600 drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-xl font-semibold">Deep Breathing</div>
                <img className="object-contain w-[30vw] mx-auto rounded-lg mb-5" src={breathe} alt="" />
              </NavLink>
              <NavLink
                to="/yoga"
                className="border-4 w-[44vw] hover:bg-purple-100 border-purple-600 text-purple-600 drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-xl font-semibold">Explore Yoga</div>
                <img className="object-contain w-[30vw] mx-auto rounded-lg mb-5" src={yoga} alt="" />
              </NavLink>
              <NavLink
                to="/morningexercises"
                className="border-4 w-[44vw] hover:bg-purple-100 border-purple-600 text-purple-600 drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-xl font-semibold">Morning Exercises</div>
                <img className="object-contain w-[37vw] my-auto mx-auto rounded-lg mb-5" src={walking} alt="" />
              </NavLink>
              <NavLink
                to="/games"
                className="border-4 w-[44vw] hover:bg-purple-100 border-purple-600 text-purple-600 drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-xl font-semibold">Relaxing Games</div>
                <img className="object-contain w-[30vw] mx-auto rounded-lg mb-5" src={gamesimage} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
