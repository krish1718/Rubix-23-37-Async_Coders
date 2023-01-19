import React from "react";

const Yoga = () => {
  return (
    <div>
      <div className="font-semibold text-6xl text-center my-5">
        <a className="text-purple-600 font-bold">YOGA</a> IS A LIFESTYLE
      </div>
      <div className="p-5 flex flex-wrap">
        <div className="bg-purple-600 text-white p-3 rounded-2xl w-[500px]">
          <div className="rounded-lg mb-3">
            <iframe
              //   width="560"
              //   height="315"
              className="w-full h-[250px] rounded-lg mx-auto"
              src="https://www.youtube.com/embed/BEYW5hPoKOo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="bg-white text-purple-700 rounded-lg p-4 px-6">
            <div className="text-xl font-semibold mb-4 mt-2 border-4 py-2 px-3 border-purple-600 rounded-lg">
              <a className="font-bold">Sukhasana: </a>Easy Pose
            </div>
            <div>
              Sukhasana: Easy Pose1/5 It's the traditional meditative position
              of sitting on the floor with crossed legs and an upright spine.
              Easy position is a strong tool for recovering the strength you
              need to deal with anxiety, sadness, and extreme stress, despite
              the fact that many people don't think of it as a yoga pose. The
              symmetry of this posture and the base of your spine are two
              factors that help you overcome stress by giving you the feeling
              that nothing can unsettle you or push you off track.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
