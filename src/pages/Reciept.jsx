import { useEffect } from "react";
import { Card, Navbar, Table } from "../pages";
export const Reciept = () => {
    useEffect(() => {
        document.title = "Reciept";
    });
    const job = [
        {
            job_no: 220123,
            pickup: "123 3rd Avenue South, SK",
            driver: 1712,
            fare: 24,
        },
        {
            job_no: 220124,
            pickup: "224 Avenue N South, SK",
            driver: 5465,
            fare: 30,
        },
        {
            job_no: 220125,
            pickup: "456 Main Street, SK",
            driver: 6821,
            fare: 18,
        },
        {
            job_no: 220126,
            pickup: "789 Broadway Avenue, SK",
            driver: 2593,
            fare: 42,
        },
        {
            job_no: 220127,
            pickup: "101 Pine Street, SK",
            driver: 3324,
            fare: 28,
        },
        {
            job_no: 220128,
            pickup: "202 Oak Avenue, SK",
            driver: 2879,
            fare: 35,
        },
        {
            job_no: 220129,
            pickup: "303 Elm Street, SK",
            driver: 8234,
            fare: 22,
        },
        {
            job_no: 220130,
            pickup: "404 Maple Avenue, SK",
            driver: 4667,
            fare: 30,
        },
        {
            job_no: 220131,
            pickup: "505 Birch Street, SK",
            driver: 3428,
            fare: 26,
        },
        {
            job_no: 220132,
            pickup: "606 Cedar Avenue, SK",
            driver: 9572,
            fare: 38,
        },
    ];
    return (
        <div className="w-full h-screen overflow-y-scroll">
            <Navbar title="Reciept" />
            <div className="w-full flex flex-wrap justify-left gap-2 container py-10 px-5">
                <div className="w-full overflow-x-scroll">
                    <Table tableData={job} />
                </div>
            </div>
        </div>
    );
};
