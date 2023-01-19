import React, { useRef } from "react";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import image from "../assets/Landingpageimagejpg.jpg";
import exercise from "../assets/exercise.jpg";
import yoga from "../assets/yoga.jpg";
import meditation from "../assets/meditation.jpg";
import socialize from "../assets/socialize.jpg";

const LandingPage = ({ setLandingpagevisibility }) => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div>
      {/* // Landing Page  */}
      {/* // First page  */}
      <div className="min-h-[90vh] mt-[2vh]">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 pt-10 pb-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="text-7xl mb-4 font-bold font-serif text-gray-900">
                Improving
              </div>
              <div className="text-purple-700 text-5xl font-bold font-serif">
                Mental Care
              </div>
              <p className="my-8 leading-relaxed">
                Making it through life's toughest moments, Together. Your help
                is just few clicks away. Let us know more about you by taking a
                survey.
              </p>
              <button
                onClick={() => setLandingpagevisibility(false)}
                className="text-white bg-black hover:bg-gray-700 transition ease-in rounded-full py-3 px-9 font-semibold"
              >
                Get started
              </button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded w-[50vw]"
                alt="hero"
                src={image} // src="https://imgs.search.brave.com/8AQMBmc9e8R9nvgvTM-HgO5gSE4XHJtuigq7HZ13_V4/rs:fit:811:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/R1VoVGZ4dElnVnJB/UXhyX0Y2QjVBSGFF/ViZwaWQ9QXBp"
              />
            </div>
          </div>
        </section>
      </div>
      {/* // Second Part  */}
      <div className="min-h-[90vh] ">
        <section className="text-gray-600 body-font">
          <div className="mb-5">
            <div className="text-5xl font-bold font-serif text-black ml-[10vw]">
              Thousands of highly
            </div>
            <div className="text-5xl font-bold font-serif text-red-400 ml-[15vw]">
              rated, verified experts.
            </div>
          </div>
          <div className="container mx-auto flex px-5 pt-5 pb-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover w-full md:w-[400px] mx-auto object-center rounded"
                alt="hero"
                src="https://www.kauveryhospital.com/doctorimage/recent/Dr-Raghuram---Cardio-thoracic-surgery2019-02-18%2012:58:54pm.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font text-4xl font-bold font-serif text-gray-900">
                Rahul Sharma
              </h1>
              <p className="">Consultant</p>
              {/* // Stars  */}
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
              <div className="mt-5">
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 my-auto stroke-green-700 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  490 satisfied customers
                </div>
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 my-auto stroke-green-700 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  25 years of experience
                </div>
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 my-auto stroke-green-700 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Licensed therapist
                </div>
              </div>
              <div className="flex justify-center my-8">
                <button className="text-white bg-black hover:bg-gray-700 transition ease-in font-semibold border-0 py-2 px-6 rounded-full text-lg">
                  Reviews
                </button>
                <button className="ml-4 text-gray-700 bg-gray-100 hover:bg-gray-200 transition ease-in font-semibold py-2 px-6 rounded-full text-lg">
                  Linkedin
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* // Third Part  */}
      <div className="min-h-[90vh]">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-2 pt-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <div className="text-5xl font-bold font-serif text-black">
                Improve your
              </div>
              <div className="text-5xl font-bold font-serif text-blue-400 ml-[5vw]">
                physical mental health.
              </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <p className="mb-8 text-lg font-semibold">
                Here are some tips to help you get started with self-care. Even
                small acts of self-care in your daily life can have a big
                impact.
              </p>
              <div className="flex justify-center">
                <button className="text-white bg-black hover:bg-gray-700 transition ease-in font-semibold border-0 py-2 px-6 rounded-full text-lg">
                  See all tips
                </button>
              </div>
            </div>
          </div>
          {/* // Cards  */}
          {/* <div className="flex flex-row justify-evenly text-black px-5 mt-5">
            <div className="w-1/4 border rounded-xl py-3 px-7">
              <img
                src="https://imgs.search.brave.com/akq9_jHYZH81QGbZ_5vnvFiiEo45LmbROSo8kPLv1Iw/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci9oZWFsdGgtZml0/bmVzcy1jYXJ0b29u/XzI0NjQwLTI1NzA3/LmpwZw"
                alt=""
                className="h-[40vh]"
              />
              <div className="font-serif font-bold text-2xl mb-3">
                Get regular exercise.
              </div>
              <div>
                Just 30 minutes of walking every day can help boost your mood
                and improve health.
              </div>
              <button className="my-3 font-bold flex flex-row">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.0}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
            <div className="w-1/4 border rounded-xl py-3 px-7">
              <img
                src="https://imgs.search.brave.com/akq9_jHYZH81QGbZ_5vnvFiiEo45LmbROSo8kPLv1Iw/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci9oZWFsdGgtZml0/bmVzcy1jYXJ0b29u/XzI0NjQwLTI1NzA3/LmpwZw"
                alt=""
                className="h-[40vh]"
              />
              <div className="font-serif font-bold text-2xl mb-3">
                Get regular exercise.
              </div>
              <div>
                Just 30 minutes of walking every day can help boost your mood
                and improve health.
              </div>
              <button className="my-3 font-bold flex flex-row">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.0}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
            <div className="w-1/4 border rounded-xl py-3 px-7">
              <img
                src="https://imgs.search.brave.com/akq9_jHYZH81QGbZ_5vnvFiiEo45LmbROSo8kPLv1Iw/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci9oZWFsdGgtZml0/bmVzcy1jYXJ0b29u/XzI0NjQwLTI1NzA3/LmpwZw"
                alt=""
                className="h-[40vh]"
              />
              <div className="font-serif font-bold text-2xl mb-3">
                Get regular exercise.
              </div>
              <div>
                Just 30 minutes of walking every day can help boost your mood
                and improve health.
              </div>
              <button className="my-3 font-bold flex flex-row">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.0}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div> */}
          <div>
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                strokeWidth="10%"
                fill="none"
                className="indicator"
                style={{ pathLength: scrollXProgress }}
              />
            </svg>
            <ul className="flex pb-5 overflow-x-scroll" ref={ref}>
              <li className="mx-5 min-w-[400px]">
                <div className="border drop-shadow rounded-xl py-3 px-7">
                  <img
                    src={exercise}
                    alt=""
                    className="h-[40vh] object-contain"
                  />
                  <div className="font-serif font-bold text-2xl mb-3">
                    Get regular exercise.
                  </div>
                  <div>
                    Just 30 minutes of walking every day can help boost your
                    mood and improve health.
                  </div>
                  <button className="my-3 font-bold flex flex-row">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 my-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li className="mx-5 min-w-[400px]">
                <div className="border drop-shadow rounded-xl py-3 px-7">
                  <img
                    src={yoga}
                    alt=""
                    className="h-[35vh] mx-auto my-4 object-cover rounded-xl"
                  />
                  <div className="font-serif font-bold text-2xl mb-3">
                    Yoga.
                  </div>
                  <div>
                    Yoga can help overcome your worries and fears by calming
                    your center and allowing you to focus on the present.
                  </div>
                  <button className="my-3 font-bold flex flex-row">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 my-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li className="mx-5 min-w-[400px]">
                <div className="border drop-shadow rounded-xl py-3 px-7">
                  <img
                    src={meditation}
                    alt=""
                    className="h-[40vh] object-contain"
                  />
                  <div className="font-serif font-bold text-2xl mb-3">
                    Mindfulness Meditation.
                  </div>
                  <div>
                    Mindful breathing allows us to return to and stay in the
                    present.
                  </div>
                  <button className="my-3 font-bold flex flex-row">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 my-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li className="mx-5 min-w-[400px]">
                <div className="border drop-shadow rounded-xl py-3 px-7">
                  <img
                    src={socialize}
                    alt=""
                    className="h-[40vh] object-contain"
                  />
                  <div className="font-serif font-bold text-2xl mb-3">
                    Socialize!
                  </div>
                  <div>Reconnect with your friends and family.</div>
                  <button className="my-3 font-bold flex flex-row">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 my-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              {/* <li className="mx-5 min-w-[400px]">
                <div className="border drop-shadow rounded-xl py-3 px-7">
                  <img
                    src="https://imgs.search.brave.com/akq9_jHYZH81QGbZ_5vnvFiiEo45LmbROSo8kPLv1Iw/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci9oZWFsdGgtZml0/bmVzcy1jYXJ0b29u/XzI0NjQwLTI1NzA3/LmpwZw"
                    alt=""
                    className="h-[40vh] object-contain"
                  />
                  <div className="font-serif font-bold text-2xl mb-3">
                    Get regular exercise.
                  </div>
                  <div>
                    Just 30 minutes of walking every day can help boost your
                    mood and improve health.
                  </div>
                  <button className="my-3 font-bold flex flex-row">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 my-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
      {/* // Fourth Part  */}
      <div className="min-h-[90vh] mt-32">
        <div className="mx-[10vw] flex flex-wrap justify-between">
          <div className="text-5xl font-serif font-bold max-w-[40vw]">
            What our clients say about us
          </div>
          <button className="text-white bg-black hover:bg-gray-700 h-fit transition ease-in font-semibold border-0 py-2 px-6 rounded-full text-lg">
            All reviews
          </button>
        </div>
        <div className="text-center mx-auto md:max-w-[50vw] my-[14vh] text-xl font-semibold">
          Thank you for all your help. <br /> It is nice to know that this
          service is here for people like myself, who need answers fast and are
          not sure who to consult.
        </div>
        <div className="w-fit mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default LandingPage;
