'use client'
import React from 'react'
import img from '@/public/assets/customerImg.svg'
import Image from 'next/image'
import FeedbackCarousel from './FeedbackCarousel'
import { useTranslation } from 'react-i18next'


const CustomerFeedbacl = () => {

    const {t} = useTranslation()

    return (
        <div className='w-full flex justify-center my-20'>
            <div className='flex xl:flex-row flex-col items-start relative w-[90%] sm:pl-10'>
                <div className='flex sm:flex-row flex-col items-start gap-8 w-full'>
                    <div className='sm:w-[45%] w-full'>
                        <h1 className='font-squadaOne xl:text-[65px] lg:text-6xl sm:text-5xl text-3xl xl:w-[90%] w-full leading-none mt-4'>{t('What Our Customers Says About Us')}</h1>
                    </div>
                    <div className='sm:w-[50%] w-full'>
                        <Image alt='' src={img} className='w-full' />
                    </div>
                </div>
                <div className='xl:absolute xl:mt-0 mt-6  bottom-0 left-0 xl:w-[80%] w-full'>
                    <FeedbackCarousel />
                </div>
            </div>
        </div>
    )
}

export default CustomerFeedbacl
