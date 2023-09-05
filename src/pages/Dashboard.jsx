import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { BiTaxi } from "react-icons/bi";
import { MdReportGmailerrorred, MdOutlineReportOff } from "react-icons/md";

const Dashboard = () => {
    return (
        <>
            <div className="w-full h-screen container">
                <Navbar title="Dashboard" />
                <div className="w-full flex flex-wrap justify-center gap-4 p-4 container">
                    <Card width="w-60">
                        <p className="text-lg font-bold p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <BiTaxi />
                                Drivers
                            </span>
                            <span>45</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold p-2 flex justify-between items-center ">
                            <span className="flex justify-center items-center gap-1">
                                <MdReportGmailerrorred />
                                Complaints
                            </span>
                            <span>10</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <MdReportGmailerrorred />
                                Open Complaints
                            </span>
                            <span>2</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <MdOutlineReportOff />
                                Closed Complaints
                            </span>
                            <span>4</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <MdOutlineReportOff />
                                Closed Complaints
                            </span>
                            <span>4</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <MdOutlineReportOff />
                                Closed Complaints
                            </span>
                            <span>4</span>
                        </p>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
