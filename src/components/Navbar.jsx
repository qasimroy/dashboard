import React, { useState, useEffect } from "react";
import { BiLeftArrowAlt, BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import {
    AiOutlineAreaChart,
    AiOutlineFolder,
    AiOutlineSetting,
} from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsChatText, BsCalendarDate } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const Menus = [
        { title: "Dashboard", src: <LuLayoutDashboard /> },
        { title: "Inbox", src: <BsChatText /> },
        { title: "Accounts", src: <FiUser />, gap: true },
        { title: "Schedule ", src: <BsCalendarDate /> },
        { title: "Search", src: <BiSearchAlt /> },
        { title: "Analytics", src: <AiOutlineAreaChart /> },
        { title: "Files ", src: <AiOutlineFolder />, gap: true },
        { title: "Setting", src: <AiOutlineSetting /> },
    ];

    return (
        <div
            className={`${
                open ? "w-72" : "w-20"
            } bg-blue-950 h-screen p-5  pt-8 relative duration-300 rounded-e-xl`}
        >
            <div
                className={`absolute text-blue-950 p-1 bg-white cursor-pointer -right-3 top-9 w-7 border-blue-950
                border-2 rounded-full ${!open && "rotate-180"} duration-300`}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <BiLeftArrowAlt />
            </div>
            <div className="flex gap-x-4 items-center cursor-pointer">
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
                    <>
                        {menu.gap ? (
                            <hr className="text-white opacity-25 mt-2" />
                        ) : (
                            ""
                        )}
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-white hover:bg-opacity-30 text-gray-300 
                        text-md items-center ${!open ? "" : "gap-x-4"}
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                                selectedIndex === index
                                    ? "bg-white bg-opacity-30"
                                    : ""
                            }`}
                            onClick={() => {
                                setSelectedIndex(index);
                            }}
                        >
                            <span className="text-lg flex justify-center">
                                {menu.src}
                            </span>
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-300`}
                            >
                                {menu.title}
                            </span>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
