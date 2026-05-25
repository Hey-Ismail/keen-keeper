"use client"

import { createContext, useContext, useState } from "react";
import { BarChart3, Clock3, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TimelineContext = createContext(null);

export const TimelineProvider = ({ children }) => {

    const [timelineItems, setTimelineItems] = useState([]);

    const addTimelineItem = (item) => {
        setTimelineItems((prev) => [item, ...prev]);
    };

    return (
        <TimelineContext.Provider value={{ timelineItems, addTimelineItem }}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => {
    const context = useContext(TimelineContext);

    if (!context) {
        throw new Error("useTimeline must be used within TimelineProvider");
    }

    return context;
};

const Navbar = () => {

    const pathname = usePathname();

    const links = [
        {
            name: "Home",
            href: "/home",
            icon: <Home className="w-4 h-4" />,
        },
        {
            name: "Timeline",
            href: "/timeline",
            icon: <Clock3 className="w-4 h-4" />,
        },
        {
            name: "Stats",
            href: "/stats",
            icon: <BarChart3 className="w-4 h-4" />,
        },
    ];

    return (
        <header className="bg-white border-t-4 border-[#244d3f] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-15">
                    <div className="flex items-center">
                        <span className="text-[#244d3fFF] font-semibold text-lg">KeenKeeper</span>
                    </div>

                    <nav className="flex items-center space-x-2">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md transition ${pathname === link.href
                                    ? "bg-[#244d3fFF] text-white shadow-sm"
                                    : "text-gray-600 hover:text-teal-700"
                                    }`}>
                                {link.icon}
                                <span className="hidden sm:inline">{link.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;