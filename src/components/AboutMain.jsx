import React from 'react';
import abhiImage from '../assets/abhi.jpg';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGithub, FaGit } from 'react-icons/fa'; 
import { SiTailwindcss } from 'react-icons/si'; // TailwindCSS icon
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'; // GeeksforGeeks & Leetcode icons

const AboutMain = () => {
  return (
    <section id='about' className=" mmax-w-6xl mx-auto text-white pt-25 lg:pt-30">
      <div className="mx-auto w-full flex justify-center items-center flex-col lg:flex-row lg:gap-30">
        {/* Text Section */}
      <div className="w-screen lg:w-160 px-5 lg:px-4">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 flex items-center gap-2 ">
          <span>⚡</span> About Me
        </h1>
        <p className="my-4 text-gray-400">
            A passionate <span className="text-blue-400 font-semibold">Frontend Developer</span> with strong skills in
            <span className="text-blue-400"> HTML</span>, <span className="text-blue-400">CSS</span>,
            <span className="text-blue-400"> JavaScript</span>, and frameworks like
            <span className="text-blue-400"> ReactJS</span> and <span className="text-blue-400">Tailwind CSS</span>.
            I also have a solid programming foundation in
            <span className="text-blue-400"> C</span>, <span className="text-blue-400">C++</span>, and
            <span className="text-blue-400"> Java</span>. I’ve built several projects including a
            <span className="text-blue-400 font-medium"> fully responsive developer portfolio</span>,
            <span className="text-blue-400 font-medium"> Hold My CV</span> – a resume builder, and
            <span className="text-blue-400 font-medium"> Dev Detective</span> – a GitHub user data scraper for quick profile overviews.
            While my current focus is on <span className="text-blue-400">frontend development</span>, I’m actively learning
            <span className="text-blue-400"> backend technologies</span> to become a
            <span className="text-blue-400 font-semibold"> Full Stack Developer</span>.
            I'm seeking opportunities to grow and contribute to impactful tech projects.
          </p>
          <p className="text-gray-400">
            Outside of coding, I love exploring AI tools, macro photography, meditation, and spending time teaching and learning new things!
          </p>

        {/* Skills Section */}
        <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-6">
            
              <div className="flex flex-col items-center">
                <FaHtml5 size={50} className="text-orange-500" />
                <p className="mt-2 text-gray-300 text-sm">HTML</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt size={50} className="text-blue-500" />
                <p className="mt-2 text-gray-300 text-sm">CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJs size={50} className="text-yellow-400" />
                <p className="mt-2 text-gray-300 text-sm">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss size={50} className="text-teal-400" />
                <p className="mt-2 text-gray-300 text-sm">TailwindCSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact size={50} className="text-blue-600" />
                <p className="mt-2 text-gray-300 text-sm">ReactJS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaDatabase size={50} className="text-blue-800" />
                <p className="mt-2 text-gray-300 text-sm">MySQL</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub size={50} className="text-white" />
                <p className="mt-2 text-gray-300 text-sm">GitHub</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGit size={50} className="text-white" />
                <p className="mt-2 text-gray-300 text-sm">Git</p>
              </div>
            </div>
          </div>

          {/* GeeksForGeeks and Leetcode Links */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">I Love Solving Problems on</h3>
            <div className="flex gap-6">
              <a 
                href="https://www.geeksforgeeks.org/user/abhinaba2048/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-gray-600 hover:bg-gray-600 transition text-white"
              >
                <SiGeeksforgeeks size={24} className="text-green-500" />
                GeeksforGeeks
              </a>
              <a 
                href="https://leetcode.com/u/abhinaba1289/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" flex items-center gap-2 px-4 py-2 rounded-xl border-2  border-gray-600 hover:bg-gray-600 transition text-white"
              >
                <SiLeetcode size={24} className="text-orange-500 " />
                Leetcode
              </a>
            </div>
          </div>

      </div>

      {/* Image Section */}
      <div className=" p-10 md:w-100 0">
        <div className="relative flex justify-center">
          <img
            src={abhiImage}
            alt="Abhinaba Mukherjee"
            className="rounded-full aspect-square max-h-60   sm:max-h-90 sm:max-w-90 object-cover shadow-lg "
          />
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default AboutMain;
