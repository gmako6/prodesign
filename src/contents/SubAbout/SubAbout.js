import React from "react";

function SubAbout() {
  return (
    <div className="container mx-auto  md:relative md:-mt-40">
      <div className="mt-10 pl-5 pr-5 md:pl-0 md:pr-0 md:ml-20 md:mr-20">
        <div className="grid justify-items-evenly ">
          <div className="grid  grid-cols-1 gap-6 md:-gap-6 md:grid-cols-3 md:rounded-lg md:p-10 @apply md:bg-white md:backdrop-blur-3xl md:bg-opacity-50  ">
            {/*Card One*/}
            <div className="grid justify-items-left bg-slate-100 p-7 hover:drop-shadow-md shadow-lg">
              <span className="text-3xl text-fuchsia-400  drop-shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
              <h1 className="mt-3 text-lg font-bold uppercase">
                Charity Fundraiser
              </h1>
              <p className="mt-2 text-left">
                We find solution patterns, evaluates them for efficacy, and
                modifies or replaces them with approaches that work.
              </p>
            </div>

            {/*Card Two*/}
            <div className="grid justify-items-left bg-slate-100 p-7 hover:drop-shadow-md">
              <span className="text-3xl text-fuchsia-400  drop-shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </span>
              <h1 className="mt-3 text-lg font-bold uppercase">
                NFT Marketplace
              </h1>
              <p className="mt-2 text-left">
                We find solution patterns, evaluates them for efficacy, and
                modifies or replaces them with approaches that work.
              </p>
            </div>

            {/*Card Three*/}
            <div className="grid justify-items-left bg-slate-100 p-7 hover:drop-shadow-md shadow-lg">
              <span className="text-3xl text-fuchsia-400  drop-shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <h1 className="mt-3 text-lg font-bold uppercase">Earn</h1>
              <p className="mt-2 text-left">
                We find solution patterns, evaluates them for efficacy, and
                modifies or replaces them with approaches that work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubAbout;
