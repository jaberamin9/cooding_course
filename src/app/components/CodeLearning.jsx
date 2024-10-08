"use client"
import React from 'react'
import laernCooding from "../assets/laern-cooding.png"
import Image from 'next/image'
import { IconShieldCheckFilled, IconMessageCircleFilled } from '@tabler/icons-react'

function CodeLearning() {


    return (
        <div className="container mx-auto max-w-7xl py-20">
            <div className="bg-[#FAF6FF] ">
                <div className="rounded-lg flex items-center justify-center mt-7">
                    <div className="w-1/2 pl-2">
                        <h1 className="text-4xl font-bold text-[#010A12] mt-1">Welcome to Code Learning Centre</h1>
                        <p className="mt-4 text-[#434254]">Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training. </p>
                        <div className="p-6 space-y-8 relative">

                            <div className="relative flex space-x-4">
                                <div className="relative">
                                    <div className="h-10 w-10 bg-[#4B44BB] border-[4px] border-white text-white rounded-full flex items-center justify-center">
                                        <IconShieldCheckFilled className="w-5" />
                                    </div>
                                    <span className="absolute left-[19px] top-10 h-full w-[2px] bg-[#4B44BB]"></span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Safe & Secured</h3>
                                    <p className="text-gray-500 text-sm">
                                        Safe and Secured our services and every step of process.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex space-x-4">
                                <div className="relative">
                                    <div className="h-10 w-10 bg-[#4B44BB] text-white border-white border-[4px] rounded-full flex items-center justify-center">
                                        <IconMessageCircleFilled className="w-5" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Highly Expert Instructors</h3>
                                    <p className="text-gray-500 text-sm">
                                        There are coffee shops, sports, restaurants and a multitude of great study.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="w-1/2 flex items-center rounded-lg ml-12">
                        <Image
                            src={laernCooding}
                            alt="laernCooding"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CodeLearning