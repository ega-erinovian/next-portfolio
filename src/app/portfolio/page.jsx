"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Golds Fitness Gym",
    desc: "Get fit with Golds Gym: Your go-to workout companion with a simple UI and mobile accessibility. Whether you're a beginner or a pro, we've got your back with easy-to-follow exercises and technique tips. Start your fitness journey today!",
    img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://golds-fitness.netlify.app/",
  },
  {
    id: 2,
    title: "Valorant Unofficial App",
    desc: "Step into Valorant's Universe with our ReactJS-powered Agent Portal! Explore React Hooks and API magic, immerse in the adrenaline of Valorant like never before. Join the adventure now!",
    img: "https://images2.alphacoders.com/132/1322753.jpeg",
    link: "https://valorant-next.netlify.app/",
  },
  {
    id: 3,
    title: "Youtube Clone",
    desc: "Introducing GagasTube: Your revamped Youtube experience! Powered by React JS and the Youtube API, explore videos, channels, and playlists effortlessly. Join us now for endless entertainment!",
    img: "https://images.unsplash.com/photo-1540655037529-dec987208707?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://gagastube.netlify.app/",
  },
  {
    id: 4,
    title: "IDLIX GO",
    desc: "Welcome to IDLIX Go – your cinematic hub! Enjoy IMDb-like features to search movie descriptions, ratings, and more. Dive into the world of cinema effortlessly with us!",
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://idlix-go.netlify.app/",
  },
  {
    id: 5,
    title: "Agit & Co Official Website",
    desc: "Discover Agit & Co: Your gateway to captivating photography and videography. With responsive design and secure SQL storage, embark on a seamless journey through creativity!",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.agitandco.com/",
  },
  {
    id: 6,
    title: "SNKRZ",
    desc: "Explore SNKRZ (Sneakerz), your ultimate sneaker haven! Delve into our e-commerce dummy website, showcasing an endless collection and responsive design. Experience the excitement of sneaker shopping redefined.",
    img: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://snkrz.netlify.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.3,
  });
  const x = useTransform(scaleX, [0, 1], ["2%", "-88%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-300vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl text-center font-bold">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden bg-black">
          <h1 className="text-white text-9xl font-bold text-zinc-900">
            Work Hard Play Hard
          </h1>
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-cover bg-center after:content-[''] after:bg-black after:h-screen after:w-screen after:absolute after:opacity-70 after:z-1`}
                key={item.id}
                style={{ backgroundImage: `url('${item.img}')` }}
              >
                <div className="flex flex-col gap-8 text-white z-10 p-10 sm:p-14 md:p-16">
                  <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <p className="w-full text-sm md:text-lg lg:text-2xl md:w-96 lg:w-[600px] xl:w-[1400px] font-extralight tracking-wide">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="flex justify-end"
                    target="_blank"
                  >
                    <button className="py-2 px-4 lg:py-4 lg:px-8 text-sm md:text-md lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded transition-all hover:text-white hover:bg-black hover:cursor-pointer">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 155, 150 m -60, 0 a 45,45 0 0,1 110,0 a 45,45 0 0,1 -110,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-lg">
                Front-End and Back-End Web Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:text-black hover:bg-white hover:ring-2 hover:ring-black hover:cursor-pointer transition-all"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
