import React from "react";
import { NavBar, Footer } from "../../components";
import {
  About,
  Intro,
  Ecosystem,
  Roadmap,
  SubAbout,
  UAbout,
  PFolio,
} from "../../contents";

function Home() {
  return (
    <div className="">
      <NavBar />
      <Intro />
      <SubAbout />
      <About />
      <UAbout />
      <Ecosystem />
      {/* <Savs /> */}
      <Roadmap />
      {/*</div>*/}
      <PFolio />
      {/*<ContactUs />*/}

      <Footer />
    </div>
  );
}

export default Home;
