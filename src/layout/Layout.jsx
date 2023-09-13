import { Outlet } from "react-router-dom";
import { SideNavbar } from "../pages";

export const Layout = () => {
    return (
        <>
            <div className="flex">
                <SideNavbar />
                <Outlet />
            </div>
        </>
    );
};
