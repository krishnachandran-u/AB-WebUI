import '../styles/styles.css';

import Image from 'next/image';

import { Badge } from "@/components/ui/badge";

import { FaAngleDown } from "react-icons/fa";

import cell1 from '../assets/images/cell1.png';
import cell2 from '../assets/images/cell2.png';
import cell3 from '../assets/images/cell3.png';
import cell4 from '../assets/images/cell4.png';

export default function PageTwo() {
    return (
        <div className="custom-height w-screen flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-center font-semibold m-3">Our Products</h1>
                <p className="w-3/4 text-center text-slate-600">We have unified collection of products Lorem ipsum dolor sit amet consectetur. Dictum sed cursus magna purus montes.</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-3">
                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                    <Image src={cell1} alt="cell1" width={500} height={500} />
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-4">
                    <Image src={cell3} alt="cell3" width={500} height={500} />
                </div>
                <div className="col-start-2 col-end-3 row-start-1 row-end-3">
                    <Image src={cell2} alt="cell2" width={500} height={500} />
                </div>
                <div className="col-start-2 col-end-3 row-start-3 row-end-4">
                    <Image src={cell4} alt="cell4" width={500} height={500} />
                </div>
            </div>
            <div>
                <Badge variant="outline" className="flex flex-row justify-center items-center text-base p-5 w-60 border-2 border-black hover:cursor-pointer">
                    View All Products
                    <FaAngleDown className="ml-3"/>
                </Badge>
            </div>
        </div>
    )
}