import React from "react";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineChatAlt2 } from "react-icons/hi";

function Documentation() {
  return (
    <div className="h-[11%] w-[50%]  flex items-center justify-evenly">
      <div className="h-[100%] w-[48%]  flex justify-evenly items-center ">
        <TiDocumentText size={32} color={"white"} />
        <h1 className="text-md text-white font-medium">Documentation</h1>
      </div>
      <div className="h-[100%] w-[48%]  flex justify-evenly items-center ">
        <HiOutlineChatAlt2 size={32} color={"white"} />
        <h1 className="text-md text-white font-medium">Developers Chat</h1>
      </div>
    </div>
  );
}

export default Documentation;
