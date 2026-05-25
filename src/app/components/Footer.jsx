// import { Facebook, Instagram, X } from "lucide-react";

import facebook from "../../../public/assets/facebook.png"
import instagram from "../../../public/assets/instagram.png"
import twitter from "../../../public/assets/twitter.png"

import Image from "next/image"
const Footer = () => {
    return (
        <footer className="bg-emerald-900 text-white mt-auto">
            <div className="max-w-6xl mx-auto px-5 py-12 text-center">
                <h2 className="text-3xl font-semibold">KeenKeeper</h2>
                <p className="text-sm text-emerald-100 mt-3 max-w-xl mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mt-6 text-sm font-semibold">Social Links</div>
                <div className="mt-3 flex items-center justify-center gap-3">
                    <a
                        href="#"
                        className="h-9 w-9 rounded-full bg-white text-emerald-900 flex items-center justify-center"
                        aria-label="Instagram"
                    >
                        <Image
                            src={instagram}
                            alt="facebook-image"
                            width={200}
                            height={200}
                        ></Image>
                    </a>
                    <a
                        href="#"
                        className="h-9 w-9 rounded-full bg-white text-emerald-900 flex items-center justify-center"
                        aria-label="Facebook"
                    >
                        {/* <Facebook className="h-4 w-4" /> */}
                        {/* <Facebook /> */}

                        <Image
                            src={facebook}
                            alt="facebook-image"
                            width={200}
                            height={200}
                        ></Image>
                    </a>
                    <a
                        href="#"
                        className="h-9 w-9 rounded-full bg-white text-emerald-900 flex items-center justify-center"
                        aria-label="X"
                    >
                        <Image
                            src={twitter}
                            alt="facebook-image"
                            width={200}
                            height={200}
                        ></Image>
                    </a>
                </div>
            </div>

            <div className="border-t border-emerald-800">
                <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-3 text-xs text-emerald-100 sm:flex-row sm:items-center sm:justify-between ">
                    <span className="text-center sm:text-left">© 2026 KeenKeeper. All rights reserved.</span>
                    <div className="flex items-center justify-center gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;