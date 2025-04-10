import React from "react";

const Content = () => {
  return (
    <div
      className="h-screen w-full bg-neutral-800 flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <button className="group relative cursor-pointer  text-gray-400 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]  ">
        Subscribe main
        <span className="absolute  inset-x-0 bottom-px bg-gradient-to-r from-trasparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-trasparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-md"></span>
      </button>
    </div>
  );
};

export default Content;
