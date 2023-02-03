import dynamic from "next/dynamic";
import React from "react";
import Documentation from "../../components/Documentation";
import Icons from "../../components/Icons";

import Navbar from "../../components/Navbar";
import Task from "../../components/Task";
import Taskactivity from "../../components/Taskactivity";

function Index() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#242329] flex justify-center items-center absolute">
      <Navbar />
      <div className="h-[75%] w-[57%] mt-20 flex justify-evenly items-start flex-col">
        <h1 className="text-2xl text-white   w-[88%]  font-medium">
          Automate your smart contracts with Gelato Network
        </h1>
        <Icons />
        <Documentation />
        <Task />
        <Taskactivity />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Index), { ssr: false });
