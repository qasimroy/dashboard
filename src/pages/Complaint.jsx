import React from "react";
import { Navbar, Card } from "../pages";

export const Complaint = () => {
    return (
        <div className="w-full h-screen overflow-y-scroll ">
            <Navbar title="Complaints" />
            <div className="w-full pt-4 px-5">
                <button
                    className="p-2 border-[1px] border-gray-300 rounded-lg float-right bg-blue-950 text-white 
                    transition duration-300"
                >
                    Open Ticket
                </button>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-2 p-7 container">
                <Card width="w-72">
                    <div className="p-3 items-center w-full ">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">CAB 534</p>
                            <p className="text-xs  inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Software
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Issue about the Zone
                            </p>
                            <p className="text-xs pt-2">
                                created at: 16:00 / 09-07-2023
                            </p>
                            <button className="text-sm border-[1px] transition duration-300 border-gray-400 p-2 hover:bg-blue-950 hover:text-white mt-4 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </Card>
                <Card width="w-72">
                    <div className="p-3 items-center w-full ">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">CAB 534</p>
                            <p className="text-xs  inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Software
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Issue about the Zone
                            </p>
                            <p className="text-xs pt-2">
                                created at: 16:00 / 09-07-2023
                            </p>
                            <button className="text-sm border-[1px] transition duration-300 border-gray-400 p-2 hover:bg-blue-950 hover:text-white mt-4 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </Card>
                <Card width="w-72">
                    <div className="p-3 items-center w-full ">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">CAB 534</p>
                            <p className="text-xs  inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Software
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Issue about the Zone
                            </p>
                            <p className="text-xs pt-2">
                                created at: 16:00 / 09-07-2023
                            </p>
                            <button className="text-sm border-[1px] transition duration-300 border-gray-400 p-2 hover:bg-blue-950 hover:text-white mt-4 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </Card>
                <Card width="w-72">
                    <div className="p-3 items-center w-full ">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">CAB 534</p>
                            <p className="text-xs  inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Software
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Issue about the Zone
                            </p>
                            <p className="text-xs pt-2">
                                created at: 16:00 / 09-07-2023
                            </p>
                            <button className="text-sm border-[1px] transition duration-300 border-gray-400 p-2 hover:bg-blue-950 hover:text-white mt-4 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
