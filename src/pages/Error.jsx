import { useEffect } from "react";

export const Error = () => {
    useEffect(() => {
        document.title = "Error";
    });
    return (
        <div className="w-full h-screen container overflow-y-scroll">
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-4xl font-bold">Error 404 Page Not Found</h1>
            </div>
        </div>
    );
};
