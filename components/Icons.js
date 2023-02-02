import React from "react";
import { FaEthereum } from "react-icons/fa";
import { Polygon } from "iconsax-react";
import { Avalanche } from "iconsax-react";

function Icons() {
  return (
    <div className="h-[10%] w-[70%] flex justify-evenly items-center  ">
      <FaEthereum size={32} />
      <Polygon size={32} />
      <Avalanche size={32} />
      <Avalanche size={32} />
      <Avalanche size={32} /> <Avalanche size={32} /> <Avalanche size={32} />
      <Avalanche size={32} /> <Avalanche size={32} /> <Avalanche size={32} />
      <Avalanche size={32} />
    </div>
  );
}

export default Icons;
