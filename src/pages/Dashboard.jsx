import { Navbar, Card } from "../pages";
import { BiTaxi } from "react-icons/bi";
import { TbSignature, TbSignatureOff } from "react-icons/tb";
import { MdReportGmailerrorred, MdOutlineReportOff } from "react-icons/md";

export const Dashboard = () => {
    return (
        <>
            <div className="w-full h-screen container overflow-y-scroll">
                <Navbar title="Dashboard" />
                <div className="w-full flex flex-wrap justify-center gap-4 p-4 container">
                    <Card width="w-60">
                        <p className="text-lg font-bold w-full p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <BiTaxi />
                                Drivers
                            </span>
                            <span>45</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold w-full p-2 flex justify-between items-center ">
                            <span className="flex justify-center items-center gap-1">
                                <MdReportGmailerrorred />
                                Complaints
                            </span>
                            <span>10</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold w-full p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <MdReportGmailerrorred />
                                Open Complaints
                            </span>
                            <span>2</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold w-full p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <MdOutlineReportOff />
                                Closed Complaints
                            </span>
                            <span>4</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold w-full p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <TbSignature className="text-xl" />
                                Signed Documents
                            </span>
                            <span>4</span>
                        </p>
                    </Card>
                    <Card width="w-60">
                        <p className="text-lg font-bold  w-full p-2 flex justify-between items-center">
                            <span className="flex justify-center items-center gap-1">
                                <TbSignatureOff className="text-xl" />
                                Unsigned Documents
                            </span>
                            <span>4</span>
                        </p>
                    </Card>
                </div>
            </div>
        </>
    );
};
