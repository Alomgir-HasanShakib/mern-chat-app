import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://avatar.iran.liara.run/public/boy?username=shakib" alt="user" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
          <p className="text-lg font-semibold">John Doe</p>
          <span className="text-sm text-gray-500">🍅</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 h-1"></div>
    </>
  );
};

export default Conversation;
