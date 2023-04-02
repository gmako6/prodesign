import React from "react";
import { Footer, NavBar } from "../../components";
import { About, UAbout } from "../../contents";

function ErrorPage() {
  return (
    <div>
      <NavBar />
      <h1>This is ErrorPage page</h1>
      <About />
      <UAbout />
      <Footer />
    </div>
  );
}

export default ErrorPage;
