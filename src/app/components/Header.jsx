"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"
import Image from "next/image";

const navLinks = [
    { label: "Home", url: "/" },
    { label: "Course", url: "/course" },
    { label: "About us", url: "/about" },
    { label: "Pricing", url: "/pricing" },
    { label: "Contact", url: "/contact" }
];

function Header() {
    const router = useRouter();
    const [active, setActive] = useState(-1);

    useEffect(() => {
        const activeIndex = navLinks.findIndex((item) => item.url === router.pathname);
        setActive(activeIndex);
    }, [router.pathname]);

    return (
        <div className="container mx-auto max-w-7xl z-10">
            <header className="h-[80px] bg-[#1B0C4D] flex justify-between items-center text-white font-medium">
                <div className="flex items-center">
                    <Image src={logo} alt="code-sandbox-logo" />
                    <h1 className="text-3xl">CodeLearn</h1>
                </div>
                <nav>
                    <ul className="flex justify-between items-center gap-4 text-md">
                        {navLinks?.map((item, index) => (
                            <li
                                key={item.label}
                                className={`cursor-pointer ${index === active ? "text-[#EAE34A]" : "text-white"}`}
                                onClick={() => setActive(index)}
                            >
                                <Link href={item.url}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex justify-between items-center gap-4 text-md">
                    <button className="py-[12px] px-[20px] bg-[#EAE34A] rounded-[4px] text-[#10005A]">Login</button>
                    <button className="py-[12px] px-[20px] bg-[#37266F] rounded-[4px]">Sign up</button>
                </div>
            </header>
        </div>
    );
}

export default Header;
