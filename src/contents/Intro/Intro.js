import React from "react";
import { useNavigate } from "react-router-dom";
import { SocialMedias } from "../../components";
import {
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
  FaMediumM,
  FaGithub,
} from "react-icons/fa";

function Intro() {
  //Function to trigger page route
  let navigate = useNavigate();

  return (
    <div className="md:pb-40  bg-[url('./assets/contentImages/layered-peaks.svg')] bg-no-repeat bg-cover">
      <div className="container mx-auto ">
        <div className="md:pt-24 pt-5"></div>
        <div className=" pl-5 pr-5 md:pl-0 md:pr-0 select-none">
          <div className="md:pt-5 md:pb-5 pt-20 pb-12 grid justify-items-center">
            {/**Headings Here */}
            <h1 className="md:text-md text-black font-bold uppercase">
              Charity on blockchain
            </h1>
            <h1 className="text-center text-3xl mt-5 md:text-6xl font-bold md:pl-20 md:pr-20">
              Automatic Contribution, Burning & Buyback System.
            </h1>

            {/**Social Medias  Here */}
            <p className="mt-5">Join Us</p>
            <div className="">
              <ul className="flex mt-2">
                <SocialMedias
                  icon={<FaTelegramPlane />}
                  href={"https://t.me/succorcoin"}
                />
                <SocialMedias
                  icon={<FaTwitter />}
                  href={"https://twitter.com/succorcoin"}
                />
                <SocialMedias
                  icon={<FaFacebookF />}
                  href={"https://facebook.com/succorcoin"}
                />
                <SocialMedias
                  icon={<FaMediumM />}
                  href={"https://medium.com/@succorcoin"}
                />
                <SocialMedias
                  icon={<FaGithub />}
                  href={"https://github.com/@succorcoin"}
                />
              </ul>
            </div>
            {/**Buttons Here */}
            <div className="flex pt-3">
              <button
                onClick={() => {
                  navigate("./Airdrop");
                }}
                className="py-3 px-10 m-2 md:mt-12 text-m md:flex border-2 border-pink-500 hover:bg-gradient-to-r from-pink-500 to-fuchsia-400  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
              >
                Airdrop
              </button>
              <button
                onClick={() => {
                  navigate("./Marketplace");
                }}
                className="py-3 px-10 m-2 md:mt-12 text-m md:flex bg-gradient-to-r from-pink-500 to-fuchsia-400 hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
              >
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
