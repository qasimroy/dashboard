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
import { useNavigate } from "react-router-dom";

const SideNavbar = () => {
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
        { title: "Inbox", src: <BsChatText /> },
        { title: "Accounts", src: <FiUser />, gap: true },
        { title: "Schedule ", src: <BsCalendarDate /> },
        { title: "Search", src: <BiSearchAlt /> },
        { title: "Analytics", src: <AiOutlineAreaChart /> },
        { title: "Files ", src: <AiOutlineFolder />, gap: true },
        { title: "Setting", src: <AiOutlineSetting /> },
    ];
    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        switch (index) {
            case 0:
                navigate("/");
                break;
            case 1:
                navigate("/inbox");
                break;
            case 2:
                navigate("/accounts");
                break;
            case 3:
                navigate("/schedule");
                break;
            case 4:
                navigate("/search");
                break;
            case 5:
                navigate("/anaytics");
                break;
            case 6:
                navigate("/files");
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
                open ? "w-96" : "w-20"
            } bg-blue-950 h-screen p-5 pt-8 relative duration-200 rounded-e-xl`}
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
                    <React.Fragment key={index}>
                        {menu.gap ? <hr className=" opacity-20 mt-2" /> : ""}
                        <li
                            key={`${index}`}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-white hover:bg-opacity-30 text-gray-300 
                            text-md items-center ${!open ? "" : "gap-x-4"}
                            ${menu.gap ? "mt-9" : "mt-2"} ${
                                selectedIndex === index
                                    ? "bg-white bg-opacity-30"
                                    : ""
                            }`}
                            onClick={() => handleMenuItemClick(index)}
                        >
                            <span className="text-lg flex justify-center">
                                {menu.src}
                            </span>
                            <span
                                className={`${
                                    !open && "scale-0"
                                } origin-left duration-300`}
                            >
                                {menu.title}
                            </span>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default SideNavbar;
