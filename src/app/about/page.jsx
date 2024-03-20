"use client";
import { motion, useScroll } from "framer-motion";
import Brain from "../components/brainSVG";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  console.log(scrollYProgress);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div
        className="h-full overflow-y-scroll overflow-x-hidden lg:flex"
        ref={containerRef}
      >
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 lg:pr-0 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-2/3 xl:w-1/2">
          {/* Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* Biography Description */}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              maxime quae facilis nihil. Amet necessitatibus, a illo id veniam
              et quisquam, non expedita nulla voluptate aut, consequuntur
              voluptatem voluptates! Temporibus!
            </p>
            {/* Scroll SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Skills Title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* Skill List */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black ring-1 ring-black font-bold">
                HTML5
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black ring-1 ring-black font-bold">
                CSS3
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black ring-1 ring-black font-bold">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black ring-1 ring-black font-bold">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black ring-1 ring-black font-bold">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black ring-1 ring-black font-bold">
                PHP
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black ring-1 ring-black font-bold">
                SQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black ring-1 ring-black font-bold">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black ring-1 ring-black font-bold">
                Python
              </div>
            </div>
            {/* Scroll SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          {/* Experience Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Experience Title */}
            <h1 className="font-bold text-2xl">EXPERIENCES</h1>
            {/* Experience List */}
            <div className="">
              {/* Experience List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-bg-lg rounded-s-lg">
                    Senior Javascript Engineer
                  </div>
                  {/* Job Description */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020-Present
                  </div>
                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    GoTo
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6 flex justify-center">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>
              {/* Experience List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3"></div>
                {/* Center */}
                <div className="w-1/6 flex justify-center">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-bg-lg rounded-s-lg">
                    Senior Javascript Engineer
                  </div>
                  {/* Job Description */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020-Present
                  </div>
                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    GoTo
                  </div>
                </div>
              </div>
              {/* Experience List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-bg-lg rounded-s-lg">
                    Senior Javascript Engineer
                  </div>
                  {/* Job Description */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020-Present
                  </div>
                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    GoTo
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6 flex justify-center">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
