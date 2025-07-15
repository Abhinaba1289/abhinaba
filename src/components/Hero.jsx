import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import EmailBtn from './EmailBtn';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id='home' className="bg-black text-white max-w-6xl mx-auto min-h-170 flex items-center justify-start px-4 ">
      <div
        className={`w-auto text-start transition-all duration-1000 ease-out transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
      >
        <div className="mb-4">
          <p className="text-blue-400 text-2xl font-medium">Hey there!, I'm-</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mt-2">
            Abhinaba Mukherjee<span className="text-white">.</span>
          </h1>
        </div>
        <p className="text-lg md:text-2xl text-gray-400 font-semibold mt-4">
          <span className="text-white">Frontend Developer.</span> Passionate about Full Stack Development.
        </p>

        <div className="mt-6 md:text-xl space-y-2">
          <p className="text-gray-400 flex justify-start items-center gap-2">
            🚀 Learning React.js & Tailwind CSS
          </p>
          <p className="text-gray-400  md:text-xl flex justify-start items-center gap-2">
            💼 Actively seeking Frontend or Software Developer roles
          </p>
        </div>

        <div className="flex justify-start gap-4 mt-8 flex-wrap">
          <a
            href="./updated-resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-900 px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300 font-semibold"
          >
            📄 Resume
          </a>
          <a
            target='_blank'
            href="https://github.com/Abhinaba1289"
            className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub className='text-blue-400' /> Github
          </a>
          <a
            target='_blank'
            href="https://www.linkedin.com/in/abhinaba-mukherjee-13589624a"
            className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <FaLinkedin className='text-blue-400' /> LinkedIn
          </a>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinaba2048@gmail.com"
            className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <MdEmail /> Email
          </a> */}

          <EmailBtn/>

        </div>
      </div>
    </section>
  );
};

export default Hero;
