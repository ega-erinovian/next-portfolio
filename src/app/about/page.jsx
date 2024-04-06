/* eslint-disable react/no-unescaped-entities */
"use client";
import ScrollSVG from "@/components/scrollSVG";
// import Brain from "@/components/brain";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const experienceMobRef = useRef();
  const isExperienceMobRefInView = useInView(experienceMobRef, {
    margin: "-100px",
  });

  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Javascript",
    "React.js",
    "Next.js",
    "Vite",
    "Node.js",
    "Framer Motion",
    "PHP",
    "SQL",
    "MySQL",
    "Git",
    "Figma",
  ];

  const experiences = [
    {
      title: "Full Stack Web Developer",
      description:
        "I spearheaded project planning and development as a Full Stack Developer, and led a team to develop compelling websites.",
      year: "2022 - 2023",
      company: "Sirius Creative",
    },
    {
      title: "Full Stack Web Developer Intern",
      description:
        "I used HTML, CSS, JavaScript, Bootstrap, PHP, and secure SQL to build websites that made the company work better, kept our data safe, and easy to get to.",
      year: "Mar 2022 - May 2022",
      company: "Rumahweb Indonesia",
    },
    {
      title: "Laboratory Assistant",
      description:
        "Conducted practical courses, created quizzes, and evaluated assignments to support student learning.",
      year: "2021 - 2023",
      company: "Pembangunan Nasional 'Veteran' University Yogyakarta",
    },
  ];

  return (
    <motion.div
      className="h-full overflowx-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full lg:flex justify-center" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="w-full h-fit p-8 sm:p-16 md:p-20 xl:py-20 flex flex-col lg:w-2/3 gap-40 md:gap-60">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              unoptimized
              src="/profile-pict.webp"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-32 md:h-52 lg:h-60 object-cover object-top"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-md lg:text-lg">
              I am a fresh graduate with a Bachelor's degree in Informatics from
              Universitas Pembangunan Nasional 'Veteran' Yogyakarta,
              specializing in Web Development. With experience as a Full-Stack
              Web Developer at Sirius Creative and an Internship at Rumahweb
              Indonesia, I have honed strong technical skills in front-end
              frameworks such as Next.js and React.js. My analytical skills and
              problem-solving abilities were further sharpened during my tenure
              as a Laboratory Assistant at UPN 'Veteran' Yogyakarta. I am
              dedicated to producing clean and efficient code, thrive in both
              collaborative and independent environments, and consistently
              strive for integrity and excellence in every project.
            </p>
            {/* BIOGRAPHY SCROLL SVG */}
            <ScrollSVG />
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded py-2 px-4 text-md lg:text-xl cursor-pointer ring-1 ring-black bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <ScrollSVG />
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="md:flex flex-col gap-12 justify-center pb-48 hidden"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-600px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-600px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-50">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white pe-1 pb-1 md:pe-2 md:pb-2 font-semibold rounded-b-lg rounded-s-lg">
                    {experiences[0].title}
                  </div>
                  {/* JOB DESC */}
                  <div className="pe-1 pb-1 md:pe-2 md:pb-2 text-sm italic">
                    {experiences[0].description}
                  </div>
                  {/* JOB DATE */}
                  <div className="pe-1 pb-1 md:pe-2 md:pb-2 text-blue-600 text-sm font-semibold">
                    {experiences[0].year}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="pe-1 pb-1 md:pe-2 md:pb-2 rounded bg-white text-sm font-semibold w-fit">
                    {experiences[0].company}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-600 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-50">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-600 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white pe-1 pb-1 md:pe-2 md:pb-2 font-semibold rounded-b-lg rounded-s-lg">
                    {experiences[1].title}
                  </div>
                  {/* JOB DESC */}
                  <div className="pe-1 pb-1 md:pe-2 md:pb-2 text-sm italic">
                    {experiences[1].description}
                  </div>
                  {/* JOB DATE */}
                  <div className="pe-1 pb-1 md:pe-2 md:pb-2 text-blue-600 text-sm font-semibold">
                    {experiences[1].year}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="pe-1 pb-1 md:pe-2 md:pb-2 rounded bg-white text-sm font-semibold w-fit">
                    {experiences[1].company}
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-50">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white pe-1 pb-1 md:pe-2 md:pb-2 font-semibold rounded-b-lg rounded-s-lg">
                    {experiences[2].title}
                  </div>
                  {/* JOB DESC */}
                  <div className="pe-1 pb-1 md:pe-2 md:pb-2 text-sm italic">
                    {experiences[2].description}
                  </div>
                  {/* JOB DATE */}
                  <div className="pe-1 pb-1 md:pe-2 md:pb-2 text-blue-600 text-sm font-semibold">
                    {experiences[2].year}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="pe-1 pb-1 md:pe-2 md:pb-2 rounded bg-white text-sm font-semibold w-fit">
                    {experiences[2].company}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-600 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48 md:hidden"
            ref={experienceMobRef}
          >
            {/* EXPERIENCE TITLE MOBILE */}
            <motion.h1
              initial={{ x: "-600px" }}
              animate={isExperienceMobRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {experiences.map((experience) => (
              <motion.div
                className="w-full ring-1 ring-gray-100 py-6 px-10 rounded-lg shadow-xl"
                initial={{ x: "-600px" }}
                animate={isExperienceMobRefInView ? { x: "0" } : {}}
                key={experience.title}
              >
                {/* JOB TITLE */}
                <h1 className="card-title text-lg font-bold">
                  {experience.title}
                </h1>
                {/* JOB COMPANY */}
                <div className="pe-1 pb-1 md:pe-2 md:pb-2 rounded bg-white text-sm font-semibold w-fit">
                  {experience.company}
                </div>
                {/* JOB DATE */}
                <div className="pe-1 pb-1 md:pe-2 md:pb-2 text-blue-600 text-sm font-semibold">
                  {experience.year}
                </div>
                {/* JOB DESC */}
                <p className="text-sm italic">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SVG CONTAINER */}
        {/* <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div> */}
      </div>
    </motion.div>
  );
};

export default AboutPage;
