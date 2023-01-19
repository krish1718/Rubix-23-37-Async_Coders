import React, { useRef } from "react";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Caraousel from "./Caraousel";
// import { Dialog, Transition } from "@headlessui/react";

const Home = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  //   const [isOpen, setIsOpen] = useState(false);

  let sum = 0;

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
      <div>
        {/* <iframe
          //   width="853"
          //   height="480"
          src={`https://www.youtube.com/embed/PUDsAnFjORo`}
          //   frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          className="w-full h-[90vh]"
        /> */}
      </div>
      {/* // transition Survey 1 page */}
      {/* <Transition show={isOpen} as={Fragment}>
        <Dialog
          className="fixed top-20 md:left-1/4 xl:left-1/4 z-20 mx-4"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel>
              <div>
                <div className="rounded-xl max-w-[700px] bg-gray-200 text-white">
                  <div className="bg-red-200 rounded-xl p-2">
                    <div className="flex space-x-2 p-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 stroke-red-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="text-red-700 font-bold">
                        Are you sure you want to delete all the saved passwords?
                      </div>
                    </div>
                    <div className="text-red-700 ml-10 mr-2 mb-2">
                      Doing so will permanently delete the passwords stored.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="mx-4 my-4 text-black"
                      onClick={setIsOpen}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        // setIsOpen(!isOpen);
                        // setIsOpen();
                      }}
                      className="mx-4 mr-4 font-semibold text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition> */}
      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog> */}
      <Caraousel />
      <hr />
    </div>
  );
};

export default Home;
