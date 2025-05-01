import React from 'react';
import { NavLink } from 'react-router'; // Corrected import
import abhiImage from '../assets/abhi.jpg';

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto text-white">
      <div className="mx-auto w-full flex justify-center items-center flex-col lg:flex-row gap-16">

        {/* Text Section */}
        <div className="w-screen lg:w-160 px-5 lg:px-0">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span>⚡</span> About Me
          </h2>
          <NavLink
            to="/about"
            className="text-blue-400 mt-2 inline-block hover:underline"
            onClick={() => window.scrollTo(0, 0)}
          >
            Explore more about my Technical skills →
          </NavLink>

          <p className="my-4 text-gray-400">
            Hey! I'm Abhinaba Mukherjee from Bankura, West Bengal.  
            I'm a passionate Computer Science student currently pursuing B.Tech at Dr. B. C. Roy Engineering College (GPA: 8.82).
          </p>
          <p className="mb-4 text-gray-400">
            I have a strong interest in software development, frontend technologies, and building scalable web applications.  
            Recently, I completed a Web Development Internship at <span className="text-blue-400">Webel Fujisoft Vara COE</span> where I developed "Hold My CV", an award-winning project focused on CV building and management.
          </p>
          <p className="mb-4 text-gray-400">
            I'm continuously learning and enhancing my skills in <span className="text-blue-400">React.js</span>, <span className="text-blue-400">Tailwind CSS</span>, and <span className="text-blue-400">MySQL</span>.  
            I’m highly motivated to contribute, collaborate, and grow in a dynamic environment.
          </p>
          <p className="text-gray-400">
            Outside of coding, I love exploring AI tools, macro photography, meditation, and spending time teaching and learning new things!
          </p>

        </div>

        {/* Image Section */}
        <div className="p-10 md:w-100">
          <div className="relative flex justify-center">
            <img
              src={abhiImage}
              alt="Abhinaba Mukherjee"
              className="rounded-full aspect-square max-h-60 sm:max-h-90 sm:max-w-90 object-cover shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
