import React, { useRef } from "react";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Caraousel from "./Caraousel";
import InitialQuestions from "./InitialQuestions";
// import { Dialog, Transition } from "@headlessui/react";

const Home = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const [initialquestions, setinitialquestions] = useState(true);

  return (
    // <div className="max-w-[1600px] mx-auto">
    //   <div>
    //     <Caraousel />
    //   </div>
    //   <div>
    //     <div></div>
    //     <div className="flex flex-wrap m-2 mx-auto">
    //       {books.map((singlebook) => {
    //         return (
    //           <div
    //             key={singlebook.id}
    //             className="border-2 w-[300px] p-5"
    //           >
    //             <div className="h-[350px]">
    //               <img
    //                 className="mx-auto h-[200px] w-[150px] "
    //                 src={
    //                   singlebook.thumbnail
    //                     ? singlebook.thumbnail
    //                     : "https://dwtr67e3ikfml.cloudfront.net/bookCovers/950e586d97be7ca9bc49ee527903961141e342f5-thumb"
    //                 }
    //                 placeholder="https://dwtr67e3ikfml.cloudfront.net/bookCovers/950e586d97be7ca9bc49ee527903961141e342f5-thumb"
    //                 alt=""
    //               />
    //               <div className="font-semibold text-center text-sm p-2">
    //                 {singlebook.title}
    //               </div>
    //               <div className="flex px-2 space-x-2 justify-center">
    //                 <div className="line-through">Rs 275</div>
    //                 <div className="">Free*</div>
    //               </div>
    //             </div>
    //             <button className="block mx-auto bg-blue-500 text-white py-2 px-3 rounded-xl text-sm">
    //               Add To Cart
    //             </button>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div>
      {/* <div>Previous Questions</div> */}
      {initialquestions ? (
        <InitialQuestions setinitialquestions={setinitialquestions} />
      ) : (
        <Caraousel />
      )}
      <hr />
    </div>
  );
};

export default Home;
