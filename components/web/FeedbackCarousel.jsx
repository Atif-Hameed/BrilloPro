'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { IoStarSharp } from "react-icons/io5";
import img from '@/public/assets/customerPic.svg';
import { useTranslation } from 'react-i18next';

const testimonials = [
    {
        text: "Working with AFP Painting was a great experience. They exceeded my expectations and delivered exceptional results.",
        rating: 5.0,
        name: "Sophie Carter",
        location: "New York, USA",
        image: img,
    },
    {
        text: "Working with AFP Painting was a great experience. They exceeded my expectations and delivered exceptional results.",
        rating: 5.0,
        name: "Sophie Carter",
        location: "New York, USA",
        image: img,
    },
    {
        text: "Working with AFP Painting was a great experience. They exceeded my expectations and delivered exceptional results.",
        rating: 5.0,
        name: "Sophie Carter",
        location: "New York, USA",
        image: img,
    },
    // Add more testimonials as needed
];

const FeedbackCarousel = () => {

    const {t} = useTranslation();

    const [activeSlide, setActiveSlide] = React.useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current, next) => setActiveSlide(next),
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
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto ">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-4 h-full">
                        <div
                            className={`p-8 rounded-lg transition-transform text-white duration-500 ${index === activeSlide + 1 || (activeSlide === testimonials.length - 1 && index === 0)
                                ? 'bg-darkBlue transform  '
                                : 'bg-[#1F3D61CC]  scale-90'
                                }`}
                        >
                            <div className="text-[65px] font-bold mb-4">“</div>
                            <div className="text-xl mb-4">“{t(testimonial.text)}”</div>
                            <div className="text-lg text font-semibold flex items-center">{t(testimonial.rating)}.0
                                <IoStarSharp className='text-[#FED600] ml-3' />
                                <IoStarSharp className='text-[#FED600]' />
                                <IoStarSharp className='text-[#FED600]' />
                                <IoStarSharp className='text-[#FED600]' />
                                <IoStarSharp className='text-[#FED600]' />
                            </div>
                            <div className="flex items-center mt-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                    width={48}
                                    height={48}
                                />
                                <div>
                                    <div className="font-bold">{t(testimonial.name)}</div>
                                    <div className="text-sm">{t(testimonial.location)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeedbackCarousel;
