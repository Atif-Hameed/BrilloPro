import React from 'react'
import map from '@/public/assets/map.png'
import Image from 'next/image'
import beat from '@/public/assets/beat.svg'
import { IoTimeSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import shade from '@/public/assets/blueShadeRight.svg'
import Footer from '@/components/web/Footer';


const Page = () => {
  return (
    <div>
      <div className='flex justify-center relative w-full overflow-hidden'>
        <Image alt='' src={shade} className='w-full h-full absolute top-[0%] -right-[25%]' />
        <div className='flex lg:flex-row flex-col-reverse items-center gap-20 w-[90%] my-20'>
          <div className='lg:w-[55%] w-full'>
            <Image alt='' src={map} className='w-full h-full' />
          </div>

          <div className='lg:w-[45%] w-full'>
            <button className='flex items-center text-white rounded-full gap-1 px-6 whitespace-nowrap text-sm  py-2 bg-darkSkyBlue'>
              <Image alt='' className='h-4' src={beat} />
              Contact us
            </button>
            <h1 className='text-darkBlack font-squadaOne lg:text-[65px] md:my-0 my-4 text-5xl'>Get in touch</h1>

            <div className='flex flex-col gap-4 mt-6'>
              <div className='flex items-center gap-3'>
                <div className='bg-darkSkyBlue p-3 rounded-full ' >
                  <IoTimeSharp className='text-white text-2xl ' />
                </div>
                <div>
                  <div>
                    <h1 className='text-2xl font-squadaOne text-darkBlack' >Hours</h1>
                    <div>
                      <h1 className='text-darkBlack'>Mon-Fri: <span className='text-gray'>8:00 AM - 6:00 PM</span></h1>
                      <h1 className='text-darkBlack'>Sat: <span className='text-gray'>: 9:00 AM - 4:00 PM</span></h1>
                      <h1 className='text-darkBlack '>Sun: <span className='text-gray'>Closed</span></h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='bg-darkSkyBlue p-3 rounded-full ' >
                  <FaPhone className='text-white text-2xl ' />
                </div>
                <div>
                  <div>
                    <h1 className='text-2xl font-squadaOne text-darkBlack' >Phone no</h1>
                    <p className='text-gray'> (514) 500-0017</p>
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='bg-darkSkyBlue p-3 rounded-full ' >
                  <FaLocationDot className='text-white text-2xl ' />
                </div>
                <div>
                  <div>
                    <h1 className='text-2xl font-squadaOne text-darkBlack' >Location</h1>
                    <p className='text-gray'>108-2525 Rue de l&apos;Acajou, Montreal, Qc, H4R 2W9</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Page
