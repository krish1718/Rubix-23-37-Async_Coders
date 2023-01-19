import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { usernameContext, passwordContext } from "../../../App";

const Profile = () => {
  const { username, setUsername } = useContext(usernameContext);
  return (
    <div>
      <div className="flex min-h-screen bg-gray-200">
        <div className="w-1/4 pl-3">
          <div className="bg-white my-3 py-1 px-3 rounded-xl min-h-[83vh]">
            <div>Profile page</div>
            <img src="" alt="" />
            <div className="font-semibold text-xl">{username}</div>
            <div>
                <div className="font-semibold">Badges Earned</div>
            </div>
            <div>
                <div className="font-semibold">Coupons</div>
            </div>
          </div>
        </div>
        <div className="w-3/4 p-3">
          <div className="bg-white p-3 rounded-xl">
            <div className="font-semibold text-xl mb-1">Latest tasks</div>
            <div>
              <div>1. Be a good person</div>
              <div>1. Be a good person</div>
              <div>1. Be a good person</div>
              <div>1. Be a good person</div>
            </div>
          </div>
          <div className="bg-white my-3 py-1 px-3 rounded-xl">
            <div className="font-semibold text-xl my-3">Your mood</div>
            <div className="flex flex-wrap">
              <div className="mr-6 flex flex-row font-semibold bg-yellow-400 w-fit py-2 px-8 my-4 rounded-full">
                <div>Emotional Burnout</div>
                <div className="ml-4">70%</div>
              </div>
              <div className="mr-6 flex flex-row text-white font-semibold bg-purple-500 w-fit py-2 px-8 my-4 rounded-full">
                <div>Anxiety</div>
                <div className="ml-4">70%</div>
              </div>
              <div className="mr-6 flex flex-row font-semibold bg-pink-400 w-fit py-2 px-8 my-4 rounded-full">
                <div>Irritation</div>
                <div className="ml-4">70%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="bg-white pt-1 pb-3 px-3 rounded-xl">
              <div className="font-semibold text-xl my-3">
                Recommended activities
              </div>
              <div className="flex">
                <NavLink
                  to="/breathe"
                  className="w-[150px] h-[150px] mr-3 cursor-pointer"
                >
                  <img
                    className="rounded-xl object-cover h-full"
                    src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/09/4-7-8-breathing-1388104915-770x533-1-650x428.jpg"
                    alt=""
                  />
                </NavLink>
                <NavLink
                  to="/yoga"
                  className="w-[150px] h-[150px] mr-3 cursor-pointer"
                >
                  <img
                    className="rounded-xl"
                    src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-asian-sportsman-meditating-in-yoga-tree-position-smiling-sportsman-standing-in-yoga-tree-position-young-sporty-man-doing-yoga-on-the-mat-vector-flat-design-illustration-square-layout_H7xj66o8I-_thumb.jpg"
                    alt=""
                  />
                </NavLink>
                <NavLink
                  to="/morningexercises"
                  className="w-[150px] h-[150px] mr-3 cursor-pointer"
                >
                  <img
                    className="rounded-xl"
                    src="https://t3.ftcdn.net/jpg/01/34/22/98/360_F_134229865_xzW3OEskaAdf5akpxVdiFWmgVQqNqdVe.jpg"
                    alt=""
                  />
                </NavLink>
                <NavLink
                  to="/games"
                  className="w-[150px] h-[150px] cursor-pointer"
                >
                  <img
                    className="rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvZsqMuiAgD5S6gNaYoTovI2pWz5MmZkKVA&usqp=CAU"
                    alt=""
                  />
                </NavLink>
              </div>
            </div>
            <div className="bg-white pt-1 pb-3 px-3 rounded-xl ml-3">
              Talk to an expert or take a survey
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
