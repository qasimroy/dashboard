import React from "react";
import Navbar from "../components/Navbar";

const Complaint = () => {
    return (
        <div className="w-full h-screen overflow-y-scroll">
            <Navbar title="Complaints" />
            <div className="w-full container"></div>
        </div>
    );
};

export default Complaint;
