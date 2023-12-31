export const Card = ({ children, width }) => {
    return (
        <div
            className={`${width} p-2 flex items-center justify-between border-[1px] border-gray-200 border-opacity-70 rounded shadow-md transition duration-300
             hover:bg-blue-950 hover:bg-opacity-10 hover:shadow-xl cursor-pointer`}
        >
            {children}
        </div>
    );
};
