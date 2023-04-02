import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

function Ecosystem() {
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
          <div className="md:mx-32">
            {/**Title */}
            <div className="grid justify-items-center">
              <h1 className="text-3xl font-bold">The Build.</h1>
              <p className="mt-5 text-justify">
                We are solution based 21st technology based company aiming to
                bring the right help through technology.
              </p>
            </div>

            {/**Grid Section */}
            <div className="mt-10 pb-20 grid justify-items-evenly">
              {/**Grid Segment one */}
              <div className="grid  grid-cols-1 gap-20 md:grid-cols-3">
                <div className="grid justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded">
                  <div className="pt-8 pb-5">
                    <img
                      className="motion-safe:animate-spin h-24"
                      src={logo}
                      alt="UAbout"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-6xl text-pink-500 drop-shadow-lg pr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-8 h-8"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm0 4.5A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm15-.75A.75.75 0 0118 9v10.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V9a.75.75 0 01.75-.75zm-15 5.25a.75.75 0 01.75-.75h9.75a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <h1 className="text-xl font-bold uppercase">
                      MIGRATION V2
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-5">
                    <div className="w-full max-w-sm px-4">
                      <label
                        for="swap"
                        className="block font-medium text-gray-700 text-center"
                      >
                        SUCCOR V1
                      </label>
                      <input
                        type="number"
                        className="mt-1 text-center py-2 px-1 block w-full rounded-full border-gray-300 shadow-sm border-pink-500/75  focus:outline-none "
                      />
                    </div>
                  </div>
                  <span className="flex pt-3">
                    <button
                      onClick={() => {
                        navigate("./Documents");
                      }}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Swap
                    </button>
                  </span>
                </div>
                <div className="flex flex-col justify-center md:justify-items-start justify-items-center col-span-2">
                  <h1 className="text-4xl  font-bold md:text-5xl">Swap Ease</h1>
                  <p className="mt-5 object-contain text-justify font-medium text-slate-900">
                    Simplifying migration from SUCCOR V1 to SUCCOR V2.
                  </p>
                  <span className="flex pt-3">
                    <button
                      onClick={() => {
                        navigate("./Documents");
                      }}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Swap
                    </button>
                  </span>
                </div>
              </div>
              {/**Grid Segment one close*/}
              {/**Grid Segment two */}
              <div className="grid  grid-cols-1 gap-20 md:grid-cols-3 mt-10">
                <div className="md:order-first order-last flex flex-col justify-center  items-end md:justify-items-start justify-items-center col-span-2">
                  <h1 className="text-4xl  font-bold md:text-5xl">
                    Join the community
                  </h1>
                  <p className="mt-5 object-contain text-justify font-medium text-slate-900">
                    Be among the pioneers to enjoy ever bullish.
                  </p>
                  <span className="flex pt-3">
                    <button
                      onClick={() => {
                        navigate("./Documents");
                      }}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Go.
                    </button>
                  </span>
                </div>
                <div className="grid justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded items-center">
                  <div className="pt-8 pb-5">
                    <img
                      className="motion-safe:animate-spin h-24"
                      src={logo}
                      alt="UAbout"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-6xl text-pink-500 drop-shadow-lg pr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
                    </span>
                    <h1 className="text-xl font-bold uppercase">Airdrop</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-5">
                    <div className="w-full max-w-sm px-4">
                      <label
                        for="swap"
                        className="block font-medium text-gray-700 text-center"
                      >
                        SUCCOR V2
                      </label>
                      <input
                        type="number"
                        placeholder="200000"
                        disabled
                        className="read-only mt-1 text-center py-2 px-1 block w-full rounded-full border-gray-300 shadow-sm border-pink-500/75  focus:outline-none "
                      />
                    </div>
                  </div>
                  <span className="flex pt-3">
                    <button
                      onClick={() => {
                        navigate("./Documents");
                      }}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Claim
                    </button>
                  </span>
                </div>
              </div>
              {/**Grid Segment two close */}
              {/**Grid Segment three  */}
              <div className="grid  grid-cols-1 gap-20 md:grid-cols-3 mt-10">
                <div className="grid justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded">
                  <div className="pt-8 pb-5">
                    <img
                      className="motion-safe:animate-spin h-24"
                      src={logo}
                      alt="UAbout"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-6xl text-pink-500 drop-shadow-lg pr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                    </span>
                    <h1 className="text-xl font-bold uppercase">STAKE</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-5">
                    <div className="w-full max-w-sm px-4">
                      <label
                        for="swap"
                        className="block font-medium text-gray-700 text-center"
                      >
                        APY : 45%
                      </label>
                      <input
                        type="number"
                        className="mt-1 text-center py-2 px-1 block w-full rounded-full border-gray-300 shadow-sm border-pink-500/75  focus:outline-none "
                      />
                    </div>
                  </div>
                  <span className="flex pt-3">
                    <button
                      onClick={() => {
                        navigate("./Documents");
                      }}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Stake
                    </button>
                  </span>
                </div>
                <div className="flex flex-col justify-center md:justify-items-start justify-items-center col-span-2">
                  <h1 className="text-4xl  font-bold md:text-5xl">Earn Ease</h1>
                  <p className="mt-5 object-contain text-justify font-medium text-slate-900">
                    Get high yields from your own bank with best APYs.
                  </p>
                  <span className="flex pt-3">
                    <button
                      onClick={() => {
                        navigate("./Documents");
                      }}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Go.
                    </button>
                  </span>
                </div>
              </div>

              {/**Grid Segment three close */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
