import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ title }) => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    return (
        <div className="flex w-full bg-white justify-between sticky top-0 p-[20px] border-b-2 shadow-sm">
            <span className="text-2xl font-bold ms-4 pt-1">{title}</span>
            <div>
                <div>
                    <div
                        className="rounded-full cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    >
                        <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>
                </div>
                <div className={`${!toggle ? "hidden" : ""} duration-400 `}>
                    <div className="absolute right-1 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 transition duration-200 hover:bg-gray-100"
                                onClick={() => setToggle(!toggle)}
                            >
                                Your Profile
                            </a>
                        </div>
                        <hr />
                        <div>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 transition duration-200 hover:bg-gray-100"
                                onClick={() => setToggle(!toggle)}
                            >
                                Settings
                            </a>
                        </div>
                        <hr />
                        <div>
                            <a
                                className="block px-4 py-2 text-sm text-gray-700 transition duration-200 hover:bg-gray-100"
                                onClick={() => {
                                    setToggle(!toggle);
                                    navigate("/login");
                                }}
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
