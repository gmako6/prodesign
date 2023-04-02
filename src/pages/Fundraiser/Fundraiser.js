import React from "react";
import { Footer, NavBar } from "../../components";
import { About, UAbout } from "../../contents";

function Fundraiser() {
  return (
    <div>
      <NavBar />
      <h1>This is FundRaiser page</h1>
      <About />
      <UAbout />
      <Footer />
    </div>
  );
}

export default Fundraiser;
