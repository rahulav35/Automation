import React from "react";

function Abi() {
  return (
    <div className="min-h-[40%] w-[90%] flex flex-col items-start justify-between my-3 ">
      <h1 className=" text-[#b5b5b9] font-medium mb-2">ABI</h1>
      <textarea
        className="h-[80%] w-[100%] text-sm text-white bg-[#222429] rounded-2xl p-3 box-border"
        name="ab"
        id=""
        cols="30"
        rows="10"
        placeholder="0#$%&0adress"
      ></textarea>
    </div>
  );
}

export default Abi;
