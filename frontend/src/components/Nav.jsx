import React from "react";

const Nav = ({ mode, setMode }) => {
  return (
    <div className="h-[60px] flex justify-between items-center z-50 fixed max-w-[1600px] w-full px-5 bg-[#f0f0f0]">
      <div>
        <a href="#" className="cursor-pointer text-xl text-primary font-bold mr-5">
          Dependency Manager
        </a>

        <button className="font-bold py-2 px-4 rounded bg-[#a8323e] text-white">Upload</button>
      </div>

      <div className="flex gap-x-5">
        {/* Maven Button */}
        <button
          onClick={() => setMode("mvn")}
          className={`font-bold py-2 px-4 rounded ${
            mode === "mvn" ? "bg-primary text-white" : "bg-white text-primary"
          }`}>
          Maven
        </button>

        {/* NPM Button */}
        <button
          onClick={() => setMode("npm")}
          className={`font-bold py-2 px-4 rounded ${
            mode === "npm" ? "bg-primary text-white" : "bg-white text-primary"
          }`}>
          NPM
        </button>
      </div>
    </div>
  );
};

export default Nav;
