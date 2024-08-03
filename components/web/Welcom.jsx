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

const Welcom = () => {

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
            {t('Exceptional Window Cleaning Services You Can Trust')}
          </p>
          <p className="text-gray text-sm mb-4">
            {t('At BrillePro, we specialize in providing top-notch window cleaning services for both residential and commercial properties. Our mission is to deliver exceptional quality and service, ensuring your windows shine brighter than ever before. With years of experience in the industry, our team of skilled professionals uses the latest techniques and eco-friendly products to guarantee a spotless finish every time.')}
          </p>
          <p className="text-gray text-sm">
            {t('Whether you need a one-time cleaning or regular maintenance, BrillePro offers flexible scheduling to suit your needs. Our comprehensive range of services includes residential and commercial window cleaning, gutter cleaning, and pressure washing. We also provide subscription services for ongoing care, so you can enjoy pristine windows all year round without the hassle. Customer satisfaction is our top priority, and we stand by our work with a satisfaction guarantee, ensuring that you are completely happy with the results.')}
          </p>
          <Link href="/#contactUs" className="z-50 cursor-pointer">
            {" "}
            <button className="bg-darkSkyBlue mt-8 p-3 px-7  text-white rounded-full btnShadow z-50">
              {t('Contact us today')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcom;
