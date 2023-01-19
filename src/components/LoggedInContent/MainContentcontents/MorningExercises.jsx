import React from "react";

const MorningExercises = () => {
  return (
    <div>
      <div className="min-h-screen p-4">
        <div className="flex flex-wrap">
          <div className="w-[45vw] bg-purple-500 rounded-2xl m-2 min-h-[85vh] text-white p-3">
            <div className="text-3xl text-center font-semibold my-5 text-white">
              Nature Sounds
            </div>
            <img
              className="w-[20vw] h-[20vw] rounded-xl mx-auto"
              src="https://thumbs.dreamstime.com/b/landscape-mountains-mist-forest-sunrise-double-exposure-panoramic-view-guitar-shape-background-vector-illustration-107840809.jpg"
              alt=""
            />
            <div className="">
                <div>Song 1</div>
                <div>Song 2</div>
                <div>Song 3</div>
                <div>Song 4</div>
            </div>
          </div>
          <div className="w-[45vw] bg-purple-500 rounded-2xl m-2 min-h-[85vh] text-white p-3">
            <div className="text-3xl text-center font-semibold my-5 text-white">
              Podcasts
            </div>
            <img
              className="w-[20vw] h-[20vw] rounded-xl mx-auto"
              src="https://freedesignfile.com/upload/2020/07/Podcast-vector.jpg"
              alt=""
            />
            <div className="">
                <div>Song 1</div>
                <div>Song 2</div>
                <div>Song 3</div>
                <div>Song 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorningExercises;
