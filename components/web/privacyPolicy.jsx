'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'

const PrivacyPolicy = ({ heading, data }) => {

    const { t } = useTranslation();

    return (
        <div>
            <h1 className='lg:text-5xl sm:text-3xl text-xl font-squadaOne text-darkBlack'>{t(heading)}</h1>
            {
                data.map((e, i) => (
                    <div className='' key={i}>
                        <div className='sm:mt-4 mt-2'>
                            <h1 className='lg:text-3xl sm:text-2xl text-lg text-black'>{t(e.name)}</h1>
                            <p className='text-gray mt-2 sm:text-base text-sm ml-3'>{t(e.des)}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PrivacyPolicy
