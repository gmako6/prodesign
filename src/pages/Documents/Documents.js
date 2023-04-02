import React from "react";
import { Footer, NavBar } from "../../components";
import { About, UAbout } from "../../contents";

function Documents() {
  return (
    <div>
      <NavBar />
      <h1>This is Documents page</h1>
      <About />
      <UAbout />
      <Footer />
    </div>
  );
}

export default Documents;
