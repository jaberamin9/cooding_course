"use client"
import React from 'react'
import growSkills from "../assets/grow-skills.png"
import Image from 'next/image'
import Stepper from '@keyvaluesystems/react-stepper'

function SkillGrowth() {

    const styles = {
        LabelTitle: () => ({
            fontSize: "20px",
            fontWeight: 500
        }),
        LabelDescription: () => ({
            backgroundColor: "#4B44BB",
        }),
        LineSeparator: () => ({
            backgroundColor: "#4B44BB",
        }),
        InactiveLineSeparators: () => ({
            backgroundColor: "#4B44BB",
        }),
        ActiveNode: () => ({
            backgroundColor: "#4B44BB",
        }),
        CompletedNode: () => ({
            backgroundColor: "#4B44BB",
        }),
        Node: () => ({
            backgroundColor: "#4B44BB",
        })
    };

    return (
        <div className="container mx-auto max-w-7xl py-20">
            <div className="bg-[#FAF6FF] ">
                <p className="text-[#4B28B5] text-2xl">Let’s Learn Together to </p>
                <h1 className="text-4xl font-bold text-[#010A12] mt-1">Grow Your Skills </h1>
                <div className="rounded-lg flex items-center justify-center mt-7">
                    <div className="w-1/2 flex items-center rounded-lg">
                        <Image
                            src={growSkills}
                            alt="growSkills"
                        />
                    </div>

                    <div className="w-1/2 ml-12">
                        <Stepper
                            steps={[
                                {
                                    stepLabel: "Describe Your Learning Skills",
                                    stepDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
                                    completed: true,
                                },
                                {
                                    stepLabel: "Select course",
                                    stepDescription: "This is Step 2",
                                    completed: false,
                                },
                                {
                                    stepLabel: "Keep track of your experts",
                                    stepDescription: "This is Step 3",
                                    completed: false,
                                },
                            ]}
                            currentStepIndex={0}
                            styles={styles}
                        />

                        <button className="mt-6 bg-[#FAF6FF] px-10 border-[1px] border-[#9B98D9] text-black py-2 rounded-[6px] hover:bg-[#4B44BB] hover:text-white">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SkillGrowth