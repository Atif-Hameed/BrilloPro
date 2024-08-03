'use client'
import React from 'react'
import img1 from '@/public/assets/choose1.svg'
import img2 from '@/public/assets/choose2.svg'
import img3 from '@/public/assets/choose3.svg'
import icon1 from '@/public/assets/chooseicon1.svg'
import icon2 from '@/public/assets/chooseicon2.svg'
import icon3 from '@/public/assets/chooseicon3.svg'
import icon4 from '@/public/assets/chooseicon4.svg'
import Image from 'next/image'
import dots from '@/public/assets/dots.svg'
import { useTranslation } from 'react-i18next'

const WhyChoose = () => {

    const {t} = useTranslation();

    const data = [
        { icon: icon1, name: 'Experienced Professionals', des: 'Our team consists of trained and experienced professionals who are dedicated to delivering the best results.' },
        { icon: icon2, name: 'Eco-Friendly Products', des: 'We use eco-friendly cleaning products that are safe for your family, pets, and the environment.' },
        { icon: icon3, name: 'Customer Satisfaction Guarantee', des: 'We stand by our work with a satisfaction guarantee. If you\'re not happy, we\'ll make it right.' },
        { icon: icon4, name: 'Flexible Scheduling', des: 'We offer flexible scheduling options to accommodate your busy life.' },
    ]

    return (
        <div className='flex justify-center'>
        <div className='flex w-[90%] gap-10 lg:flex-row flex-col-reverse items-center justify-between' >
            <div className='flex gap-4 lg:items-start items-center lg:justify-normal justify-center lg:w-1/2  w-full'>
                <div className='flex flex-col gap-4 mt-8'>
                    <Image alt='' src={img1} />
                    <Image alt='' src={img2} />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex'>
                        <Image alt='' src={dots} />
                        <Image alt='' src={dots} />
                    </div>
                    <Image alt='' src={img3} />
                </div>
            </div>
            <div>
                <h1 className='sm:text-[65px] text-4xl font-squadaOne text-darkBlack'>{t('Why Choose BrillePro')}</h1>
                <div className='flex flex-col gap-2 mt-8'>
                    {
                        data.map((e, i) => (
                            <div className='flex items-center gap-3 rounded-lg hover:bg-darkBlue px-3 py-2 cursor-pointer group bg-white shadow-md' key={i} >
                                <div className='bg-darkSkyBlue p-2 rounded-full' >
                                    <Image alt='' src={e.icon} />
                                </div>
                                <div>
                                    <h1 className='text-black group-hover:text-white  font-squadaOne  sm:text-2xl text-lg' >{t(e.name)}</h1>
                                    <p className='text-gray group-hover:text-white sm:text-sm text-xs'>{t(e.des)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

export default WhyChoose
