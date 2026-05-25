"use client";

import { useTimeline } from "@/app/components/Navbar";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const StatsPage = () => {
    const { timelineItems } = useTimeline();

    const textCount = timelineItems.filter((item) => item.type === "Text").length;
    const callCount = timelineItems.filter((item) => item.type === "Call").length;
    const videoCount = timelineItems.filter((item) => item.type === "Video").length;
    const total = textCount + callCount + videoCount;

    const chartData = [
        { name: "Text", value: textCount, color: "#7c3aed" },
        { name: "Call", value: callCount, color: "#22c55e" },
        { name: "Video", value: videoCount, color: "#0ea5e9" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-5">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 text-center">Friendship Analytics</h1>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h2 className="text-sm font-semibold text-emerald-900">By Interaction Type</h2>

                    {total === 0 ? (
                        <div className="text-sm text-gray-400 mt-8 text-center">
                            No data yet. Use Call, Text, or Video on a friend.
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-10">
                            <div className="h-44 w-44">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            dataKey="value"
                                            innerRadius={50}
                                            outerRadius={70}
                                            paddingAngle={3}
                                            stroke="none"
                                        >
                                            {chartData.map((entry) => (
                                                <Cell key={entry.name} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="mt-6 flex items-center gap-5 text-xs text-gray-500">
                                {chartData.map((item) => (
                                    <div key={item.name} className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                                        {item.name} ({item.value})
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatsPage;