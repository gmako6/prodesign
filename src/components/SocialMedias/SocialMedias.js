import React from "react";

function SocialMedias(props) {
  return (
    <li className="p-2 rounded-full m-1 bg-gradient-to-r from-pink-500 to-violet-500 hover:shadow transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-105 duration-800 hover:animate-pulse">
      <a href={props.href} className="text-slate-800 text-xl">
        {props.icon}
      </a>
    </li>
  );
}

export default SocialMedias;
