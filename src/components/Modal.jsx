import React, { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

export const Modal = ({ title, heading, children, fBtn }) => {
    const [isOpen, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    };
    const openModel = () => {
        setOpen(true);
    };
    const handleEscape = (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);
    return (
        <div>
            <div>
                <button
                    className="p-2 border-[1px] border-gray-300 rounded-lg float-right bg-blue-950 text-white 
                    transition duration-300"
                    onClick={openModel}
                >
                    {title}
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center ">
                    <div className="bg-white p-8 rounded-lg shadow-md lg:w-[30%] sm:w-[70%] ">
                        <div>
                            <div className=" flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold">
                                    {heading}
                                </h2>
                                <VscChromeClose
                                    onClick={closeModal}
                                    className="cursor-pointer text-2xl"
                                />
                            </div>
                            <div>{children}</div>
                            <button
                                className="bg-blue-950 float-right text-white px-4 py-2 rounded-md focus:outline-2 focus:outline-blue-950 outline-offset-[5px]"
                                onClick={closeModal}
                            >
                                {fBtn}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
