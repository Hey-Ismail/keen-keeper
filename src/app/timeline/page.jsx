"use client";

import { useState } from "react";
import { MessageSquare, Phone, Users, Video } from "lucide-react";
import { useTimeline } from "@/app/components/Navbar";

const formatTimelineDate = (value) => {
    const date = new Date(value);

    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};

const getTimelineMeta = (type) => {
    if (type === "Call") {
        return {
            label: "Call",
            Icon: Phone,
        };
    }

    if (type === "Text") {
        return {
            label: "Text",
            Icon: MessageSquare,
        };
    }

    if (type === "Video") {
        return {
            label: "Video",
            Icon: Video,
        };
    }

    return {
        label: type || "Meetup",
        Icon: Users,
        bg: "bg-amber-100 text-amber-600",
    };
};

const TimelinePage = () => {
    const { timelineItems } = useTimeline();
    const [filter, setFilter] = useState("all");

    const filteredItems = filter === "all"
        ? timelineItems
        : timelineItems.filter((item) => item.type === filter);

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-3xl mx-auto px-5">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Timeline</h1>
                </div>

                <div className="flex items-center justify-start mb-6">
                    <select
                        value={filter}
                        onChange={(event) => setFilter(event.target.value)}
                        className=" max-w-xs rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 shadow-sm "
                    >
                        <option value="all">choose timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                {filteredItems.length === 0 ? (
                    <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500 mt-50">
                        No timeline activity yet. Use Call, Text, or Video on a friend.
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filteredItems.map((item) => {
                            const meta = getTimelineMeta(item.type);
                            const Icon = meta.Icon;

                            return (
                                <div key={item.id} className="bg-white rounded-lg border border-gray-200 px-4 py-3 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-9 w-9 rounded-full flex items-center justify-center ${meta.bg}`}>
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {meta.label} with {item.name}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-0.5">{formatTimelineDate(item.time)}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelinePage;