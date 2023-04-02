import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import logo from "../../assets/logo/logo.svg";
import "@splidejs/react-splide";

function Roadmap() {
  return (
    <div className=" pl-5 pr-5 md:pl-0 md:pr-0 ">
      <div className="pl-5 pr-5 pt-20 pb-20 md:pr-20 md:pl-20 bg-gradient-to-l from-[#ffffff] via-[#D3D3D3] to-[#ece9e6] text-black text-bold">
        <div className="container mx-auto">
          <div>
            <Splide
              hasTrack={true}
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                focus: "center",
                gap: "2rem",
                breakpoints: {
                  786: {
                    perPage: 2,
                    gap: "0.5rem",
                  },
                  576: {
                    perPage: 1,
                    gap: "0.5rem",
                  },
                },
              }}
              className="sliderDiv"
            >
              <SplideSlide>
                <div className=" justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded items-center">
                  <img src="" alt="Be man1" />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
