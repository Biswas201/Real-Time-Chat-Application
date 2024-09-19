import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" className="btn btn-circle bg-gray-300 text-black shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  )
};

export default SearchInput;
