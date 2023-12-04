import React, { useEffect, useState } from "react";
import { Navbar } from "../pages";

export const Documents = () => {
    useEffect(() => {
        document.title = "Documents";
    });
    let time = new Date().toLocaleTimeString();
    const [ntime, setNtime] = useState(time);
    const UpdateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        setNtime(newTime);
    };
    setInterval(UpdateTime, 1000);
    return (
        <div className="w-full h-screen container overflow-y-scroll">
            <Navbar title="Documents" />
            <div className="w-full h-96 flex justify-center items-center pt-4 px-2">
                <h1 className="text-4xl font-bold">{ntime}</h1>
            </div>
        </div>
    );
};
