import React, { useEffect } from "react";
import { Navbar } from "../pages";
import { RiSendPlaneLine } from "react-icons/ri";
import { TbSignature, TbSignatureOff } from "react-icons/tb";

export const Signature = () => {
    useEffect(() => {
        document.title = "Signature";
    });
    return (
        <div className="w-full h-screen overflow-y-scroll">
            <Navbar title="E-Signature" />
            <div className="h-4/5 w-full flex flex-col lg:flex-row justify-center items-center gap-4 ">
                <div className="w-60 rounded-3xl">
                    <button className=" flex justify-center items-center py-8 w-full h-full hover:bg-opacity-100 hover:text-white bg-blue-950 bg-opacity-30 text-lg font-bold transition duration-200 rounded-3xl">
                        <span className="flex items-center">
                            <span className="text-2xl mr-2">
                                <RiSendPlaneLine />
                            </span>
                            Send Document
                        </span>
                    </button>
                </div>
                <div className="w-60 rounded-3xl">
                    <button className="flex justify-center items-center py-8 w-full h-full hover:bg-opacity-100 hover:text-white bg-blue-950 bg-opacity-30 text-lg font-bold transition duration-200 rounded-3xl">
                        <span className="flex items-center">
                            <span className="text-2xl mr-2">
                                <TbSignature />
                            </span>
                            Signed Documents
                        </span>
                    </button>
                </div>
                <div className="w-60 rounded-3xl">
                    <button className="flex justify-center items-center py-8 w-full h-full hover:bg-opacity-100 hover:text-white bg-blue-950 bg-opacity-30 text-lg font-bold transition duration-200 rounded-3xl">
                        <span className="flex items-center">
                            <span className="text-2xl mr-2">
                                <TbSignatureOff />
                            </span>
                            UnSigned Documents
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
