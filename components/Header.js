import React from "react";

function Header() {
  return (
    <div className="h-[16%] w-[100%] fixed top-10 flex justify-between items-center px-24 box-border">
      <h1 className="text-2xl font-bold text-[#efe0e0] ">Gelato</h1>
      <div className="h-[100%] w-[40%] flex justify-around items-center">
        <h1 className="text-md text-[#efe0e0] font-medium">Developers</h1>
        <h1 className="text-md text-[#efe0e0]  font-medium">Services</h1>
        <h1 className="text-md text-[#efe0e0]  font-medium">Discover</h1>
        <h1 className="text-md text-[#efe0e0]  font-medium">Contact Us</h1>
      </div>
    </div>
  );
}

export default Header;
