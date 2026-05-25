"use client";

import FriendsCard from "../components/FriendsCard";
import data from "../../json/data.json";

const HomePage = () => {

    const overdue = data.filter((friend) => friend.status === "overdue").length;
    const onTrack = data.filter((friend) => friend.status === "on-track").length;
    const almostDue = data.filter((friend) => friend.status === "almost due").length;

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-5">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="mt-6 px-5 py-2 bg-[#244d3fFF] text-white rounded-md hover:bg-green-800 transition">
                        + Add Friends
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-14">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                        <h2 className="text-3xl font-bold text-[#244d3fFF]">{data.length}</h2>
                        <p className="text-gray-500 text-sm mt-1">Total Friends</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                        <h2 className="text-3xl font-bold text-[#244d3fFF]">{onTrack}</h2>
                        <p className="text-gray-500 text-sm mt-1">On Track</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                        <h2 className="text-3xl font-bold text-[#244d3fFF]">{almostDue}</h2>
                        <p className="text-gray-500 text-sm mt-1">Need Attention</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                        <h2 className="text-3xl font-bold text-[#244d3fFF]">{overdue}</h2>
                        <p className="text-gray-500 text-sm mt-1">Overdue</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Friends</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hover:cursor-pointer">
                    {data.map((data) => (
                        <FriendsCard key={data.id} data={data} ></FriendsCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;