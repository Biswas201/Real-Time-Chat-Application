import React from "react";
import Sidebar from "./../component/sidebar/sidebar.jsx";
import MsgContainer from "../component/msg/msgContainer.jsx";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-200">
      <Sidebar />

      <MsgContainer />
    </div>
  );
};

export default Home;
