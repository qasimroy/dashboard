import React, { useEffect } from "react";
import { Navbar } from "../pages";

export const Signature = () => {
    useEffect(() => {
        document.title = "Signature";
    });
    return (
        <div className="w-full h-screen">
            <Navbar title="E-Signature" />
        </div>
    );
};
