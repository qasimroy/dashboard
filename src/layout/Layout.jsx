import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Inbox from "../pages/Inbox";
import Account from "../pages/Account";
import Analytics from "../pages/Analytics";
import Files from "../pages/Files";
import Schedule from "../pages/Schedule";
import Search from "../pages/Search";
import Setting from "../pages/Setting";

const Layout = () => {
    return (
        <>
            <div className="flex">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/accounts" element={<Account />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/anaytics" element={<Analytics />} />
                    <Route path="/files" element={<Files />} />
                    <Route path="/settings" element={<Setting />} />
                </Routes>
            </div>
        </>
    );
};

export default Layout;
