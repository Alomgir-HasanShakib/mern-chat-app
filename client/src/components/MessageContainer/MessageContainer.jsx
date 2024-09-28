import React from "react";
import Messeges from "./Messeges";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col justify-between">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header  */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>

          {/* Message Container  */}
          <Messeges />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="px-4 text-center sm:text-lg text-gray-200 font-semibold flex flex-col gap-2 items-center">
        <p className="text-2xl font-bold">Welcome 👏 John Doe</p>
        <p>Select a chat or start a new conversation</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
