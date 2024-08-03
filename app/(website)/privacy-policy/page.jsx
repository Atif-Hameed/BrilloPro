'use client'
import Footer from '@/components/web/Footer'
import LowerFooter from '@/components/web/LowerFooter'
import PrivacyPolicy from '@/components/web/privacyPolicy'
import { policy1, policy2, policy3, policy4 } from '@/libs/data'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Page = () => {

  const { t } = useTranslation();

  return (
    <div>
      <div className='flex justify-center flex-col items-center gap-8'>
        <div className='flex flex-col items-center md:w-[80%] w-[90%] bg-[#FBFBFB] p-4 py-8 rounded-lg'>
          <h1 className='lg:text-[65px] sm:text-5xl text-3xl font-squadaOne text-darkBlack leading-none text-center '>{t('Privacy Policy')}</h1>
          <p className='text-gray lg:w-[80%] sm:w-[90%] w-full sm:my-4 my-2 sm:text-base text-sm text-center'>{t('Welcome to BrillePro. Your privacy is critically important to us. This Privacy Policy explains how We collect, use, disclose, and safeguard your information when you visit our website')}
            <Link href={'/http://www.brillepro.com/'} className='text-blue-400 font-semibold' > {t('www.brillepro.com')}</Link> {t('and use our services. Please read this policy carefully to understand our practices regarding your personal data and how we will treat it.')}</p>

          <div className='mt-10 flex flex-col gap-4'>
            <PrivacyPolicy heading={t('1. Information We Collect')} data={policy1} />
            <PrivacyPolicy heading={t('2. How We Use Your Information')} data={policy2} />
            <PrivacyPolicy heading={t('3. Sharing Your Information')} data={policy3} />
            <PrivacyPolicy heading={t('4. Your Rights')} data={policy4} />
          </div>

          <div className='flex flex-col items-center mt-10 gap-2'>
            <h1 className='lg:text-4xl sm:text-3xl  text-xl font-squadaOne text-darkBlack leading-none text-center '>{t('Data Security')}</h1>
            <p className='text-gray text-center sm:w-[70%] w-full'>{t('We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. Our security measures include encryption, access controls, and regular security assessments')}
            </p>
          </div>
          <div className='flex flex-col items-center mt-10 gap-2'>
            <h1 className='lg:text-4xl sm:text-3xl  text-xl font-squadaOne text-darkBlack leading-none text-center '>{t('Data Retention')}</h1>
            <p className='text-gray text-center sm:w-[70%] w-full'>{t('We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. When we no longer need your personal data, we will securely delete or anonymize it.')}
            </p>
          </div>
          <div className='flex flex-col items-center mt-10 gap-2'>
            <h1 className='lg:text-4xl sm:text-3xl  text-xl font-squadaOne text-darkBlack leading-none text-center '>{t('Changes to This Privacy Policy')}</h1>
            <p className='text-gray text-center sm:w-[70%] w-full'>{t('We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.')}
            </p>
          </div>
        </div>
      </div>
      <div className='mt-10' >
        <Footer />
      </div>
    </div>
  )
}

export default Page
