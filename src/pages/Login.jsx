import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="w-full h-screen flex bg-white  justify-center items-center ">
                <div className="flex flex-col items-center justify-center w-[450px] bg-blue-950 rounded-3xl shadow-2xl p-10">
                    <div className="py-2">
                        <h1 className="font-bold text-2xl text-center text-white">
                            Login
                        </h1>
                    </div>
                    <form>
                        <div>
                            <div className="py-2">
                                <label
                                    className="text-lg text-white"
                                    for="Email"
                                >
                                    Email:
                                </label>
                            </div>
                            <input
                                id="Email"
                                type="email"
                                className="border-[1px] p-2 w-[350px] rounded border-blue-950 border-opacity-40 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <div className="py-2">
                                <label
                                    className="text-lg text-white"
                                    for="Password"
                                >
                                    Password:
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    id="Password"
                                    type={!show ? "password" : "text"}
                                    className="border-[1px] p-2 w-[350px] rounded border-blue-950 border-opacity-40 focus:outline-none"
                                    required
                                />
                                <span
                                    className="absolute top-0 right-0 bg-blue-950 bg-opacity-20 p-[11px]"
                                    onClick={() => setShow(!show)}
                                >
                                    {!show ? (
                                        <AiOutlineEye className="text-blue-950 text-xl" />
                                    ) : (
                                        <AiOutlineEyeInvisible className="text-blue-950 text-xl" />
                                    )}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="py-4">
                                <a
                                    href="/"
                                    type="submit"
                                    className="border-[1px] text-center cursor-pointer p-2 w-[350px] rounded border-white text-lg text-white hover:bg-white
                                    hover:text-blue-950"
                                >
                                    Login
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
