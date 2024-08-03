'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import LowerFooter from './LowerFooter';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import shade from '@/public/assets/footerShade.svg';
import lady from '@/public/assets/footerLady.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation check
        const { firstName, lastName, email, phone, service, date, message } = formData;
        if (!firstName || !lastName || !email || !phone || !service || !date || !message) {
            toast.error('Please fill in all fields.');
            return;
        }

        const loadingToastId = toast.loading('Loading...');
        try {
            const response = await axios.post('/api/send-email', formData);
            console.log(response);
            toast.success('Email sent successfully!', { id: loadingToastId });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                service: '',
                date: '',
                message: '',
            });
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'An error occurred');
            toast.dismiss(loadingToastId);
        }
    };

    return (
        <div id='contactUs'>
            <div className='bg-[#FBFBFB] sm:px-0 px-4 lg:pr-10 py-5 -mb-[17%] relative flex lg:justify-normal justify-center'>
                <Toaster />
                <div className='w-[40%] h-full lg:block hidden relative'>
                    <div className='z-50 bg-shade bg-contain bg-no-repeat'>
                        <Image alt='' src={lady} className='z-50 ml-10' />
                    </div>
                </div>
                <div className='bg-darkSkyBlue rounded-lg w-fit lg:absolute right-20 xl:-bottom-6 lg:-bottom-15 z-50 p-4 flex flex-col items-center'>
                    <h1 className='xl:text-4xl text-3xl text-center w-[80%] text-white font-squadaOne'>
                        {t('Request A Free Cleaning Quote Today')}
                    </h1>
                    <form onSubmit={handleSubmit} className='xl:space-y-4 space-y-3 w-full mt-6'>
                        <div className='flex space-x-4'>
                            <div className='w-1/2'>
                                <label className='block text-white'>{t('First Name')}</label>
                                <input
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    type='text'
                                    className='w-full mt-1 p-2 rounded-lg outline-none'
                                    name='firstName'
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className='block text-white'>{t('Last Name')}</label>
                                <input
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    type='text'
                                    className='w-full mt-1 p-2 rounded-lg outline-none'
                                    name='lastName'
                                />
                            </div>
                        </div>
                        <div>
                            <label className='block text-white'>{t('Email Address')}</label>
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type='email'
                                name='email'
                                className='w-full mt-1 p-2 rounded-lg outline-none'
                            />
                        </div>
                        <div>
                            <label className='block text-white'>{t('Phone Number')}</label>
                            <input
                                value={formData.phone}
                                onChange={handleChange}
                                type='text'
                                name='phone'
                                className='w-full mt-1 p-2 rounded-lg outline-none'
                            />
                        </div>
                        <div>
                            <label className='block text-white'>{t('Service')}</label>
                            <select
                                value={formData.service}
                                onChange={handleChange}
                                name='service'
                                className='w-full mt-1 p-2 rounded-lg outline-none'
                            >
                                <option value=''>{t('Select Service')}</option>
                                <option value='Residential Window Cleaning' t>{('Residential Window Cleaning')}</option>
                                <option value='Commercial Window Cleaning'>{t('Commercial Window Cleaning')}</option>
                                <option value='Gutter Cleaning'>{t('Gutter Cleaning')}</option>
                                <option value='Pressure Washing'>{t('Pressure Washing')}</option>
                            </select>
                        </div>
                        <div>
                            <label className='block text-white'>{t('Date')}</label>
                            <input
                                value={formData.date}
                                onChange={handleChange}
                                type='date'
                                className='w-full py-2 px-2 rounded-lg'
                                name='date'
                            />
                        </div>
                        <div>
                            <label className='block text-white'>{t('Message')}</label>
                            <textarea
                                value={formData.message}
                                onChange={handleChange}
                                className='w-full mt-1 p-2 rounded-lg outline-none'
                                rows='4'
                                name='message'
                                placeholder='Enter your message'
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='w-full py-3 bg-darkBlue text-white font-bold rounded-lg outline-none'
                        >
                            {t('Submit')}
                        </button>
                    </form>
                </div>
            </div>
            <LowerFooter />
        </div>
    );
};

export default Footer;
