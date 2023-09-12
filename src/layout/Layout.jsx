import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";

const Layout = () => {
    return (
        <>
            <div className="flex">
                <SideNavbar />
                <Outlet />
            </div>
        </>
    );
};
export default Layout;
