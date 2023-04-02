import React, { useRef, useState } from "react";
import logo from "../../assets/logo/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Roadmap() {
  return (
    <div className=" pl-5 pr-5 md:pl-0 md:pr-0 ">
      <div className="pl-5 pr-5 pt-20 pb-20 md:pr-20 md:pl-20 bg-gradient-to-l from-[#ffffff] via-[#D3D3D3] to-[#ece9e6] text-black text-bold">
        <div className="container mx-auto">
          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
            >
              <SwiperSlide>
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
                      onClick={() => {}}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Claim
                    </button>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      onClick={() => {}}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Claim
                    </button>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      onClick={() => {}}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Claim
                    </button>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      onClick={() => {}}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Claim
                    </button>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      onClick={() => {}}
                      className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
                    >
                      Claim
                    </button>
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
