import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide";

export const Rp = () => {
  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    breakpoints: {
      1024: {
        perPage: 3,
        gap: "0.5rem",
      },
      786: {
        perPage: 2,
        gap: "0.5rem",
      },
      576: {
        perPage: 1,
        gap: "0.5rem",
      },
    },
  };
  return (
    <div className="container mx-auto">
      <Splide options={splideOptions} className="sliderDiv">
        <SplideSlide>
          <div className=" justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded items-center">
            <img src="" alt="Be man1" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className=" justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded items-center">
            <img src="" alt="Be man2" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className=" justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded items-center">
            <img src="" alt="Be man3" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className=" justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded items-center">
            <img src="" alt="Be man4" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className=" justify-items-center bg-slate-100 p-5 drop-shadow-md ring-offset-2 ring-2 ring-pink-500/75 rounded items-center">
            <img src="" alt="Be man5" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};
