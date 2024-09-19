import React from "react";
import Msgs from "./Msgs";
import MsgInput from "./MsgInput";

const MsgContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/*header*/}
        <div className="bg-sky-200 px-4 py-2 mb-2">
          <span className="label-text">To: </span>
          <span className="text-gray-900 font-bold">Suchana</span>
        </div>

        <Msgs />

        <MsgInput />
      </>
    </div>
  );
};

export default MsgContainer;
