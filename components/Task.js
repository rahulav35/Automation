import React from "react";

function Task() {
  return (
    <div className=" h-[12%] w-[100%] flex justify-between items-center">
      <div className="h-[97%] w-[37%] rounded-[16px]  bg-[#141619] flex items-center justify-between p-1 box-border">
        <button className="h-[87%] w-[40%] bg-[#2c2f36] rounded-[15px] text-white font-medium ">
          My Tasks
        </button>
        <button className="h-[87%] w-[55%] rounded-[15px]  text-[#8a8b8c] font-medium ">
          Leaderboard
        </button>
      </div>
      <button className="h-[69%] w-[16%] bg-[#4d8fea] rounded-[15px] text-white font-medium ">
        Create Task
      </button>
    </div>
  );
}

export default Task;
