import React from "react";

function FunctioName({ onChange }) {
  return (
    <div className="h-[17%] w-[90%]  flex flex-col justify-center items-start my-2">
      <h1 className=" text-[#977f99] text-sm font-medium my-1">FunctioName</h1>
      <input
        onChange={(e) => onChange(e)}
        className=" min-h-[40px] w-[35%] text-white bg-[#2c2f39] flex items-center justify-start text-sm rounded-2xl p-2 box-border "
        type="text"
        placeholder="#"
      />
    </div>
  );
}

export default FunctioName;
