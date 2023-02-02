import React from "react";

function Interval() {
  return (
    <div className="h-[17%] w-[90%]  flex flex-col justify-center items-start my-2">
      <h1 className=" text-[#a18496] text-sm font-medium my-1">Interval</h1>
      <input
        className=" min-h-[40px] w-[35%] text-white  bg-[#2c2f39] flex items-center justify-start text-sm rounded-2xl p-2 box-border "
        type="text"
        placeholder="#"
      />
    </div>
  );
}

export default Interval;
