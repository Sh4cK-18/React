import React from "react";
import { Link } from "react-router-dom";

export default function NoFoundPage() {
  return (
    <div className="w-full h-[100vh] bg-[#1e1b4b] grid items-center p-10">
      <div className="text-center flex flex-wrap flex-col gap-8">
        <h1 className="text-4xl font-thin text-white">
          Upps something went wrong
        </h1>

        <p className="text-lg text-gray-300">
          Take a cup of coffee and try again later ☕
        </p>

        <Link to="/">
          <button
            type="button"
            class="text-gray-300 bg-transparent border border-gray-300 focus:outline-none font-bold rounded-full text-sm px-5 py-2 text-center mr-2 mt-3 hover:border-[#00754a] hover:text-[#00754a]"
          >
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
