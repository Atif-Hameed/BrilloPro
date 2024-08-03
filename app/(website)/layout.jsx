'use client'
import LowerFooter from '@/components/web/LowerFooter'
import Navbar from '@/components/web/Navbar'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const pathData = {
    'services': { heading: 'Service Details', subheading: 'Service Details' },
    'about': { heading: 'About Us', subheading: 'About Us' },
    'contact': { heading: 'Contact Us', subheading: 'Contact Us' },
    'faq': { heading: 'FAQ', subheading: 'FAQ' },
    'privacy-policy': { heading: 'Privacy Policy', subheading: 'Privacy Policy' },
};

const Layout = ({ children }) => {
    const [data, setData] = useState({ heading: '', subheading: '' });
    const pathname = usePathname();

    useEffect(() => {
        const path = pathname.replace('/', ''); // Clean up pathname to match keys
        setData(pathData[path] || { heading: '', subheading: '' });
    }, [pathname]);

    return (
        <div className='w-full h-full'>
            <div>
                <Navbar />
                <div className='sm:h-[68vh] h-[30vh] w-full mb-20'>
                    <div className='bg-web-banner2 bg-cover bg-center w-full bg-no-repeat z-40 h-full relative'>
                        <div className='bg-web-shade2 bg-cover bg-center w-full items-center h-full flex justify-center'>
                            <div className='flex flex-col gap-4 items-center text-white sm:w-[80%] w-full justify-center'>
                                <h1 className='sm:text-[65px] text-4xl font-squadaOne'>{data.heading}</h1>
                                <h1 className='sm:text-2xl text-lg font-squadaOne'>{`Home >> ${data.subheading}`}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Layout;
