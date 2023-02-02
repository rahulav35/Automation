import React from "react";

function Taskactivity() {
  return (
    <div className="h-[35%] w-[100%]  bg-[#141619] rounded-3xl flex-col flex justify-evenly items-center">
      <div className="h-[25%] w-[100%]  flex justify-between items-center rounded-lg px-5 box-border">
        <h1 className="text-white font-medium">My Tasks</h1>
        <div className="h-[100%] w-[70%] border-2 border-black flex items-center justify-around">
          <h1 className="text-white"> Hide paused</h1>
          <h1 className="text-white"> search</h1>
        </div>
      </div>
      <h1 className="text-[#7c7d7e]">
        you dont have any tsks yet, create your own first!
      </h1>
    </div>
  );
}

export default Taskactivity;
