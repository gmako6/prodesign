import React from "react";
import { Mint, NavBar, Footer } from "../../components";
import { About, UAbout } from "../../contents";

function Marketplace() {
  return (
    <div className="pb-60 bg-[url('./assets/contentImages/layered-peaks.svg')] bg-no-repeat bg-cover">
      <NavBar />
      <div className="md:pt-32 pt-5"></div>
      <Footer />
    </div>
  );
}

export default Marketplace;
