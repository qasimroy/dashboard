import React from "react";

const Card = ({ children, width }) => {
    return (
        <div
            className={`${width} h-full p-2 border-[1px] border-gray-200 border-opacity-70 rounded shadow-lg transition duration-200
             hover:bg-gray-200 hover:bg-opacity-60 cursor-pointer`}
        >
            {children}
        </div>
    );
};

export default Card;
