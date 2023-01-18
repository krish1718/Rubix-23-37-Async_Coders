import React from "react";
import Carousel from "react-material-ui-carousel";

const data = [
  "https://www.mypustak.com/_next/image?url=https%3A%2F%2Fmypustak-5.s3.ap-south-1.amazonaws.com%2Fuploads%2Fhomebanner%2FHOME_1_1.webp&w=1920&q=75",
  "https://www.mypustak.com/_next/image?url=https%3A%2F%2Fmypustak-5.s3.ap-south-1.amazonaws.com%2Fuploads%2Fhomebanner%2FHOME_1_1.webp&w=1920&q=75",
  "https://www.mypustak.com/_next/image?url=https%3A%2F%2Fmypustak-5.s3.ap-south-1.amazonaws.com%2Fuploads%2Fhomebanner%2FHOME_1_1.webp&w=1920&q=75",
  "https://www.mypustak.com/_next/image?url=https%3A%2F%2Fmypustak-5.s3.ap-south-1.amazonaws.com%2Fuploads%2Fhomebanner%2FHOME_1_1.webp&w=1920&q=75",
];

const Caraousel = () => {
  return (
    <>
      <Carousel
        className="carasousel"
        autoPlay={false}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "#fff",
            color: "#494949",
            borderRadius: 0,
            marginTop: -22,
            height: "104px",
          },
        }}
      >
        {data.map((imag, i) => {
          return (
            <>
              {/* <img src={imag} alt="img" key={i} className="w-screen" /> */}
              <div>
                <div className="h-[90vh] text-center">
                  <div className="text-5xl font-serif font-bold">Survey</div>
                  <div className="text-2xl my-10">
                    1. In the last month, how often have you been upset because
                    of something that happened unexpectedly?
                  </div>
                  <div className="text-white font-bold">
                    <button
                      //   onClick={() => {
                      //     sum += 1;
                      //   }}
                      className="bg-red-600 mx-3 py-2 px-4 rounded-lg"
                    >
                      0
                    </button>
                    <button className="bg-orange-600 mx-3 py-2 px-4 rounded-lg">
                      1
                    </button>
                    <button className="bg-yellow-500 mx-3 py-2 px-4 rounded-lg">
                      2
                    </button>
                    <button className="bg-green-400 mx-3 py-2 px-4 rounded-lg">
                      3
                    </button>
                    <button className="bg-green-600 mx-3 py-2 px-4 rounded-lg">
                      4
                    </button>
                  </div>
                  <div className="">
                    <button className="">Prev</button>
                    <button className="">Next</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default Caraousel;
