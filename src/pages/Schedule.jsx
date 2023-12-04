import { useEffect } from "react";
import { Navbar } from "../pages";

export const Schedule = () => {
    useEffect(() => {
        document.title = "Schedule";
    });
    return (
        <div className="w-full h-screen">
            <Navbar title="Schedule" />
        </div>
    );
};
