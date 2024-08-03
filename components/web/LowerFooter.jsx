'use client'
import React from 'react'
import logo from '@/public/assets/lowerLogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { BsEnvelope } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';


const LowerFooter = () => {

    const { t } = useTranslation();

    const data = [
        { name: 'Home', src: '/' },
        { name: 'About', src: '/about' },
        // { name: 'Portfolio', src: '#' },
        { name: 'Services', src: '/services' },
        { name: 'Contact', src: '/contact' },
    ]

    return (
        <div className='w-full xl:h-[100vh] overflow-hidden md:h-[70vh] h-[90vh]'>
            <div className=' bg-footer-banner md:p-0 p-4 bg-center w-full bg-cover bg-no-repeat z-40 flex items-end justify-center h-full relative' >
                <div className='w-[90%] ' >
                    <div className='w-full flex flex-wrap items-start justify-between '>
                        <div className='md:w-1/2 w-full flex flex-col md:gap-0 gap-2 '>
                            <Image alt='' src={logo} />
                            <p className='text-white sm:text-base text-xs mt-3 md:w-[70%] w-full'>{t('At BrillePro, our mission is to enhance the beauty and clarity of every window we touch.')}  </p>
                        </div>
                        <div className='md:w-1/2 w-full flex  items-start md:justify-normal md:mt-0 mt-4 justify-between'>
                            <div className='w-1/2'>
                                <h1 className='text-white text-lg'>{t('Quick Links')}</h1>
                                <div className='text-white text-sm flex flex-col gap-2 md:mt-6 mt-3'>
                                    {
                                        data.map((e, i) => (
                                            <Link href={e.src} key={i} >{t(e.name)}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <h1 className='text-white text-lg'>{t('Contact')}</h1>
                                <div className='text-white text-sm flex flex-col gap-2 sm:mt-6 mt-3'>
                                    <div className='flex items-center gap-2'>
                                        <BsEnvelope className='text-white text-sm w-5' />
                                        <p className='text-white text-sm break-all'>{t('info@brillepro.com')}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <LuPhone className='text-white text-sm' />
                                        <p className='text-white text-sm'>{t('(514) 500-1178')}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaLocationDot className='text-white text-sm' />
                                        <p className='text-white text-sm'> {t('108-2525 Rue de l&apos;Acajou, Montreal, Qc, H4R 2W9')}</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Link href={'/https://www.facebook.com/BrillePro'} className='bg-[#88E5F11A] p-2 rounded-full'>
                                            <RiFacebookFill className='text-white text-lg' />
                                        </Link>
                                        <Link href={'/https://www.instagram.com/BrillePro'} className='bg-[#88E5F11A] p-2 rounded-full'>
                                            <IoLogoInstagram className='text-white text-lg' />
                                        </Link>
                                        <Link href={'https://www.twitter.com/BrillePro'} className='bg-[#88E5F11A] p-2 rounded-full'>
                                            <IoLogoTwitter className='text-white text-lg' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-white flex md:flex-row flex-col gap-2 justify-between py-4 md:mt-20 mt-8 sm:mb-5 mb-2 pr-10'>
                        <p className='text-white text-sm'>{t('Copyright © 2024 ZySoftec. All rights reserved')}</p>
                        <div className='flex items-center gap-4'>
                            {/* <Link href={'#'} className='text-white text-sm'>Terms of use</Link> */}
                            {/* <div className='h-full w-[1px] bg-white' ></div> */}
                            <Link href={'/privacy-policy'} className='text-white text-sm'>{t('Privacy policy')}</Link>
                        </div>
                    </div>
                </div>
                {/* <div className='border border-white rounded-full ml-3 mb-7 p-3'>
                    <HiArrowUp className='text-white' />
                </div> */}
            </div>
        </div>
    )
}

export default LowerFooter
