import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Button = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="border-[1px] border-gray-300 p-2 transition duration-300 hover:bg-blue-950 hover:text-white rounded flex items-center justify-center gap-1  w-full"
        >
            See Details
            <BiRightArrowAlt />
        </button>
    );
};

export default Button;
