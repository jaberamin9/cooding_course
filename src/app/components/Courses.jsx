import React from 'react'
import { IconSchool, IconRoute, IconUsers, IconDeviceDesktopAnalytics, IconAward } from '@tabler/icons-react';

function Courses() {
    return (
        <div className="container mx-auto max-w-7xl z-10">
            <div class="flex justify-around bg-[#2B0D57] py-10">
                <div class="flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full bg-[#E7FF7A] flex justify-center items-center mb-2">
                        <IconRoute stroke={2} size={32} />
                    </div>
                    <p class="text-white text-3xl font-bold">360+</p>
                    <p class="text-[#B7AACC] text-lg">Teachers</p>
                </div>

                <div class="flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full bg-[#FF8FDF] flex justify-center items-center mb-2">
                        <IconSchool stroke={2} size={32} />
                    </div>
                    <p class="text-white text-3xl font-bold">30K+</p>
                    <p class="text-[#B7AACC] text-lg">Students</p>
                </div>

                <div class="flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full bg-[#FF5BB4] flex justify-center items-center mb-2">
                        <IconAward stroke={2} size={32} />
                    </div>
                    <p class="text-white text-3xl font-bold">8K+</p>
                    <p class="text-[#B7AACC] text-lg">Lessons</p>
                </div>

                <div class="flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full bg-[#FF8787] flex justify-center items-center mb-2">
                        <IconUsers stroke={2} size={32} />
                    </div>
                    <p class="text-white text-3xl font-bold">200</p>
                    <p class="text-[#B7AACC] text-lg">Partners</p>
                </div>

                <div class="flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full bg-[#65FBD5] flex justify-center items-center mb-2">
                        <IconDeviceDesktopAnalytics stroke={2} size={32} />
                    </div>
                    <p class="text-white text-3xl font-bold">60%</p>
                    <p class="text-[#B7AACC] text-lg">Success</p>
                </div>
            </div>

        </div>
    )
}

export default Courses