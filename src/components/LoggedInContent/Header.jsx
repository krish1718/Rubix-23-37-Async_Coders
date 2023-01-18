import React, { useContext } from "react";
import { usernameContext, passwordContext } from "../../App";
import { NavLink } from "react-router-dom";

const Header = ({ setLoginView }) => {
  const { username, setUsername } = useContext(usernameContext);
  return (
    <div className="z-20 sticky top-0 bg-white">
      <div className="flex justify-between px-4 py-6">
        <NavLink className="font-bold font-serif" to="/">
          Ummeed
        </NavLink>
        <div>
          {/* <NavLink to="/" className="mx-2 hover:text-green-500">
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
            
          </NavLink> */}
          <NavLink to="/" className="mx-2 hover:text-green-500">
            Hello, {username ? username : "User"}
          </NavLink>
          <NavLink to="/" className="mx-2 hover:text-green-500">
            About Us
          </NavLink>
          <NavLink to="/solutions" className="mx-2 hover:text-green-500">
            Self-Care
          </NavLink>
          <NavLink to="/" className="mx-2 hover:text-green-500">
            Get Help
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="mx-2 hover:text-green-500">
            Talk To Us
          </NavLink>
          <NavLink
            onClick={() => {
              window.location.reload();
            }}
            className="mx-2 text-white font-semibold py-1 px-3 rounded-md bg-gradient-to-r from-blue-600 to-green-600"
          >
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
