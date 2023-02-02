import React from "react";

function Navbar() {
  return (
    <div className="h-[15%] w-[100%] flex justify-between items-center  fixed top-0 px-10 box-border">
      <h1 className="text-3xl font-bold text-[#efe0e0] ">Gelato</h1>
      <div className="h-[100%] w-[40%] flex justify-around items-center">
        <button className="h-[40px] w-[140px] bg-[#2c2f36] text-[#627eea] rounded-xl flex justify-evenly items-center font-medium">
          Etherium
        </button>
        <button className="h-[40px] w-[160px] bg-[#4d8fea] rounded-2xl flex justify-center items-center text-white font-medium">
          Connect Wallet
        </button>
        <button className="h-[40px] w-[57px] bg-[#2c2f36] flex items-center justify-center rounded-2xl text-xl font-extrabold text-white">
          . . .
        </button>
      </div>
    </div>
  );
}

export default Navbar;
