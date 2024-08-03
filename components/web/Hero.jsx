'use client'
import React from 'react';
import girlImg from '@/public/assets/bannerGirl.png'
import Image from 'next/image';
import { cardData } from '@/libs/data';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Hero = () => {

    const { t } = useTranslation();

    return (
        <div className='xl:h-[120vh]  lg:h-[70vh] h-[55vh] w-full md:mb-20'>
            <div className='bg-web-banner bg-cover bg-center w-full bg-no-repeat z-40  h-full relative'>
                <div className='bg-web-shade bg-cover bg-center w-full h-full flex sm:items-center items-start sm:pt-0 pt-12 justify-center'>
                    <div className='flex items-center   w-[90%] justify-between '>
                        <div className='text-white lg:w-[61%]  w-full  flex flex-col lg:items-start items-center'>
                            <h1 className='font-satisfy leading-10 z-40 outline-title lg:text-[110px] sm:text-[85px] text-6xl relative'>
                                {t('Crystal Clear')}
                            </h1>
                            <h1 className=' font-squadaOne xl:text-[96px] lg:text-[80px] sm:text-[60px] text-5xl leading-none my-6'>{t('Views, Every Time')}</h1>
                            <p className='font-squadaOne lg:text-[26px] sm:text-[20px] text-lg lg:text-start text-center -mt-5'>
                                {t('Professional Window Cleaning Services for Your Home and Business')}</p>
                            <p className='font-medium mt-2 sm:text-base text-sm lg:text-start text-center'>
                                {t('Experience the best in window cleaning with BrillePro. Our expert team ensures spotless, streak-free windows that enhance the beauty of your space. Get your free quote today and see the difference!')}</p>
                            <Link href="/#contactUs"> <button className='bg-darkSkyBlue mt-8 p-2 px-7  text-white rounded-full btnShadow'>
                                {t('Get a Free Quote')}
                            </button></Link>
                        </div>
                        <div className='w-[37%]  lg:block hidden'>
                            <Image alt='' className='w-[450px] ' src={girlImg} />
                        </div>
                    </div>
                </div>
                <div className=' lg:absolute relative z-50 2xl:-bottom-0 xl:-bottom-[16%] lg:-bottom-[22%]  overflow-hidden right-0 w-full flex justify-center'>
                    <div className='md:flex hidden grid-cols-1 2xl:w-[70%] lg:w-[80%] w-[90%] gap-8 mb-4'>
                        {
                            cardData.map((e, i) => (
                                <div key={i} className='bg-white p-4 rounded-xl shadow-lg' >
                                    <div className='flex items-center gap-3'>
                                        {e.icon}
                                        <div>
                                            <p className='text-gray'>{t(e.subhead)}</p>
                                            <h1 className='text-black lg:text-2xl text-lg font-bold'>{t(e.name)}</h1>
                                        </div>
                                    </div>
                                    <p className='text-gray text-sm'>{t(e.des)}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
