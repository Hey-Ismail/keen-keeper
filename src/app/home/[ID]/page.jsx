"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Archive, Bell, FilePenLine, MessageSquare, Phone, Trash2, Video } from "lucide-react";
import data from "@/json/data.json";
import { toast, Slide } from "react-toastify";
import { useTimeline } from "@/app/components/Navbar";


const formatDate = (value) => {
    const date = new Date(value);

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};

const statusClass = (status) => {
    if (status === "on-track") {
        return "bg-emerald-700 text-white";
    }

    if (status === "almost due") {
        return "bg-amber-500 text-white";
    }

    return "bg-red-500 text-white";
};

const FriendsCardDetails = () => {
    const { ID } = useParams();
    const friend = data.find((f) => String(f.id) === String(ID));
    const { addTimelineItem } = useTimeline();

    if (!ID) {
        return (
            <div className="max-w-6xl mx-auto px-5 py-12  text-center mt-50">
                <h2 className="text-3xl font-semibold text-gray-900">Loading friend...</h2>
            </div>
        );
    }

    if (!friend) {
        return (
            <div className="max-w-6xl mx-auto px-5 py-12  text-center mt-50">
                <h2 className="text-3xl font-semibold text-gray-900">Friend not found.</h2>
            </div>
        );
    }

    const handelClick = (Icon, actionName) => {
        const now = new Date();

        addTimelineItem({
            id: `${friend.id}-${now.getTime()}-${actionName}`,
            name: friend.name,
            type: actionName,
            time: now.toISOString(),
        });

        toast(`${actionName} with ${friend.name}`, {
            icon: <Icon className="h-5 w-5" />,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Slide,
        });

    };

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-5 lg:mt-40">
                <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
                    <div className="space-y-4">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm text-center">
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                width={85}
                                height={85}
                                className="rounded-full border-2 border-gray-200 mx-auto"
                            />
                            <h2 className="mt-4 text-lg font-semibold text-gray-900">{friend.name}</h2>
                            <span className={`mt-2 inline-flex px-3 py-1 rounded-full text-xs font-medium ${statusClass(friend.status)}`}>
                                {friend.status}
                            </span>

                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                                {friend.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-xs text-gray-400 mt-4">&ldquo;{friend.bio}&rdquo;</p>
                            <p className="text-xs text-gray-400 mt-2">Preferred: {friend.email}</p>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y">
                            <button className="w-full flex items-center justify-center gap-2 py-2 text-sm hover:bg-gray-50">
                                <Bell className="h-4 w-4" />
                                Snooze 2 Weeks
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-2 text-sm hover:bg-gray-50">
                                <Archive className="h-4 w-4" />
                                Archive
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-2 text-sm text-red-600 hover:bg-red-50">
                                <Trash2 className="h-4 w-4" />
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900">{friend.days_since_contact}</h3>
                                <p className="text-xs text-gray-400 mt-1">Days Since Contact</p>
                            </div>
                            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900">{friend.goal}</h3>
                                <p className="text-xs text-gray-400 mt-1">Goal (Days)</p>
                            </div>
                            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900">{formatDate(friend.next_due_date)}</h3>
                                <p className="text-xs text-gray-400 mt-1">Next Due</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-700">Relationship Goal</h4>

                                <FilePenLine className="hover:cursor-pointer" />

                            </div>

                            <p className="text-sm text-gray-500 mt-3">Connect every {friend.goal} days</p>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm ">
                            <h4 className="text-sm font-semibold text-gray-700">Quick Check-In</h4>
                            <div className="mt-4 grid gap-3 sm:grid-cols-3 ">
                                <button
                                    onClick={() => handelClick(Phone, "Call")}
                                    className="rounded-lg border border-gray-200 py-3 text-xs text-gray-600 flex flex-col items-center gap-2 hover:bg-gray-50 hover:cursor-pointer"
                                >
                                    <Phone className="h-4 w-4" />
                                    Call
                                </button>
                                <button
                                    onClick={() => handelClick(MessageSquare, "Text")}
                                    className="rounded-lg border border-gray-200 py-3 text-xs text-gray-600 flex flex-col items-center gap-2 hover:bg-gray-50 hover:cursor-pointer"
                                >
                                    <MessageSquare className="h-4 w-4" />
                                    Text
                                </button>
                                <button
                                    onClick={() => handelClick(Video, "Video")}
                                    className="rounded-lg border border-gray-200 py-3 text-xs text-gray-600 flex flex-col items-center gap-2 hover:bg-gray-50 hover:cursor-pointer"
                                >
                                    <Video className="h-4 w-4" />
                                    Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FriendsCardDetails;