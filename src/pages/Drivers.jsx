import { useEffect, useState } from "react";
import { Navbar, Card } from "../pages";
import { BiRightArrowAlt } from "react-icons/bi";

export const Drivers = () => {
    useEffect(() => {
        document.title = "Drivers";
    });
    const driverData = [
        {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            f_name: "Jason Trudeau",
            cab_no: 712,
            status: "active",
        },
        {
            src: "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8",
            f_name: "Brian Johnson",
            cab_no: 465,
            status: "active",
        },
        {
            src: "https://media.licdn.com/dms/image/D4E03AQHsCmtw9-WqHA/profile-displayphoto-shrink_800_800/0/1693529761225?e=2147483647&v=beta&t=7AmDgbMLu0ueSyS9mdRVMjc9ekPQEyXdN_eDACuKJFU",
            f_name: "Samantha Davis",
            cab_no: 821,
            status: "inactive",
        },
        {
            src: "https://www.deafit.org/wp-content/uploads/2021/12/JosuaNothing_Square_V2.png",
            f_name: "Chris Taylor",
            cab_no: 593,
            status: "active",
        },
        {
            src: "https://www.deafit.org/wp-content/uploads/2021/12/ClaudiaSchweinzer_Square_V2.png",
            f_name: "Eva Rodriguez",
            cab_no: 324,
            status: "inactive",
        },
        {
            src: "https://www.deafit.org/wp-content/uploads/2021/12/ProfDrBenjaminTannert_Square_V2.png",
            f_name: "Daniel Williams",
            cab_no: 879,
            status: "active",
        },
        {
            src: "https://jillstuarteyes.com/cdn/shop/products/3_7a10253e-1e1b-47d9-9019-87509d1e5aeb_900x.jpg?v=1681435730",
            f_name: "Mia Harris",
            cab_no: 234,
            status: "active",
        },
        {
            src: "https://micros-sites.transforms.svdcdn.com/production/images/promise/Cohort-2_Jason-Martinez-fixed_square.jpg?w=1000&h=1000&auto=compress%2Cformat&fit=crop&dm=1670608434&s=6e11883cb8baabb9a8bb4eeac65cde4b",
            f_name: "Jason Turner",
            cab_no: 667,
            status: "inactive",
        },
        {
            src: "https://www.wexfordopera.com/content/artists/2023/Wexford-Factory/Emily-Hogarty-square.jpg?v=1680603425",
            f_name: "Emily Lewis",
            cab_no: 428,
            status: "active",
        },
        {
            src: "https://ocskincancer.com/wp-content/uploads/2021/06/DSM_4459b_web.jpg",
            f_name: "Alex Miller",
            cab_no: 572,
            status: "inactive",
        },
    ];

    return (
        <div className="w-full h-screen overflow-y-scroll">
            <Navbar title="Drivers" />
            <div className="w-full flex flex-wrap gap-4 py-10 px-5 container">
                {driverData.map((driver) => (
                    <Card width="w-72" key={driver.cab_no}>
                        <div className="p-3 flex flex-col items-center w-full ">
                            <div className="flex flex-col justify-center items-center w-full">
                                <img
                                    className="h-20 w-20 rounded-full"
                                    src={driver.src}
                                    alt=""
                                />
                                <p className="text-lg font-bold">
                                    {driver.f_name}
                                </p>
                            </div>
                            <div className="w-full text-center">
                                <p className="text-lg inline-block">
                                    Cab {driver.cab_no}
                                </p>
                                &nbsp;
                                <span
                                    className={`px-[7px] text-xs rounded-full bg-green-600 ${
                                        driver.status === "active"
                                            ? " bg-green-600 "
                                            : " bg-red-600"
                                    } `}
                                ></span>
                            </div>
                            <button className="border-[1px] border-gray-300 p-2 transition duration-300 hover:bg-blue-950 hover:text-white rounded flex items-center justify-center gap-1  w-full">
                                See Details
                                <BiRightArrowAlt />
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
