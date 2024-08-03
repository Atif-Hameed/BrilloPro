'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'

const OurTeam = () => {

    const { t } = useTranslation();

    return (
        <div className='flex flex-col items-center gap-4 px-6 text-center'>
            <h1 className="sm:text-[65px] w-[60%] text-4xl text-center mb-3 font-squadaOne">
                {t('Our Team')}
            </h1>
            <div className='flex sm:w-[70%] w-full text-lg text-justify flex-col items-center gap-4 text-center'>
                <p>
                    {t('Meet the dedicated professionals behind BrillePro. Our team is composed of experienced and trained window cleaning experts who are passionate about their work. They bring a wealth of knowledge and expertise to every job, ensuring that your windows are cleaned to the highest standards.')}
                </p>
                <p>
                    {t('Our team is led by a group of skilled professionals who manage various aspects of the business, including operations, customer relations, and service delivery. Each member of our team is committed to providing exceptional service and maintaining the highest level of quality in every task they undertake.')}
                </p>
                <p>
                    {t('From our operations manager who ensures everything runs smoothly, to our lead cleaners who bring their extensive experience to every job, each team member plays a vital role in our success. We pride ourselves on our ability to work together efficiently and effectively to meet the needs of our clients.')}
                </p>
                <p>
                    {t('At BrillePro, we believe that our team is our greatest asset. Their dedication, professionalism, and attention to detail are what set us apart from other window cleaning services. We are committed to ongoing training and development to ensure our team stays at the forefront of the industry, equipped with the latest techniques and best practices.')}
                </p>
            </div>
        </div>
    )
}

export default OurTeam
