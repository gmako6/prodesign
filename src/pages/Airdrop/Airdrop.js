import React from "react";
import { Footer, NavBar } from "../../components";
import { About, UAbout } from "../../contents";

function Airdrop() {
  return (
    <div className="w-full">
      <NavBar />
      <About />
      <UAbout />
      <h1>This is Airdrop page</h1>
      <Footer />
    </div>
  );
}

export default Airdrop;
