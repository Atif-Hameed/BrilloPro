'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '@/public/assets/slide1.svg'
import img2 from '@/public/assets/slide2.svg'
import img3 from '@/public/assets/slide3.svg'
import Image from "next/image";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";

const carouselItems = [
    { img: img1, name: "Residential Window Cleaning", des: 'Our professional residential window cleaning services ensure your home looks its best. We handle everything from single-story homes to multi-level residences.' },
    { img: img2, name: "Commercial Window Cleaning", des: 'Keep your business looking professional with our commercial window cleaning services. We cater to offices, retail spaces, and other commercial buildings."' },
    { img: img3, name: "Gutter Cleaning", des: 'Prevent water damage and maintain your propertys integrity with our thorough gutter cleaning services.' },

];


const CustomNextArrow = ({ onClick }) => {
    return (
        <div className="absolute  xl:right-[46%] sm:right-[42%] right-[35%] h-fit hover:bg-[#5356FF] p-2 rounded-full border border-white  group -bottom-16 transform sm:-translate-y-1/2  cursor-pointer z-10" onClick={onClick}>
            <LiaLongArrowAltRightSolid className='text-white text-xl group-hover:text-white' />
        </div>
    );
};

const CustomPrevArrow = ({ onClick }) => {
    return (
        <div className="absolute xl:left-[46%] sm:left-[42%] left-[35%] h-fit hover:bg-[#5356FF] p-2 rounded-full border border-white  group -bottom-16 transform sm:-translate-y-1/2  cursor-pointer z-10" onClick={onClick}>
            <LiaLongArrowAltLeftSolid className='text-white text-xl group-hover:text-white' />
        </div>
    );
};


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};


const Carousel = () => {

    const {t} = useTranslation();

    return (
        <div className="container mx-auto p-4">
            <Slider {...settings}>
                {carouselItems.map((e, i) => (
                    <div key={i} className="p-4">
                        <div className="bg-transparent text-white flex gap-2 flex-col">
                            <Image alt="" src={e.img} className="h-full" />
                            <h1 className="font-squadaOne text-3xl">{t(e.name)}</h1>
                            <p className="text-sm">{t(e.des)}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
