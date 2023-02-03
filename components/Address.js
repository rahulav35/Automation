import React from "react";

function Address({ onChange }) {
  return (
    <div className="min-h-[25%] w-[90%] flex flex-col items-start justify-between my-5 ">
      <h1 className="text-[#b5b5b6] text-sm font-medium "> Contract address</h1>
      <input
        onChange={(e) => onChange(e)}
        className="min-h-[46px] w-[100%] border-2 border-[#40444f] rounded-2xl flex justify-start items-center pl-3 box-border text-white bg-[#222429]"
        type="text"
        placeholder="0x..."
      />
      <span className="text-sm text-[#e8821e]">
        ! could not fetch ABI. Pleae post ABI manually below.
      </span>
    </div>
  );
}

export default Address;
