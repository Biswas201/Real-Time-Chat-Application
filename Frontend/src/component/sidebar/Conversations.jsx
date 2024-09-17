import React from "react";
import IndiConversation from "./IndiConversation";

const Conversations = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <IndiConversation/>
      <IndiConversation/>
      <IndiConversation/>
      <IndiConversation/>
      <IndiConversation/>
      <IndiConversation/>
    </div>
  )
};

export default Conversations;
