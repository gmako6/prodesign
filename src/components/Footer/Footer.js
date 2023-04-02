import React from "react";
import brandline from "../../assets/logo/brandline.svg";
import "./Footer.css";
import {
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
  FaMediumM,
  FaGithub,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa";
import { SocialMedias } from "../../components";
import { useNavigate } from "react-router-dom";

function Footer() {
  //Function to trigger page route
  let navigate = useNavigate();

  return (
    <div className="mx-auto bottom-0 left-0 bg-[url('./assets/contentImages/blob-scatter.svg')] bg-no-repeat bg-cover @apply backdrop-blur-2xl bg-opacity-50 w-full ">
      <div className="pl-5 pr-5 pt-20 pb-20 md:pr-20 md:pl-20  text-black text-bold">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Brand Logo */}
          <div className="col-span-2">
            <a href="./">
              <img src={brandline} alt="logo" />
            </a>
          </div>
          <div className="md:pl-10">
            <h2 class="underline decoration-4 uppercase font-bold decoration-fuchsia-700 tracking-wide mb-2">
              About
            </h2>
            <ul>
              <li className="hover:indent-1.5">
                <a href="/">Home</a>
              </li>
              <li className="hover:indent-1.5">
                <a href="https://succorcoin.com#Roadmap">Roadmap</a>
              </li>
              <li className="hover:indent-1.5">
                <a href="https://succorcoin.com#Tokenomics">Tokenomics</a>
              </li>
              <li className="hover:indent-1.5">
                <a
                  href="/Careers"
                  onClick={() => {
                    navigate("./Careers");
                  }}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 class="underline decoration-4 uppercase font-bold decoration-fuchsia-700 tracking-wide mb-2">
              Important
            </h2>
            <ul>
              <li className="hover:indent-1.5">
                <a
                  href="/Stacking"
                  onClick={() => {
                    navigate("./Earn");
                  }}
                >
                  Earn
                </a>
              </li>
              <li className="hover:indent-1.5">
                <a
                  href="/Fundraiser"
                  onClick={() => {
                    navigate("./Fundraiser");
                  }}
                >
                  Fundraiser
                </a>
              </li>
              <li className="hover:indent-1.5">
                <a
                  href="/Documents"
                  onClick={() => {
                    navigate("./Documents");
                  }}
                >
                  Documents
                </a>
              </li>
              <li className="hover:indent-1.5">
                <a
                  href="/Marketplace"
                  onClick={() => {
                    navigate("./Marketplace");
                  }}
                >
                  NFT Marketplace
                </a>
              </li>
            </ul>
          </div>
          {/* Get in Touch */}
          <div className="">
            <h2 class="underline decoration-4 uppercase font-bold decoration-fuchsia-700 tracking-wide mb-2">
              Get In Touch
            </h2>
            <p className="hover:indent-1.5 ">
              <a href="mailto:info@succorcoin.com">info@succorcoin.com</a>
            </p>
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
        </div>
      </div>
      <div className="bg-gradient-to-l from-[#141E30] to-[#243B55] p-5 md:pr-20 md:pl-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
          <div className="text-white md:flex md:justify-start ">
            Copyright © {new Date().getFullYear()}.All rights reserved.
          </div>
          <div className="text-white md:flex md:justify-end ">
            Made ♥️ SC-Devs.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
