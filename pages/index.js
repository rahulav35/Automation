import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import Networks from "../components/networks";

function index() {
  const router = useRouter();

  return (
    <div className="w-[100vw] min-h-[100vh] bg-[#050719] relative flex flex-col  justify-start items-center ">
      <Header />
      <div className="w-[100vw] h-[100vh] bg-[#050719]  flex flex-col  justify-center items-center ">
        <div className="h-[94%] w-[82%]  -mt-7 rounded-[40px] flex flex-row justify-between items-end bg-[#181c2a] border-[2px] border-[#181c2a]">
          <div className="h-[75%] w-[43%]   box-border flex flex-col justify-evenly items-start pl-6">
            <h1 className="text-[3.3rem] font-bold tracking-tighter   leading-[57px] max-w-[80%] text-justify bg-gradient-to-r  from-[#f4c1a5] via-[#c97f78] to-[#b56164] inline-block text-transparent bg-clip-text ">
              Web3's decentralized automation
            </h1>
            <h1 className="text-lg text-[#7a7373]  ">
              Enabling developers to create augmented smart contracts that are
              automated, gasless & off-chain aware
            </h1>
            <div className=" w-[75%] h-[18%] flex justify-around items-center">
              <button className=" text-md bg-[#ebb39b] h-[55px] w-[150px] rounded-[30px] text-[#202020] font-semibold ">
                USE CASES
              </button>
              <button onClick={()=>{router.push("/taskpage")}} className=" text-white text-md border-2 border-[#e1a492] h-[55px] w-[180px] rounded-[30px] font-semibold ">
                {">"} START BUILDING
              </button>
            </div>
          </div>
          <div className="h-[75%] w-[40%]  flex justify-center items-center">
            <Image
              height={350}
              width={350}
              src={"/36304-ghsot-moving-up-and-down-while-looking-around.gif"}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-[82%] h-[35vh] mt-[200px] flex flex-col items-center justify-start  ">
        <h1 className="font-semibold text-[40px] text-white">
          Supported networks
        </h1>
        <div className="w-[100%] h-[50%]  flex flex-row items-start mt-7 justify-around ">
          <Networks />
          <Networks />
          <Networks />
          <Networks />
          <Networks />
          <Networks />
          <Networks />
          <Networks />
        </div>
        <div className="w-[80%] h-[10%] text-white flex flex-col items-center justify-center font-semibold ">
          <h1 className=" text-white flex flex-col items-center justify-center font-semibold text-[30px]">
            4215464
          </h1>
          <h1 className="text-[15px]">executed transactions</h1>
        </div>
      </div>
      <div className="w-[82%] h-[70vh] mt-[200px] border-red-700 border flex flex-row items-center justify-start  ">
        <div className="w-[80%] h-[10%] text-white flex flex-col items-center justify-center font-semibold ">
          <h1 className=" text-white flex flex-col items-center justify-center font-semibold text-[30px]">
            List and board
          </h1>
          <h1 className="text-[15px]">
            Switch between list and board layout to view work from any angle.
          </h1>
        </div>
        <div className="w-[100%] h-[50%]  flex flex-row items-start mt-7 justify-around "></div>
      </div>
    </div>
  );
}

export default index;
