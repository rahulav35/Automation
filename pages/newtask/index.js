import { useRouter } from "next/router";
import React from "react";
import Abi from "../../components/Abi";
import Address from "../../components/Address";
import Amount from "../../components/Amount";
import Execute from "../../components/Execute";
import Gas from "../../components/Gas";
import Interval from "../../components/Interval";
import Navbar from "../../components/Navbar";

function index() {
  const router=useRouter()

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col absolute bg-[#242329]">
      <Navbar />

      <div className="h-[10%] w-[57%] flex justify-center items-center  flex-col mt-[85px] ">
        <h1 className="text-[#84aaff] mr-[650px]">cancel</h1>
        <h1 className="text-2xl font-medium text-white">New Task</h1>
      </div>
      <div className="h-[70%] w-[57%]  flex justify-between items-center flex-col bg-[#141619] rounded-2xl mt-4">
        <Execute />
        <div className="min-h-[200px] w-[100%]  flex justify-between items-center flex-col bg-[#141619] rounded-2xl mt-2 overflow-y-scroll scrollbar-hide">
          <Address />
          <Abi />
          <Amount />
          <Gas />
          <Interval />
          <button onClick={()=>router.push("/task")} className="min-h-[45px] w-[25%] bg-[#515563] my-14 ml-10 rounded-xl text-[#f0e7ed] flex justify-center items-center font-mono">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
