import React from "react";

function Amount({ onChange }) {
  return (
    <div className="h-[17%] w-[90%]  flex flex-col justify-center items-start my-2">
      <h1 className=" text-[#8a8b8c] text-sm font-medium my-1">
        Initial Amount
      </h1>
      <input
        onChange={(e) => onChange(e)}
        className=" min-h-[40px] w-[35%] text-white  bg-[#2c2f39] flex items-center justify-start rounded-2xl text-sm p-2 box-border "
        type="text"
        placeholder="$"
      />
    </div>
  );
}

export default Amount;
