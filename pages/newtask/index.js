import axios from "axios";
import { ethers } from "ethers";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAccount } from "wagmi";
import Abi from "../../components/Abi";
import Address from "../../components/Address";
import Amount from "../../components/Amount";
import Execute from "../../components/Execute";
import FunctioName from "../../components/FunctionName";
import Gas from "../../components/Gas";
import Interval from "../../components/Interval";
import Navbar from "../../components/Navbar";
import { getSignedContract } from "../../utils/helper-function";

function Index() {
  const router = useRouter();
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [targetAddress, setTargetAddress] = useState("");
  const [abi, setAbi] = useState("");
  const [interval, setInterval] = useState("");
  const [functionName, setFunctionName] = useState("");
  const [gasLimit, setGasLimit] = useState("");
  const [initialAmount, setInitialAmount] = useState("");

  const submit = async () => {
    if (
      address &&
      targetAddress !== "" &&
      abi !== "" &&
      interval !== "" &&
      functionName !== "" &&
      initialAmount !== "" &&
      gasLimit !== ""
    ) {
      try {
        setLoading(true);
        await axios
          .post("http://localhost:5001/create", {
            method: "post",
            data: JSON.stringify({
              address: targetAddress,
              abi: JSON.parse(abi),
              functionName: functionName,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(async (res) => {
            if (res.data.data) {
              console.log(res.data.data.executorAddress);
              try {
                const contract = await getSignedContract();
                const tx = await contract?.createAutomation(
                  targetAddress,
                  gasLimit,
                  interval,
                  res.data.data.executorAddress,
                  {
                    value: ethers.utils.parseEther(initialAmount),
                  }
                );
                const txReceipt = await tx.wait(1);
                if (txReceipt) {
                  setLoading(false);
                  router.push("/task");
                }
              } catch (error) {
                await axios.post("http://localhost:5001/delete", {
                  method: "post",
                  data: JSON.stringify({
                    address: res.data.data.address,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
                setLoading(false);
              }
            } else if (res.data.error) {
              setLoading(false);
            }
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (!address) {
      alert("connect wallet");
    } else {
      alert("fill every fields");
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col absolute bg-[#242329]">
      <Navbar />

      <div className="h-[10%] w-[57%] flex justify-center items-center  flex-col mt-[85px] ">
        <h1 className="text-[#84aaff] mr-[650px]">cancel</h1>
        <h1 className="text-2xl font-medium text-white">New Task</h1>
      </div>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-red-600 text-[2rem]">Loading</h1>
        </div>
      ) : (
        <div className="h-[70%] w-[57%]  flex justify-between items-center flex-col bg-[#141619] rounded-2xl mt-4">
          <Execute />
          <div className="min-h-[200px] w-[100%]  flex justify-between items-center flex-col bg-[#141619] rounded-2xl mt-2 overflow-y-scroll scrollbar-hide">
            <Address onChange={(e) => setTargetAddress(e.target.value)} />
            <Abi onChange={(e) => setAbi(e.target.value)} />
            <Amount onChange={(e) => setInitialAmount(e.target.value)} />
            <FunctioName onChange={(e) => setFunctionName(e.target.value)} />
            <Gas onChange={(e) => setGasLimit(e.target.value)} />
            <Interval onChange={(e) => setInterval(e.target.value)} />
            <button
              onClick={submit}
              className="min-h-[45px] w-[25%] bg-[#515563] my-14 ml-10 rounded-xl text-[#f0e7ed] flex justify-center items-center font-mono"
            >
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Index), { ssr: false });
