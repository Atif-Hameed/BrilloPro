'use client';
import React from 'react';
import FAQ from '@/components/web/FAQ';
import Footer from '@/components/web/Footer';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import { faqComercial, faqGeneral, faqGutter, faqOther, faqPressure, faqSubscription, faqWindow } from '@/libs/data';

const Page = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Toaster />
      <div className='flex justify-center flex-col items-center gap-8'>
        <div className='flex flex-col items-start sm:w-[80%] w-[90%] bg-[#FBFBFB] sm:p-4 p-2 py-8 rounded-lg'>
          <div className='flex justify-center w-full'>
            <h1 className='xl:text-[65px] lg:text-6xl sm:text-5xl text-2xl font-squadaOne text-darkBlack leading-none text-center lg:w-[60%] sm:w-[80%] w-full'>{t('welcome')}</h1>
          </div>

          <div>
            <FAQ type={t('General Questions')} faqs={faqGeneral} />
          </div>
          <div>
            <FAQ type={t('Residential Window Cleaning')} faqs={faqWindow} />
          </div>
          <div>
            <FAQ type={t('Commercial Window Cleaning')} faqs={faqComercial} />
          </div>
          <div>
            <FAQ type={t('Gutter Cleaning')} faqs={faqGutter} />
          </div>
          <div>
            <FAQ type={t('Pressure Washing')} faqs={faqPressure} />
          </div>
          <div>
            <FAQ type={t('Subscription Services')} faqs={faqSubscription} />
          </div>
          <div>
            <FAQ type={t('Other Questions')} faqs={faqOther} />
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
