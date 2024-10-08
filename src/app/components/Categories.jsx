import React from 'react'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import icon33 from "../assets/icon33.png"
import icon11 from "../assets/icon11.png"
import Image from 'next/image'

function Categories() {
    return (
        <div className="container mx-auto max-w-7xl py-20 overflow-hidden">
            <div className="bg-[#2B0D57] relative p-[20px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-6xl text-white z-10">Our Top Categories</h1>
                <p className="mt-4 text-white font-normal max-w-[500px] text-center z-10">Take high quality online courses from the best online instrictors
                    around the world & develop your skills.</p>
                <div class=" absolute w-[400px] h-[400px] top-[-120px] right-[40%] bg-gradient-to-r from-[#241846] to-[#9506FF] blur-[200px]"></div>

            </div>
            <div className="flex justify-center items-center mt-10 gap-8 relative">
                <Image src={icon11} className=" absolute right-20 top-[-130px]" />
                <Image src={icon33} className=" absolute left-20 top-[-100px]" />
                <div className="w-[250px] h-[200px] px-10 py-5 flex gap-2 flex-col justify-center items-center rounded-2xl bg-[#FF8FDF]">
                    <div className="rounded-full p-4 bg-[#FFB6EA]">
                        <Image src={icon1} />
                    </div>
                    <h1 className="font-semibold text-white">React Coding</h1>
                    <p className="underline text-white text-[14px]">View More</p>
                </div>

                <div className="w-[250px] h-[200px] px-10 py-5 flex gap-2 flex-col justify-center items-center rounded-2xl bg-[#FF8787]">
                    <div className="rounded-full p-4 bg-[#FFAAAA]">
                        <Image src={icon2} />
                    </div>
                    <h1 className="font-semibold text-white">Laravel Coding</h1>
                    <p className="underline text-white text-[14px]">View More</p>
                </div>

                <div className="w-[250px] h-[200px] px-10 py-5 flex gap-2 flex-col justify-center items-center rounded-2xl bg-[#49E1BB]">
                    <div className="rounded-full p-4 bg-[#6DF3D2]">
                        <Image src={icon3} />
                    </div>
                    <h1 className="font-semibold text-white">Vue Coding</h1>
                    <p className="underline text-white text-[14px]">View More</p>
                </div>

                <div className="w-[250px] h-[200px] px-10 py-5 flex gap-2 flex-col justify-center items-center rounded-2xl bg-[#FF5BB4]">
                    <div className="rounded-full p-4 bg-[#FF88C9]">
                        <Image src={icon4} />
                    </div>
                    <h1 className="font-semibold text-white">Angular</h1>
                    <p className="underline text-white text-[14px]">View More</p>
                </div>
            </div>
        </div>
    )
}

export default Categories