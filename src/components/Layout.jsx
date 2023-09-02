import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex">
                <Navbar />
                <main>{children}</main>
            </div>
        </>
    );
};

export default Layout;
