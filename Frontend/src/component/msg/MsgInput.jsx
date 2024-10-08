import React from "react";
import { BsSend } from "react-icons/bs";

const MsgInput = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-300">
      <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-300 text-white"
          placeholder="Enter your text.."
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
    </div>
  );
};

export default MsgInput;
