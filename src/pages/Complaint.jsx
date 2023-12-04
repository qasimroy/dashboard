import React, { useEffect } from "react";
import { Navbar, Card, Modal } from "../pages";

export const Complaint = () => {
    useEffect(() => {
        document.title = "Complaint";
    });
    const data = [
        {
            cab_no: 465,
            category: "Software",
            issue: "Issue about the zone",
            created_at: "16:00 / 09-07-2023",
        },
        {
            cab_no: 712,
            category: "Tablet",
            issue: "Tablet getting stuck",
            created_at: "16:00 / 09-07-2023",
        },
        {
            cab_no: 593,
            category: "Software",
            issue: "Losing position on Short Break",
            created_at: "16:00 / 09-07-2023",
        },
        {
            cab_no: 821,
            category: "OT List",
            issue: "Number got changed in List",
            created_at: "16:00 / 09-07-2023",
        },
        {
            cab_no: 324,
            category: "OT Trip",
            issue: "Someone done OT Trip on my number",
            created_at: "16:00 / 09-07-2023",
        },
    ];
    return (
        <div className="w-full h-screen overflow-y-scroll">
            <Navbar title="Complaints" />
            <div className="w-full pt-4 px-5">
                <Modal
                    title="Open Ticket"
                    heading="Open a Ticket"
                    fBtn="Create"
                >
                    <div className="p-2 mb-4">
                        <span className="text-gray-700">Issue</span>
                        <input
                            type="text"
                            placeholder="e.g., Issue about zone"
                            className="p-2  w-full border-b border-gray-950 focus:outline-none focus:border-b focus:border-blue-500"
                        />
                        <br />
                        <br />
                        <span className="text-gray-700">Category</span>
                        <select
                            name="category"
                            id="category"
                            className="w-full focus:outline-none focus:border-b focus:border-blue-500 border-b border-black p-2"
                        >
                            <option value="default">&nbsp;</option>
                            <option value="software">Software</option>
                            <option value="tablet">Tablet</option>
                            <option value="otlist">Out of Town List</option>
                            <option value="ottrip">Out of Town Trip</option>
                        </select>
                        <br />
                        <br />
                    </div>
                </Modal>
            </div>
            <div className="w-full flex flex-wrap justify-left gap-3 p-7 container">
                {data.map((data) => (
                    <Card width="w-72" key={data.cab_no}>
                        <div className="p-3 w-full flex flex-col">
                            <div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-lg font-bold text-blue-950 ">
                                        CAB {data.cab_no}
                                    </p>
                                    <p className="text-xs inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                        {data.category}
                                    </p>
                                </div>
                                <div className="w-full">
                                    <p className="font-bold text-md text-blue-950">
                                        {data.issue}
                                    </p>
                                    <p className="text-xs pt-2">
                                        created at: {data.created_at}
                                    </p>
                                </div>
                            </div>
                            <button className="text-sm border-[1px] transition duration-300 border-gray-400 p-2 hover:bg-blue-950 hover:text-white mt-4 rounded">
                                Read More
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
