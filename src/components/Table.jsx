import React from "react";
import { BsCloudDownload } from "react-icons/bs";

const TableRow = ({ data, index }) => {
    return (
        <tr className=" transition hover:bg-blue-950 hover:bg-opacity-10 duration-300">
            <td className="border px-4 py-2 text-center">{index + 1}</td>
            <td className="border px-4 py-2 text-center">{data.job_no}</td>
            <td className="border px-10 py-2">{data.pickup}</td>
            <td className="border px-4 py-2 text-center">{data.driver}</td>
            <td className="border px-4 py-2 text-center">$ {data.fare}</td>
            <td className="border px-4 py-3 cursor-pointer text-center">
                <BsCloudDownload />
            </td>
        </tr>
    );
};

export const Table = ({ tableData }) => {
    return (
        <table className="w-full border border-blue-950 rounded-md ">
            <thead>
                <tr>
                    <th className="bg-blue-950 text-white w-16 py-2">Sr no.</th>
                    <th className="bg-blue-950 text-white w-32 py-2">Job #</th>
                    <th className="bg-blue-950 text-white px-4 py-2">PickUp</th>
                    <th className="bg-blue-950 text-white w-32 py-2">Driver</th>
                    <th className="bg-blue-950 text-white w-32 py-2">Fare</th>
                    <th className="bg-blue-950 text-white w-32 py-2">
                        Download
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <TableRow key={row.job_no} data={row} index={index} />
                ))}
            </tbody>
        </table>
    );
};
