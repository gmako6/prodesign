import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

function Savs() {
  //Function to trigger page route
  let navigate = useNavigate();

  return (
    <div className=" mb-0 md:pl-0 md:pr-0 ">
      {/**Top SVG */}
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 500"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#a855f7ff"></stop>
            <stop offset="95%" stop-color="#ec4899ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 C 0,500 0,250 0,250 C 55.44753313696613,258.9710972017673 110.89506627393226,267.94219440353464 175,287 C 239.10493372606774,306.05780559646536 311.86726804123714,335.2023195876289 367,302 C 422.13273195876286,268.7976804123711 459.6358615611192,173.2485272459499 516,160 C 572.3641384388808,146.7514727540501 647.5892857142857,215.80357142857142 706,223 C 764.4107142857143,230.19642857142858 806.006995581738,175.53718703976432 866,182 C 925.993004418262,188.46281296023568 1004.3827319587629,256.0476804123711 1072,289 C 1139.6172680412371,321.9523195876289 1196.4620765832105,320.27209131075114 1256,308 C 1315.5379234167895,295.72790868924886 1377.7689617083947,272.8639543446244 1440,250 C 1440,250 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
      {/**Top SVG */}

      <div className="pl-5 pr-5 bg-gradient-to-r from-purple-500 to-pink-500 relative md:-mt-32">
        <div className="container mx-auto">
          <div className="">
            <div className="grid justify-items-center">
              <h1 className="text-3xl font-bold ">Succor Cards</h1>
              <p className="mt-5">
                We are solution based 21st technology based company aiming to
                bring the right help through technology.
              </p>
            </div>
            <div className="mt-10 grid justify-items-evenly">
              <div className="grid  grid-cols-1 gap-6 md:grid-cols-4">
                <div className="drop-shadow-md rounded-br-3xl rounded-tl-3xl @apply bg-white backdrop-blur-4xl bg-opacity-50 ">
                  <img
                    className="rounded-br-3xl rounded-tl-3xl drop-shadow mt-7 ml-7 mr-7"
                    src={logo}
                    alt="succor-card"
                  />
                  <div className="grid justify-items-center pt-7 pr-5 pl-5 pb-0">
                    <h1 className=" text-lg text-[#c1262d] font-bold uppercase">
                      True Love
                    </h1>
                    <p className="mt-2 text-center text-sm">
                      The real heart that guides pure Love.
                    </p>
                    <div className="flex-col font-bold">
                      {/*
                      <p className="mt-2 text-center text-sm">
                        Owner: 0x47dsh... .
                      </p>
                    */}
                      <p className="mt-2 text-center text-sm">
                        Price: 0.05 BNB
                      </p>
                    </div>
                    <div className="-mt-8">
                      <button
                        onClick={() => {
                          navigate("./Projects");
                        }}
                        className="py-2 px-8  mt-12 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 animate-pulse"
                      >
                        BUY / MINT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="drop-shadow-md rounded-br-3xl rounded-tl-3xl @apply bg-white backdrop-blur-4xl bg-opacity-50 ">
                  <img
                    className="rounded-br-3xl rounded-tl-3xl drop-shadow mt-7 ml-7 mr-7"
                    src={logo}
                    alt="succor-card"
                  />
                  <div className="grid justify-items-center pt-7 pr-5 pl-5 pb-0">
                    <h1 className=" text-lg text-[#c1262d] font-bold uppercase">
                      Give Love
                    </h1>
                    <p className="mt-2 text-center text-sm">
                      Company briefing, details and services
                    </p>
                    <div className="flex-col font-bold">
                      {/*
                      <p className="mt-2 text-center text-sm">
                        Owner: 0x47dsh... .
                      </p>
                    */}
                      <p className="mt-2 text-center text-sm">
                        Price: 0.05 BNB
                      </p>
                    </div>
                    <div className="-mt-8">
                      <button
                        onClick={() => {
                          navigate("./Projects");
                        }}
                        className="py-2 px-8  mt-12 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 animate-pulse"
                      >
                        BUY / MINT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="drop-shadow-md rounded-br-3xl rounded-tl-3xl @apply bg-white backdrop-blur-4xl bg-opacity-50 ">
                  <img
                    className="rounded-br-3xl rounded-tl-3xl drop-shadow mt-7 ml-7 mr-7"
                    src={logo}
                    alt="succor-card"
                  />
                  <div className="grid justify-items-center pt-7 pr-5 pl-5 pb-0">
                    <h1 className=" text-lg text-[#c1262d] font-bold uppercase">
                      Give Hope
                    </h1>
                    <p className="mt-2 text-center text-sm">
                      Company briefing, details and services
                    </p>
                    <div className="flex-col font-bold">
                      {/*
                      <p className="mt-2 text-center text-sm">
                        Owner: 0x47dsh... .
                      </p>
                    */}
                      <p className="mt-2 text-center text-sm">
                        Price: 0.05 BNB
                      </p>
                    </div>
                    <div className="-mt-8">
                      <button
                        onClick={() => {
                          navigate("./Projects");
                        }}
                        className="py-2 px-8  mt-12 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 animate-pulse"
                      >
                        BUY / MINT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="drop-shadow-md rounded-br-3xl rounded-tl-3xl @apply bg-white backdrop-blur-4xl bg-opacity-50 ">
                  <img
                    className="rounded-br-3xl rounded-tl-3xl drop-shadow mt-7 ml-7 mr-7"
                    src={logo}
                    alt="succor-card"
                  />
                  <div className="grid justify-items-center pt-7 pr-5 pl-5 pb-0">
                    <h1 className=" text-lg text-[#c1262d] font-bold uppercase">
                      Keep Safe
                    </h1>
                    <p className="mt-2 text-center text-sm">
                      Company briefing, details and services
                    </p>
                    <div className="flex-col font-bold">
                      {/*
                      <p className="mt-2 text-center text-sm">
                        Owner: 0x47dsh... .
                      </p>
                    */}
                      <p className="mt-2 text-center text-sm">
                        Price: 0.05 BNB
                      </p>
                    </div>
                    <div className="-mt-8">
                      <button
                        onClick={() => {
                          navigate("./Projects");
                        }}
                        className="py-2 px-8  mt-12 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 animate-pulse"
                      >
                        BUY / MINT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid justify-items-center">
              <div className="">
                <button
                  onClick={() => {
                    navigate("./Solutions");
                  }}
                  className="py-3 px-10  mt-12 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 animate-pulse"
                >
                  Explore Marketplace
                </button>
              </div>
              <div className="mt-20"></div>
            </div>
          </div>
        </div>
      </div>
      {/**Bottom SVG */}

      {/**Bottom SVG */}
    </div>
  );
}

export default Savs;
