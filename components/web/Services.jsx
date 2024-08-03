'use client'
import React from 'react'
import Carousel from './Carousel'
import { useTranslation } from 'react-i18next'


const Services = () => {

    const {t} = useTranslation();

    return (
        <div className='w-full xl:h-[186vh] h-[130vh] sm:my-20 my-10'>
            <div className=' bg-service-banner  bg-center w-full bg-cover bg-no-repeat z-40 flex items-center  h-full relative' >
                <div className=' w-full flex justify-center items-center ' >
                    <div className='w-[90%]' >
                        <h1 className='font-squadaOne sm:text-[65px] text-4xl text-white text-center'>{t('Our Services')}</h1>
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
