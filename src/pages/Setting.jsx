import { useEffect } from "react";
import { Navbar } from "../pages";

export const Setting = () => {
    useEffect(() => {
        document.title = "Setting";
    });
    return (
        <div className="w-full h-screen">
            <Navbar title="Settings" />
        </div>
    );
};
