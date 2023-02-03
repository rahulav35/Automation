import dynamic from "next/dynamic";
import React from "react";
import Executions from "../components/executions";
import Navbar from "../components/Navbar";

function Task() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col items-center justify-center bg-[#252229] pt-[10vh]">
      <Navbar />

      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#252229] ">
        <div className="w-[60%] min-h-[30%] flex flex-col items-start justify-start mt-8 ">
          <div className="w-[100%] h-[35%] flex flex-col items-start justify-start  ">
            <h1 className="text-[20px] font-semibold text-white">tt</h1>
            <h1 className="text-[15px] font-thin text-white">
              created by: 211145
            </h1>
            <h1 className="text-[15px] font-thin text-white">Task Id</h1>
          </div>
          <div className="w-[40%] h-[50%] flex flex-row items-start justify-start  ">
            <div className="w-[60%] h-[100%] flex flex-col items-center justify-center  ">
              <h1 className="text-[17px] font-semibold text-white">14</h1>
              <h1 className="text-[15px] font-thin text-white">Executions</h1>
            </div>
            <div className="w-[60%] h-[100%] flex flex-col items-center justify-center ">
              <h1 className="text-[17px] font-semibold text-white">14</h1>
              <h1 className="text-[15px] font-thin text-white">Executions</h1>
            </div>
          </div>
        </div>
        <div className="w-[60vw] h-[80vh] bg-black rounded-[20px] flex flex-col items-center justify-center  border border-blue-900">
          <div className="w-[90%] h-[30%] ">
            <h1 className="text-[20px] font-semibold text-white">Execute</h1>
            <h1 className="text-[15px] font-thin mt-7 text-white">
              Target Contract: bdhbshdhsv
            </h1>
            <h1 className="text-[15px] font-thin text-white">
              Automated Function: bhubsachs
            </h1>
          </div>
          <div className="w-[90%] h-[1px] bg-white"></div>
          <div className="w-[90%] h-[30%] ">
            <h1 className="text-[20px] font-semibold text-white">
              When to execute
            </h1>
            <h1 className="text-[15px] font-thin mt-7 text-white">
              Interval: 10 minutes
            </h1>
            <h1 className="text-[15px] font-thin text-white">
              Next Execution: bhubsachs
            </h1>
          </div>
          <div className="w-[90%] h-[1px] bg-white"></div>

          <div className="w-[90%] h-[30%] ">
            <h1 className="text-[20px] font-semibold text-white">
              {" "}
              Executing Address
            </h1>
            <h1 className="text-[15px] font-thin mt-7 text-white">
              Your msg. sender: 10 minutes
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[60vw] h-[80vh] rounded-[20px] bg-black mt-[50px]">
        <div className="w-[100%] h-[10%] flex flex-row items-start justify-between p-[10px] pt-[20px]">
          <h1 className="text-[17px] font-semibold text-white">Date</h1>
          <h1 className="text-[17px] font-semibold text-white">TxHash</h1>
          <h1 className="text-[17px] font-semibold text-white">Status</h1>
          <h1 className="text-[17px] font-semibold text-white">TxFree</h1>
        </div>
        <div className="w-[100%] min-h-[100%] mt-7">
          <Executions />
          <Executions />
          <Executions />
          <Executions />
          <Executions />
          <Executions />
          <Executions />
          <Executions />
          <Executions />
          <Executions />
          <Executions />
          <Executions />
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Task), { ssr: false });
