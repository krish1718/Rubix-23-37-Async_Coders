import React, { useContext } from "react";
import { usernameContext, passwordContext } from "../App";

const LandingPageNavbar = ({ setLandingpagevisibility }) => {
  const { username, setUsername } = useContext(usernameContext);
  return (
    <div className="z-20 sticky top-0 bg-white">
      <div className="flex justify-between px-4 py-6">
        <div className="font-bold font-serif">
          Ummeed
        </div>
        <div className="flex flex-row">
          {/* <div to="/" className="mx-2 hover:text-green-500">
            <div className="inline-block peer flex-row">
              Hello, {username ? username : "User"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 inline-block ml-2 border rounded-full border-green-500 my-auto peer-hover:border-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            
            <div className="hidden text-black z-30 text-left absolute rounded-md peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
              <div className="p-4">
                <hr />
                <div className="font-semibold text-sm my-2">Your Lists</div>
                <div
                  onClick={() => setLoginView(true)}
                  className="text-xs cursor-pointer hover:underline hover:text-green-500"
                >
                  Logout
                </div>
              </div>
            </div>
            
          </div> */}
          <div
            to="/"
            className="cursor-pointer w-fit inline-block mx-4 hover:text-green-500"
          >
            About Us
          </div>
          <div
            onClick={() => setLandingpagevisibility(false)}
            className="cursor-pointer w-fit inline-block mx-4 hover:text-green-500"
          >
            Get Help
          </div>
          <div
            onClick={() => setLandingpagevisibility(false)}
            className="cursor-pointer w-fit inline-block mx-4 hover:text-green-500"
          >
            Community
          </div>
          <div
            onClick={() => setLandingpagevisibility(false)}
            className="cursor-pointer w-fit inline-block mx-4 hover:text-green-500"
          >
            Talk To Us
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div
            onClick={() => setLandingpagevisibility(false)}
            className="mx-2 cursor-pointer h-fit text-white font-semibold py-1 px-3 rounded-md bg-gradient-to-r from-blue-600 to-green-600"
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
