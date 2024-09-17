import React from "react";
import userAva from "../../assets/user.png";

const IndiMsg = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={userAva} alt="" />
        </div>
      </div>

      <div className="chat-bubble text-white bg-blue-500">Hello</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950">
        10:41
      </div>
    </div>
  );
};

export default IndiMsg;
