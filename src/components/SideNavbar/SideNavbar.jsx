import React, { useState, useEffect } from "react";
import { BiLeftArrowAlt, BiTaxi } from "react-icons/bi";
import { AiOutlineFolder, AiOutlineSetting } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { LuLayoutDashboard, LuFileSignature } from "react-icons/lu";
import { BsCalendarDate } from "react-icons/bs";
import { MdReportGmailerrorred } from "react-icons/md";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const SideNavbar = () => {
    const [open, setOpen] = useState(
        localStorage.getItem("sidebarOpen") === "true" || false
    );
    const [selectedIndex, setSelectedIndex] = useState(
        parseInt(localStorage.getItem("selectedItemIndex")) || 0
    );
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("selectedItemIndex", selectedIndex.toString());
    }, [selectedIndex]);

    useEffect(() => {
        localStorage.setItem("sidebarOpen", open.toString());
    }, [open]);

    const Menus = [
        { title: "Dashboard", src: <LuLayoutDashboard /> },
        { title: "Complaint", src: <MdReportGmailerrorred /> },
        { title: "Drivers", src: <BiTaxi />, gap: true },
        { title: "Schedule ", src: <BsCalendarDate /> },
        { title: "Reciept", src: <TbFileInvoice /> },
        { title: "E-Signature", src: <LuFileSignature /> },
        { title: "Documents ", src: <AiOutlineFolder />, gap: true },
        { title: "Setting", src: <AiOutlineSetting /> },
    ];
    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        switch (index) {
            case 0:
                navigate("/");
                break;
            case 1:
                navigate("/complaint");
                break;
            case 2:
                navigate("/drivers");
                break;
            case 3:
                navigate("/schedule");
                break;
            case 4:
                navigate("/reciept");
                break;
            case 5:
                navigate("/e-signature");
                break;
            case 6:
                navigate("/documents");
                break;
            case 7:
                navigate("/settings");
                break;
            default:
                break;
        }
    };

    return (
        <div
            className={`${
                open ? "w-80" : "w-20"
            } bg-blue-950 h-screen p-5 pt-8 relative duration-200 rounded-e-xl`}
        >
            <div
                className={`absolute z-10 text-blue-950 p-1 bg-white cursor-pointer -right-3 top-9 w-7 border-blue-950
                border-2 rounded-full ${!open && "rotate-180"} duration-300`}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <BiLeftArrowAlt />
            </div>
            <div
                className="flex gap-x-4 items-center cursor-pointer"
                onClick={() => {
                    navigate("/");
                }}
            >
                <img src={Logo} alt="logo icon" />
                <h1
                    className={`text-white font-medium text-xl origin-left duration-200 ${
                        !open && "scale-0"
                    }`}
                >
                    Designer
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((menu, index) => (
                    <div key={index}>
                        {menu.gap ? <hr className="opacity-20 mt-2" /> : ""}
                        <div
                            key={`${index}`}
                            className={`flex justify-start items-center gap-3 rounded-md p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-30 text-gray-300 
                        text-md  ${!open ? "tooltip" : ""} 
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                                selectedIndex === index
                                    ? "bg-white bg-opacity-30"
                                    : ""
                            }`}
                            onClick={() => handleMenuItemClick(index)}
                        >
                            <span className="text-xl flex justify-center">
                                {menu.src}
                            </span>
                            <span
                                className={`${
                                    !open ? "" : "hidden"
                                } text-sm origin-left duration-300 tooltiptext`}
                            >
                                {menu.title}
                            </span>
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-300 tooltiptext`}
                            >
                                {menu.title}
                            </span>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};
