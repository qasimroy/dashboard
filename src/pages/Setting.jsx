import { useEffect } from "react";
import { Card, Navbar } from "../pages";
import { AiOutlineSetting } from "react-icons/ai";

export const Setting = () => {
    useEffect(() => {
        document.title = "Setting";
    });
    return (
        <div className="w-full h-screen">
            <Navbar title="Settings" />
            <div className="p-12">
                <Card width="w-72">
                    <div className="w-full">
                        <div className="flex items-center gap-2">
                            <AiOutlineSetting />
                            <h3 className="font-bold">General</h3>
                        </div>
                        <div className="p-2">
                            <p>some text here</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
