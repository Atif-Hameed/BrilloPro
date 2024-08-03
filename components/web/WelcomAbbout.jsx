'use client'
import Image from "next/image";
import React from "react";
import img from "@/public/assets/welcomImg.svg";
import cardImg from "@/public/assets/welcomCard.svg";
import dots from "@/public/assets/dots.svg";
import beat from "@/public/assets/beat.svg";
import shade from "@/public/assets/blueShadeRight.svg";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const WelcomAbout = () => {

  const { t } = useTranslation();

  return (
    <div className="flex justify-center md:mt-60  z-40 relative">
      <div className="absolute right-0 2xl:-top-[75%] -top-[60%]">
        <Image alt="" src={shade} />
      </div>

      <div className="w-[85%] lg:flex-row flex-col-reverse lg:mt-0 mt-32 flex items-center gap-20 ">
        <div className="lg:w-1/2 w-full relative h-full">
          <div className="flex gap-2 items-center h-full">
            <div className="w-5 bg-darkSkyBlue h-full rounded-full"></div>
            <Image alt="" src={img} className="" />
          </div>
          <Image alt="" src={dots} className="absolute -bottom-20  left-20 " />
          <Image
            alt=""
            src={cardImg}
            className="absolute -bottom-28 h-72 w-72 -right-8 "
          />
        </div>
        <div className="lg:w-1/2 w-full ">
          <button className="flex items-center text-white rounded-full gap-1 px-3 whitespace-nowrap text-sm w-[180px] py-2 bg-darkSkyBlue">
            <Image alt="" className="h-4" src={beat} />
            {t('Who We Are')}
          </button>
          <h1 className="text-[#232323] xl:text-6xl text-5xl font-squadaOne">
            {t('Welcome to BrillePro')}
          </h1>
          <p className="text-skyBlue xl:text-2xl text-xl mb-3 font-squadaOne">
            {t('Our Story')}
          </p>
          <p className="text-gray text-sm mb-4">
            {t('BrillePro was founded with a simple mission: to provide exceptional window cleaning services that bring a touch of brilliance to homes and businesses across Montreal. Our journey began with a passion for cleanliness and a commitment to excellence. Over the years, we have grown into a trusted name in the window cleaning industry, known for our attention to detail, reliable service, and customer-centric approach.')}
          </p>
          <p className="text-skyBlue xl:text-2xl text-xl mb-3 font-squadaOne">{t('Our Mission')}</p>
          <p className="text-gray text-sm">
            {t(`   At BrillePro, our mission is to enhance the beauty and clarity of every window we touch. We
strive to deliver unparalleled service that exceeds our clients' expectations, using eco-friendly
products and innovative cleaning techniques. Our goal is to ensure that every client experiences
the joy of perfectly clean windows and the improved atmosphere they bring to any space.`)}

          </p>
          {/* <Link href="/#contactUs" className="z-50 cursor-pointer">
          
            <button className="bg-darkSkyBlue mt-8 p-3 px-7  text-white rounded-full btnShadow z-50">
              Contact us today
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default WelcomAbout;
