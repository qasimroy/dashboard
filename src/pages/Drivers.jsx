import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { BiRightArrowAlt } from "react-icons/bi";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Drivers = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="w-full h-screen overflow-y-scroll">
            <Navbar title="Drivers" />
            <div className="w-full flex flex-wrap gap-4 py-10 px-5 container">
                <Card width="w-72">
                    <div className="p-3 flex flex-col items-center w-full ">
                        <div className="flex flex-col justify-center items-center w-full">
                            <img
                                className="h-20 w-20 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <p className="text-lg font-bold">Ranbir Singh</p>
                        </div>
                        <div className="w-full text-center">
                            <p className="text-lg">Cab 534</p>
                            <Button onClick={openModal} />
                            {/* <Modal isOpen={isOpen} closeModal={closeModal} /> */}
                        </div>
                    </div>
                </Card>
                <Card width="w-72">
                    <div className="p-3 flex flex-col items-center w-full ">
                        <div className="flex flex-col justify-center items-center w-full">
                            <img
                                className="h-20 w-20 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <p className="text-lg font-bold">Ranbir Singh</p>
                        </div>
                        <div className="w-full text-center">
                            <p className="text-lg">Cab 534</p>
                            <Button onClick={openModal} />
                            {/* <Modal isOpen={isOpen} closeModal={closeModal} /> */}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Drivers;
