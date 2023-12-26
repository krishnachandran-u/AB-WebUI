import '../styles/styles.css';
import Image from 'next/image';

import LogoWithName from '../assets/images/ab-logowithname.png';
import socials from '../assets/images/socials.png';

export default function PageThree() {
    return (
        <div className="half-height bg-[#030C48] w-screen flex flex-row justify-around items-center">
            <div className="flex flex-row justify-around items-center">
                <div className="flex flex-col justify-center items-center">
                    <Image src={LogoWithName} alt="LogoWithName" width={200} height={200} />
                </div>
            </div>
            <div className="flex flex-col justify-center items-start text-slate-300 gap-3">
                <h3 className="font-bold text-white">Site map</h3>
                <h3 className="hover:cursor-pointer">Home</h3>
                <h3 className="hover:cursor-pointer">Services</h3>
                <h3 className="hover:cursor-pointer">Electronics</h3>
                <h3 className="hover:cursor-pointer">About</h3>
                <h3 className="hover:cursor-pointer">Contact</h3>
            </div>
            <div className="flex flex-col justify-center items-start text-slate-300 gap-3">
                <h3 className="font-bold text-white">Email</h3>
                <h3 className="hover:cursor-pointer">abcompanyirulam@gmail.com</h3>
                <h3 className="font-bold text-white">Phone</h3>
                <h3 className="hover:cursor-pointer">+91 9074968875</h3>
                <h3 className="hover:cursor-pointer">+91 9078255955</h3>
                <h3 className="hover:cursor-pointer">+91 8075706038</h3>
                <Image src={socials} alt="socials" width={200} height={200} className = "hover:cursor-pointer"/>
            </div>
        </div>
    )
}