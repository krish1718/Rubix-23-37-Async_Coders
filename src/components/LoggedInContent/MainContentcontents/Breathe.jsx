import React, { useState, useEffect } from "react";
import CircularProgress from "./CircularProgress";
import breatheman from "../../../assets/Breathe.jpg";

const Breathe = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [per, setPer] = useState(100);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (start) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
          setPer(per - 1.66);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setPer(0);
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
            setPer(per - 1.7);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  });

  return (
    <>
      <div className="App min-h-[90vh] flex items-center">
        <div className="flex p-5 justify-between items-center w-full">
          <div className="flex w-2/3 items-center">
            <div className="pl-5">
              <div className="font-serif font-bold text-4xl mb-5">
                Take a breath and relax
              </div>
              <div className="font-semibold max-w-[33vw]">
                The One Minute Deep Breath is simple, yet can be very
                challenging and profound. This is because they can help to quiet
                the mind and focus on the present moment, rather than dwelling
                on past events or worrying about the future.
              </div>
            </div>
            <div className="p-3 w-fit mx-auto">
              <CircularProgress
                size={250}
                strokeWidth={20}
                percentage={Math.trunc(per)}
                color="#57a1fb"
                minutes={minutes}
                seconds={seconds}
              />
              <div
                className="text-xl cursor-pointer w-fit hover:bg-blue-500 transition ease-in text-white bg-[#57a1fb] font-semibold px-7 pt-2 pb-3 rounded-full mt-5 mx-auto"
                onClick={() => setStart(!start)}
              >
                {start ? "Pause" : "Start"}
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <img className="ml-auto my-auto" src={breatheman} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Breathe;
