'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi";

const FAQ = ({ type, faqs }) => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-4 w-full">
            <h1 className='md:text-4xl sm:text-3xl text-xl font-squadaOne mb-4'>{t(type)}</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border-b border-gray-200 w-full">
                    <button
                        className="w-full text-left py-2 sm:px-4 px-2 sm:text-lg flex items-center justify-between font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{t(faq.question)}</span>
                        {openIndex === index ? <HiOutlineMinus className='text-4xl text-darkSkyBlue' /> : <FiPlus className='text-4xl text-darkSkyBlue' />}
                    </button>
                    <div
                        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                    >
                        <p className="p-4">{t(faq.answer)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
