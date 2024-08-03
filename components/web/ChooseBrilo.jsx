'use client'
import React from "react";
import lady from "@/public/assets/chooseImg.png";
import blueBg from "@/public/assets/blue-bg.png";
import icon from "@/public/assets/chooseIcon.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ChooseBrilo = () => {

  const {t} = useTranslation();

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="sm:text-[65px] text-4xl text-center mb-3 font-squadaOne">
        {t('Why Choose BrillePro?')}
      </h1>
      <p className="text-center xl:w-[60%] w-[90%]">
        {t('Choosing BrillePro means choosing a team that is committed to excellence in every aspect of our service. Here are just a few reasons why our clients trust us with their window cleaning needs:')}
      </p>
      <div className="flex justify-center">
        <div className="flex w-[90%] lg:flex-nowrap flex-wrap items-center gap-8">

          <div className="w-full">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-lg hover:bg-darkBlue px-4 py-2 cursor-pointer group bg-white shadow-md">
                <div className="bg-darkSkyBlue p-2 rounded-full">
                  <Image alt="" src={icon} />
                </div>
                <div className="w-[90%]">
                  {/* <h1 className="text-black group-hover:text-white  font-squadaOne  text-2xl">
                    Flexibility
                  </h1> */}
                  <p className="text-gray group-hover:text-white text-sm ">
                    {t('We use only eco-friendly, biodegradable cleaning products.')}

                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg hover:bg-darkBlue px-4 py-2 cursor-pointer group bg-white shadow-md">
                <div className="bg-darkSkyBlue p-2 rounded-full">
                  <Image alt="" src={icon} />
                </div>
                <div className="w-[90%]">
                  {/* <h1 className="text-black group-hover:text-white  font-squadaOne  text-2xl">
                    Expereinced Professionals
                  </h1> */}
                  <p className="text-gray group-hover:text-white text-sm ">
                    {t('Our cleaners are trained professionals with extensive experience')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full mt-12 relative bg-center  justify-center items-center lg:flex hidden ">
            <Image alt='' src={blueBg} className='h-[80%] w-[60%]' />
            <div className="bg-red-400">
              <Image
                alt=""
                src={lady}
                className=" w-full inset-0 absolute -top-[10.5%] left-0 h-full"
                objectFit="cover"
              />
            </div>
          </div>

          <div className=" w-full">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-lg hover:bg-darkBlue px-4 py-2 cursor-pointer group bg-white shadow-md">
                <div className="bg-darkSkyBlue p-2  rounded-full">
                  <Image alt="" src={icon} />
                </div>
                <div className="w-[90%]">
                  <p className="text-gray group-hover:text-white text-sm ">
                    {t('We offer flexible scheduling to fit your busy life.')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg hover:bg-darkBlue px-4 py-2 cursor-pointer group bg-white shadow-md">
                <div className="bg-darkSkyBlue p-2 rounded-full">
                  <Image alt="" src={icon} />
                </div>
                <div className="w-[90%]">
                  {/* <h1 className="text-black group-hover:text-white  font-squadaOne  text-2xl">
                    Customer Satisfaction
                  </h1> */}
                  <p className="text-gray group-hover:text-white text-sm ">
                    {t('Our customer satisfaction guarantee ensures you are happy with our work.')}

                  </p>
                </div>
              </div>


              <div className="flex items-center gap-3 rounded-lg hover:bg-darkBlue px-4 py-2 cursor-pointer group bg-white shadow-md">
                <div className="bg-darkSkyBlue p-2 rounded-full">
                  <Image alt="" src={icon} />
                </div>
                <div className="w-[90%]">
                  {/* <h1 className="text-black group-hover:text-white  font-squadaOne  text-2xl">
                    Customer Satisfaction
                  </h1> */}
                  <p className="text-gray group-hover:text-white text-sm ">
                    {t('We are fully insured, giving you peace of mind knowing your property is in good hands.')}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseBrilo;
