import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <div>
        <motion.section
          initial={{ y: "-90%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          //   exit={{
          //     x: "-100%",
          //     opacity: 0,
          //     transition: { duration: 0, delay: 0 },
          //   }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          class="text-gray-600 body-font relative"
        >
          <div class="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div class="lg:w-1/2 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <img
                src="https://mhrc.psy.msu.edu/wp-content/uploads/2021/06/contactUs.png"
                alt=""
              />
            </div>
            <div class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 class="text-black text-3xl mb-1 font-serif font-bold title-font">
                Talk To Us
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600">
                If you or someone you know has a mental health problem, there
                are ways to get help. Get in touch with our specialists to
                discuss the problem.
              </p>
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button class="text-white bg-gradient-to-r from-blue-600 to-green-600 border-0 py-2 px-6 focus:outline-none font-bold rounded text-lg">
                Send
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
