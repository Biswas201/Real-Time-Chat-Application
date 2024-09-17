import React from "react";
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-red-500 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
};

export default Logout;
