// import React from "react";
import { FaGithub, FaLinkedin, FaPinterest,FaFilePdf } from "react-icons/fa6";
function Header() {
  return (
    <header className="w-full fixed top-0 z-50 text-gray-600 bg-transparent">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="text-pink-500 text-4xl"><FaPinterest/></span>
          <span className="text-xl text-white uppercase">Prakash</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-evenly md:w-1/2 sm:w-4/5 p-2 bg-gray-500 rounded-full bg-opacity-30">
          <a className="text-white uppercase font-bold hover:text-blue-300 hover:cursor-pointer">Home</a>
          <a className="text-white uppercase font-bold hover:text-blue-300 hover:cursor-pointer">About</a>
          <a className="text-white uppercase font-bold hover:text-blue-300 hover:cursor-pointer">Projects</a>
          <a className="text-white uppercase font-bold flex items-center gap-1 hover:text-blue-300 hover:cursor-pointer"><FaGithub /> Github</a>
          <a className="text-white uppercase font-bold flex items-center gap-1 hover:text-blue-300 hover:cursor-pointer"><FaLinkedin /> LinkedIn</a>
        </nav>
        <div className="action-btn flex gap-2">
        <button className="inline-flex items-center bg-pink-500 border-0 py-1.5 transition-all px-5 focus:outline-none hover:bg-pink-300 rounded-full text-base text-white mt-4 md:mt-0">
          Hire Me
        </button>
        <button className="inline-flex items-center gap-2 bg-pink-500 border-0 py-1.5 transition-all px-5 focus:outline-none hover:bg-pink-300 rounded-full text-base text-white mt-4 md:mt-0">
        <FaFilePdf /> Download CV
        </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
