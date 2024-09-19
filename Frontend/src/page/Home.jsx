import React from "react";
import Sidebar from "./../component/sidebar/sidebar.jsx";
import MsgContainer from "../component/msg/msgContainer.jsx";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <Sidebar />

      <MsgContainer />
    </div>
  );
};

export default Home;
