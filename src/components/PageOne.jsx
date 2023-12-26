import Image from "next/image";
import Head from 'next/head';
import logo from "../assets/images/ab-logo.png";
import sliderImage from "../assets/images/slider.png";
import { Badge } from "@/components/ui/badge";
import { FaArrowRight } from "react-icons/fa6";

export default function PageOne() {
    return (
        <main>
            <div className="flex flex-col items-center h-screen w-screen">
                <div className="flex items-center justify-between w-full p-5">
                    <Image src={logo} alt="AB-logo" width={50} height={50} className = "hover:cursor-pointer"/>
                    <div className="flex justify-between items-center w-1/2">
                        <h3 className="hover:cursor-pointer">Home</h3>
                        <h3 className="hover:cursor-pointer">Products</h3>
                        <h3 className="hover:cursor-pointer">EMI Programme</h3>
                        <h3 className="hover:cursor-pointer">Services</h3>
                        <Badge className="flex flex-col justify-center items-center hover:cursor-pointer w-40 h-10 font-normal text-base p-0 bg-[#0074C9]">Contact</Badge>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center text-5xl m-10 text-center">
                        <h1 className="font-bold font-rethinksans w-3/4">
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-700 bg-clip-text text-transparent">
                                A&B company
                            </span>, Your Perfect Partner for Comprehensive Solutions
                        </h1>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <h3 className="text-center w-1/2 text-slate-600">
                            Transform challenges into opportunities with A&B Company, where our unwavering commitment to your goals drives transformative solutions that propel your business to new heights.
                        </h3>
                    </div>
                    <div className="flex flex-row justify-center items-center m-10">
                        <Badge variant="outline" className="flex flex-row justify-center items-center text-base p-5 w-40 border-2 border-black hover:cursor-pointer">
                            Explore
                            <FaArrowRight className="ml-3" />
                        </Badge>
                    </div>
                    <div className="flex flex-row items-center justify-center w-3/4">
                        <Image src={sliderImage} alt="slider" width={1500} height={500} className="w-max" />
                    </div>
                </div>
            </div>
        </main>
    );
}
