import React from "react";
import logo from "../../assets/logo/logo.svg";
import { useNavigate } from "react-router-dom";

function UAbout() {
  //Function to trigger page route
  let navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="mt-20 pl-5 pr-5 md:pl-0 md:pr-0 ">
        {/**About Succorcoin */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
          {/*RightSide of the Section */}
          <div className="">
            <img
              className="motion-safe:animate-spin h-42"
              src={logo}
              alt="UAbout"
            />
          </div>

          {/*LeftSide of the Section */}
          <div className="md:col-span-2 pl-5 pr-5 md:pl-10 md:pr-10 pt-12 pb-12 bg-red-100  grid justify-items-center md:justify-items-start justify-center rounded-br-3xl rounded-tl-3xl bg-opacity-40">
            <h1 className="text-4xl  font-medium md:text-5xl">
              Revolutionary Token On BSC Network
            </h1>
            <p className="mt-3 object-contain text-justify text-slate-800">
              The first BEP-20 token in the Binance Smart Chain network with
              unique algorithm and technical functions such as Automatic
              Rewards, Buyback, Contribution, Zero Fees & Burning Coin at
              transaction. A renounced coin contract where the public have
              complete ownership and control of the contract, to assure
              longevity of the project through community ownership.
            </p>
            <div className="flex pt-3">
              <button
                onClick={() => {
                  navigate("./Fundraiser");
                }}
                className="py-3 px-10 m-2 md:mt-5 text-m md:flex border-2 border-pink-500 text-pink-500 hover:bg-gradient-to-r from-pink-500 to-fuchsia-400  rounded-full shadow-lg hover:text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse animate-pulse"
              >
                Donate
              </button>
              <button
                onClick={() => {
                  navigate("./Documents");
                }}
                className="py-3 px-10 m-2 md:mt-5 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
              >
                WhitePaper
              </button>
            </div>
          </div>
        </div>

        {/** Succorcoin Tokenomics*/}
        <div className="mt-10 grid justify-items-evenly">
          <div className="grid  grid-cols-1 gap-6 md:grid-cols-4">
            <div className="grid justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded">
              <div className="flex justify-between">
                <span className="text-6xl text-pink-500 drop-shadow-lg pr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                  </svg>
                </span>
                <div className="">
                  <h1 className="text-lg font-bold uppercase">Total Supply</h1>
                  <p className="mt-2 text-center text-slate-800">
                    100,000,000,000
                  </p>
                </div>
              </div>
            </div>
            <div className="grid justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded">
              <div className="flex justify-between">
                <span className="text-6xl text-pink-500 drop-shadow-lg pr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                  </svg>
                </span>
                <div className="">
                  <h1 className="text-lg font-bold uppercase">
                    Circulating Supply
                  </h1>
                  <p className="mt-2 text-center text-slate-800">
                    100,000,000,000
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="grid justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded">
              <div className="flex justify-between">
                <span className="text-6xl text-pink-500 drop-shadow-lg pr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                  </svg>
                </span>
                <div className="">
                  <h1 className="text-lg font-bold uppercase">Burned Tokens</h1>
                  <p className="mt-2 text-center text-slate-800">
                    100,000,000,000
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="grid justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded">
              <div className="flex justify-between">
                <span className="text-6xl text-pink-500 drop-shadow-lg pr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                  </svg>
                </span>
                <div className="">
                  <h1 className="text-lg font-bold uppercase">Locked Tokens</h1>
                  <p className="mt-2 text-center text-slate-800">
                    100,000,000,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UAbout;
