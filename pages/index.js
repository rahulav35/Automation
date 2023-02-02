import Image from "next/image";
import React from "react";
import Header from "../components/Header";

function index() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#191919] absolute flex justify-center items-center ">
      <Header />
      <div className="h-[84%] w-[92%]  -mt-7 rounded-[40px] flex justify-between items-end bg-[#202020]">
        <div className="h-[75%] w-[43%]   box-border flex flex-col justify-evenly items-start pl-6">
          <h1 className="text-[3.3rem] font-bold tracking-tighter   leading-[57px] max-w-[80%] text-justify bg-gradient-to-r  from-[#f4c1a5] via-[#c97f78] to-[#b56164] inline-block text-transparent bg-clip-text ">
            Web3's decentralized backend
          </h1>
          <h1 className="text-lg text-[#7a7373]  ">
            Enabling developers to create augmented smart contracts that are
            automated, gasless & off-chain aware
          </h1>
          <div className=" w-[75%] h-[18%] flex justify-around items-center">
            <button className=" text-md bg-[#ebb39b] h-[55px] w-[150px] rounded-[30px] text-[#202020] font-semibold ">
              USE CASES
            </button>
            <button className=" text-white text-md border-2 border-[#e1a492] h-[55px] w-[180px] rounded-[30px] font-semibold ">
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
  );
}

export default index;
