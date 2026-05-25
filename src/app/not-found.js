import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="bg-linear-to-br from-emerald-50 via-white to-teal-50 min-h-screen py-16">
            <div className="max-w-3xl mx-auto px-5 mt-50">
                <div className="bg-white/90 rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-100 text-emerald-700 text-lg font-semibold">
                        404
                    </div>
                    <h1 className="mt-6 text-3xl font-bold text-gray-900">Page not found</h1>
                    <p className="mt-2 text-gray-500">
                        The page you typed does not exist. Try going back to a safe page.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href="/home"
                            className="px-5 py-2 rounded-md bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition"
                        >
                            Go to Home
                        </Link>
                        <Link
                            href="/timeline"
                            className="px-5 py-2 rounded-md border border-emerald-200 text-emerald-800 text-sm font-semibold hover:bg-emerald-50 transition"
                        >
                            View Timeline
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
