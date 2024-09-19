import React from "react";
import IndiMsg from "./IndiMsg";

const Msgs = () => {
  return (
    <div className="px-4 flex-1 overflow-auto bg-gradient-to-r from-cyan-200 to-blue-300">
        <IndiMsg/>
        <IndiMsg/>
        <IndiMsg/>
        <IndiMsg/>
        <IndiMsg/>
        <IndiMsg/>
    </div>
  )
};

export default Msgs;
