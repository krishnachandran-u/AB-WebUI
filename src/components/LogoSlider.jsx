"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io';
import { DiJqueryLogo } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { useEffect, useState } from 'react';

const LogoSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const vwValue = 90;
            const calculatedValueInPixels = (vwValue * window.innerWidth) / 100;

            const remValue = 10;
            const calculatedRemValueInPixels = remValue * 16; 

            const finalCalculatedValue = Math.floor(calculatedValueInPixels / calculatedRemValueInPixels);
            setSlidesPerView(finalCalculatedValue);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Swiper
            slidesPerView={Math.min(slidesPerView, 9)}
             effect={'coverflow'}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper" 
        >
            <SwiperSlide>
                <FaReact />
            </SwiperSlide>
            <SwiperSlide>
                <BiLogoTypescript />
            </SwiperSlide>
            <SwiperSlide>
                <SiNextdotjs />
            </SwiperSlide>
            <SwiperSlide>
                <SiPrisma />
            </SwiperSlide>
            <SwiperSlide>
                <BiLogoPostgresql />
            </SwiperSlide>
            <SwiperSlide>
                <IoLogoJavascript />
            </SwiperSlide>
            <SwiperSlide>
                <DiJqueryLogo />
            </SwiperSlide>
            <SwiperSlide>
                <FaNodeJs />
            </SwiperSlide>
            <SwiperSlide>
                <SiTailwindcss />
            </SwiperSlide>
            <SwiperSlide>
                <FaSass />
            </SwiperSlide>
            <SwiperSlide>
                <FaHtml5 />
            </SwiperSlide>
            <SwiperSlide>
                <FaCss3Alt />
            </SwiperSlide>
            <SwiperSlide>
                <SiMongodb />  
            </SwiperSlide>
        </Swiper>
    );
}

export default LogoSlider;
