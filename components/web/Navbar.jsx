'use client';
import React, { useState } from 'react';
import { Dot, Sms, Telephone } from '@/svgs';
import { navItems } from '@/libs/data';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg';
import logoWhite from '@/public/assets/logoNewWhite.png';
import Link from 'next/link';
import { CgMenuLeft } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useScrollContext } from '@/utils/ScrollProvider';
import i18n from '../../utils/i18n'; // Import i18n for language change
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = useScrollContext();
    const [isFrench, setIsFrench] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavLinkClick = () => {
        setIsOpen(false);
    };


    const handleClick = () => {
        scrollToSection('contactUs');
    };

    // Function to change the language
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsFrench(lang === 'fr'); // Update state based on selected language
    };


    return (
        <div id='top' className='w-full relative'>
            <div className='bg-white pt-3 pb-8 px-4 z-50 rounded-b-full lg:block absolute hidden top-0 2xl:left-[7%] left-[4%]' >
                <Image alt='' src={logo} />
            </div>
            <div className='w-full bg-darkBlue flex justify-end py-1.5' >
                <div className='lg:w-[80%] w-full flex items-center justify-between 2xl:pr-24 lg:pr-12 lg:px-0 px-4 '>
                    <div className='flex items-center sm:justify-normal justify-between sm:w-auto w-full sm:gap-10 gap-4 font-quan_slim text-white'>
                        <div className='flex  items-center gap-2'>
                            <Telephone />
                            <b className='font-semibold  text-2xl  md:block hidden'>{t('Call for help:')}</b>
                            <p className='text-xl'> {t('(514) 500-1178')}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Sms />
                            <b className='font-semibold  text-2xl md:block hidden'>{t('Mail to us:')}</b>
                            <p className='text-xl'>{t('info@brillepro.com')}</p>
                        </div>
                    </div>
                    {/* <div className='sm:flex hidden gap-2' >
                        <Dot />
                        <Dot />
                        <Dot />
                        <Dot />
                    </div> */}
                </div>
            </div>
            <div className='bg-skyBlue py-2 w-full flex justify-end'>
                <div className='lg:w-[80%] w-full flex items-center md:flex-row flex-row-reverse justify-between 2xl:pr-24 lg:pr-12 lg:px-0 px-4'>
                    <div className='text-white font-medium  gap-5 w-[70%] justify-center lg:pl-5 hidden md:flex' >
                        {
                            navItems.map((e, i) => (
                                <Link href={e.src} key={i} className='lg:whitespace-nowrap mx-3' onClick={handleNavLinkClick}>{t(e.name)}</Link>
                            ))
                        }
                    </div>
                    <div className='flex justify-center gap-4 '>
                        <button
                            onClick={() => changeLanguage(isFrench ? 'en' : 'fr')}
                            className='px-4 py-2  text-white rounded'
                        >
                            {isFrench ? 'English' : 'Français'}
                        </button>
                    </div>
                    <button
                        className='bg-darkSkyBlue border p-2 px-6 border-white text-white rounded-full shadow shadow-white '
                        onClick={handleClick}
                    >
                        {t('Contact Us')}
                    </button>
                    <button className='md:hidden' onClick={toggleMenu}>
                        <CgMenuLeft className='text-3xl text-white' />
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 z-50' : 'opacity-0 z-0 pointer-events-none'}`} onClick={toggleMenu}></div>
            <div className={`fixed top-0 left-0 w-3/4 max-w-sm z-50 h-full bg-skyBlue shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='px-4 pt-2 flex justify-between items-start'>
                    <Image alt='' src={logoWhite} className='w-40' unoptimized />
                    <button onClick={toggleMenu} className='ml-2 mt-2'>
                        <RxCross1 className='text-3xl text-white' />
                    </button>
                </div>
                <div className='p-4 ml-5 mt-4 text-white font-medium flex flex-col gap-4'>
                    {
                        navItems.map((e, i) => (
                            <Link href={e.src} key={i} className='whitespace-nowrap' onClick={handleNavLinkClick}>{t(e.name)}</Link>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Navbar;
