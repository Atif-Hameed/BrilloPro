'use client'
import React from 'react'
import img1 from '@/public/assets/work1.svg'
import img2 from '@/public/assets/work2.svg'
import img3 from '@/public/assets/work3.svg'
import img4 from '@/public/assets/work4.svg'
import blueRight from '@/public/assets/blueShadeRight.svg'
import blueLeft from '@/public/assets/blueShadeLeft.svg'
import { BsArrowUpRight } from "react-icons/bs";
import Image from 'next/image'
import { useTranslation } from 'react-i18next'


const LatestWork = () => {

    const {t} = useTranslation();

    return (
        <div className='w-full xl:h-[196vh] lg:h-[130vh] h-[100vh] my-20'>
            <div className=' bg-work-banner  bg-center w-full bg-cover bg-no-repeat z-40 flex items-center  h-full relative' >

                <div className='absolute -right-[20%] top-0 w-full h-full'>
                    <Image alt='' src={blueRight} className='h-full w-full' />
                </div>
                <div className='absolute -left-[20%] top-0 w-full h-full'>
                    <Image alt='' src={blueLeft} className='h-full w-full' />
                </div>

                <div className=' w-full flex justify-center items-center mt-10' >
                    <div className='w-[90%]' >
                        <div className='flex sm:flex-row flex-col items-center justify-between'>
                            <div className='flex flex-col gap-2 sm:w-[45%] w-full'>
                                <button className='flex items-center text-white rounded-full gap-1 px-4 w-fit whitespace-nowrap text-sm  py-2 bg-darkSkyBlue'>
                                   {t(' Our Latest Work')}
                                </button>
                                <h1 className='font-squadaOne xl:text-[65px] lg:text-5xl text-3xl mt-2 leading-none'>{t('View Our Latest Project In This Month We Made')}</h1>
                            </div>
                            <div className='sm:w-[45%] w-full mt-2'>
                                <p className='text-gray'>{t('When hiring a cleaning service, consider factors such as their reputation, experience, pricing, and whether they provide eco-friendly or green cleaning options.')}</p>
                            </div>
                        </div>
                        <div className='flex gap-3 sm:mt-16 mt-4 sm:justify-normal justify-center'>
                            <div className='relative sm:w-fit w-[80%]'>
                                <Image alt='' src={img1} />
                                <div className='absolute bottom-3 left-0 w-full p-2 px-4'>
                                    <div className='flex items-center justify-between rounded-lg bg-darkBlue px-4 py-2'>
                                        <h1 className='text-white font-squadaOne sm:text-3xl text-lg'>{t('Full House Cleaning')}</h1>
                                        <div className='bg-darkSkyBlue p-2 rounded-full '>
                                            <BsArrowUpRight className='text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative h-fit sm:block hidden'>
                                <Image alt='' src={img2} />
                                <div className='absolute top-0 left-0 h-full p-4'>
                                    <div className='bg-[#FFFFFF4A] p-2 rounded-md flex justify-end h-full'>
                                        <h1 className='text-white font-squadaOne  vertical-text sm:text-3xl text-lg py-2 px-4'>{t('Full House Cleaning')}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='relative h-fit sm:block hidden'>
                                <Image alt='' src={img3} />
                                <div className='absolute top-0 left-0 h-full p-4'>
                                    <div className='bg-[#FFFFFF4A] p-2 rounded-md flex justify-end h-full'>
                                        <h1 className='text-white font-squadaOne  vertical-text sm:text-3xl text-lg py-2 px-4'>{t('Full House Cleaning')}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='relative h-fit sm:block hidden'>
                                <Image alt='' src={img4} />
                                <div className='absolute top-0 left-0 h-full p-4'>
                                    <div className='bg-[#FFFFFF4A] p-2 rounded-md flex justify-end h-full'>
                                        <h1 className='text-white font-squadaOne  vertical-text sm:text-3xl text-lg py-2 px-4'>{t('Full House Cleaning')}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestWork
