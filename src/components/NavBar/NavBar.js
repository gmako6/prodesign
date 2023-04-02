import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/brandline.svg";

function NavBar() {
  //function to initiate connection
  const connectButton = () => {};

  //Function to trigger page route
  let navigate = useNavigate();

  //NavMenu show
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  //NavMenu State onClick
  const showNavbar = () => {
    isNavbarOpen ? setIsNavbarOpen(false) : setIsNavbarOpen(true);
  };

  //function for navside
  function SidebarPop() {
    return (
      <div className="mt-10 py-1 md:hidden text-center">
        <div
          className={` md:flex md:items-center md:pb-0 md:pt-0 pb-5 pt-6 absolute md:static bg-gradient-to-l from-[#ededed] via-[#d3d3d3] to-[#ededed] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 translate-all duration-800 ease-in`}
        >
          <ul className="md:flex flex-row  gap-6  text-slate-700  md:mr-10 ms:mb-10 pb-3 md:pb-0">
            {/*<li className="drop-shadow-md">Home</li>*/}
            <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
              <Link to="#Tokenomics">Tokenomics</Link>
            </li>
            <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
              <Link to="/Earn">Earn</Link>
            </li>
            <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
              <Link to="/Fundraiser">Fundraiser</Link>
            </li>
            <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
              <Link to="/Marketplace">Marketplace</Link>
            </li>
            <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
              <Link to="#Roadmap">Roadmap</Link>
            </li>
          </ul>

          <button
            onClick={connectButton}
            className="text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l p-2 rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
          >
            Connect
          </button>
        </div>
      </div>
    );
  }

  return (
    <header className="w-full flex justify-between p-5 md:pr-20 md:pl-20 bg-gradient-to-l from-[#ededed] via-[#d3d3d3] to-[#ededed] shadow-md fixed top-0 left-0">
      <div className="cursor-pointer font-bold text-slate-300 flex items-center text-sm">
        <a href="./">
          <img src={logo} alt="logo" className=" origin-left h-8 " />
        </a>
        {/** 
          <span className="pr-2 text-lg">
            <ion-icon name="earth-outline"></ion-icon>
          </span> 
          <span className="pl-2">Pro ProDesign</span>
          */}
      </div>

      {/*Navbar Web Version*/}
      <div
        className={`hidden  md:flex md:items-center md:pb-0 md:pt-0  absolute md:static  md:z-auto z-[-1] md:w-auto md:pl-0 translate-all duration-500 ease-in`}
      >
        <ul className="md:flex flex-row  gap-6  text-slate-700  md:mr-10 ms:mb-10 pb-3 md:pb-0">
          {/*<li className="drop-shadow-md">Home</li>*/}
          <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
            <Link to="#Tokenomics">Tokenomics</Link>
          </li>
          <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
            <Link to="/Earn">Earn</Link>
          </li>
          <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
            <Link to="/Fundraiser">Fundraiser</Link>
          </li>
          <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
            <Link to="/Marketplace">Marketplace</Link>
          </li>
          <li className="hover:underline decoration-4 hover:font-bold decoration-pink-500 hover:text-pink-500">
            <Link to="#Roadmap">Roadmap</Link>
          </li>
        </ul>

        <button
          onClick={() => {
            navigate("./");
          }}
          className="py-1 px-6 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
        >
          Connect
        </button>
      </div>

      {/*NavBar on Mobile Version*/}
      {isNavbarOpen ? SidebarPop() : ""}

      {/*Nav Trigger btn c2e59c f9f047*/}
      <div className="md:hidden flex items-center cursor-pointer">
        <button className="text-fuchsia-700" onClick={() => showNavbar()}>
          {isNavbarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default NavBar;
