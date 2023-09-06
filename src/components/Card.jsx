import React from "react";

const Card = ({ children, width, flexDirection }) => {
    return (
        <div
            className={`${width} p-2 flex ${flexDirection} items-center justify-between border-[1px] border-gray-200 border-opacity-70 rounded shadow-lg transition duration-200
             hover:bg-gray-200 hover:bg-opacity-60 cursor-pointer`}
        >
            {children}
        </div>
    );
};

export default Card;
