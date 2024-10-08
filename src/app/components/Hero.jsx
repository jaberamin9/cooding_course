import React from 'react'
import Image from "next/image";
import play from "../assets/play.png"
import star from "../assets/star.png"
import check from "../assets/check.png"
import companyLogo from "../assets/company-logo.png"
import leftImg from "../assets/left-img.png"

function Hero() {

    const instructors = [
        { name: "Zillio Moniel", role: "Data Engineer", bgColor: "bg-green-200" },
        { name: "Lissa Kie", role: "React Engineer", bgColor: "bg-purple-200" },
        { name: "Killan James", role: "Laravel Engineer", bgColor: "bg-blue-200" },
    ];

    return (
        <div className="container mx-auto max-w-7xl h-screen">
            <div className="bg-[#160A3A] text-white py-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative">

                    <div className="w-1/2 space-y-6">
                        <div className="flex items-center gap-2 text-sm">

                            <span className="flex gap-2 items-center bg-gradient-to-r from-[#241457] to-[#4F2BBD] py-[6px] px-[24px] rounded-[8px]">
                                <Image src={check} />
                                Verified by Coursera
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold w-[400px]">
                            Learn Code From top <span className="text-yellow-400 underline">Coder</span>
                        </h1>
                        <p className="text-gray-300">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-[#EAE34A] text-[#10005A] py-3 px-6 rounded-[4px] shadow-customButton">Get Started</button>
                            <button className="bg-[#291B52] text-white py-3 px-6 rounded-[4px] flex gap-2">
                                <Image src={play} />
                                How it works
                            </button>
                        </div>
                        <div className="flex items-center gap-2 mt-4 text-gray-400">
                            <Image src={star} />
                            <p>Based on 10,000+ reviews on</p>
                        </div>
                        <Image src={companyLogo} alt="companyLogo" />
                    </div>

                    <div class="absolute w-[500px] h-[500px] top-0 right-0 bg-gradient-to-r from-[#241846] to-[#9506FF] blur-[200px]">

                    </div>
                    <div className="md:w-1/2 flex justify-around mt-8 md:mt-0 z-10">
                        <Image src={leftImg} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero