import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import Dashboard from "../pages/Dashboard";
import Complaint from "../pages/Complaint";
import Drivers from "../pages/Drivers";
import Signature from "../pages/Signature";
import Documents from "../pages/Documents";
import Schedule from "../pages/Schedule";
import Reciept from "../pages/Reciept";
import Setting from "../pages/Setting";

const Layout = () => {
    return (
        <>
            <div className="flex">
                <SideNavbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/complaint" element={<Complaint />} />
                    <Route path="/drivers" element={<Drivers />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/reciept" element={<Reciept />} />
                    <Route path="/e-signature" element={<Signature />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/settings" element={<Setting />} />
                </Routes>
            </div>
        </>
    );
};
export default Layout;
