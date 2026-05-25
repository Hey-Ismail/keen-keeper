import Image from "next/image";

const FriendsCard = ({ friend }) => {

    const statusClass =
        friend.status === "on-track"
            ? "bg-[#244d3fFF] text-white"
            : friend.status === "almost due"
                ? "bg-[#efad44FF] text-white"
                : "bg-[#ef4444FF] text-white";

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition duration-300">
            <div className="flex flex-col items-center">
                <Image
                    src={friend.picture}
                    alt={friend.name}
                    width={70}
                    height={70}
                    className="rounded-full border-2 border-gray-200"
                />

                <h3 className="font-semibold text-lg mt-4 text-gray-900">
                    {friend.name}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                    {friend.days_since_contact}d ago
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {friend.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                            {tag}
                        </span>
                    ))}
                </div>

                <span className={`mt-4 px-3 py-1 rounded-full text-xs font-medium ${statusClass}`}>
                    {friend.status}
                </span>
            </div>
        </div>
    );
};

export default FriendsCard;