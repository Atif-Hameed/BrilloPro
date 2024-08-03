'use client'
import Welcom from "@/components/web/Welcom";
import React from "react";
import img from "@/public/assets/man.png";
import circle from "@/public/assets/comit-circle.svg";
import dot from "@/public/assets/comit-dot.svg";
import dots from "@/public/assets/comit-dots.svg";
import dots2 from "@/public/assets/dots.svg";
import Image from "next/image";
import ChooseBrilo from "@/components/web/ChooseBrilo";
import Footer from "@/components/web/Footer";
import WelcomAbout from "@/components/web/WelcomAbbout";
import OurTeam from "@/components/web/ourTeam";
import { useTranslation } from "react-i18next";

const Page = () => {

  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      <div className="-mt-32">
        <WelcomAbout />
      </div>
      <div className="w-full xl:h-[95vh] h-[120vh] lg:mt-56 mt-10">
        <div className=" bg-commit-banner  bg-center w-full bg-cover bg-no-repeat z-40 flex items-center justify-center h-full relative">
          <div className="absolute left-[45%] top-[30%]">
            <Image alt="" src={dot} />
          </div>
          <div className="absolute left-[5%] top-[20%]">
            {/* <Image alt="" src={dots} /> */}
          </div>
          <div className="absolute -left-10 bottom-0">
            <Image alt="" src={circle} />
          </div>
          <div className="absolute left-[40%] bottom-[10%]">
            <Image alt="" src={dots2} />
          </div>
          <div className="w-[90%] flex items-center justify-between">
            <div className="text-white lg:w-[45%] w-full flex flex-col gap-3">
              <h1 className="sm:text-[65px] text-4xl lg:text-start text-center font-squadaOne">
                {t('Our Values')}
              </h1>
              {/* <p className="lg:mt-0 mt-8 lg:text-start sm:text-base text-sm text-center">
                {`  At BrillePro, our mission is to enhance the beauty and clarity of every window we touch. We
strive to deliver unparalleled service that exceeds our clients' expectations, using eco-friendly
products and innovative cleaning techniques. Our goal is to ensure that every client experiences
the joy of perfectly clean windows and the improved atmosphere they bring to any space.`}
              </p> */}
              <ul className="flex flex-col gap-3">
                <li>
                  ● {t('Quality: We are dedicated to providing top-notch window cleaning services that leave every window spotless and streak-free.')}
                </li>
                <li>
                  ● {t('Customer Satisfaction: Our clients are at the heart of everything we do. We go above and beyond to ensure their complete satisfaction.')}
                </li>
                <li>
                  ● {t('Eco-Friendly Practices: We use biodegradable and eco-friendly cleaning solutions to protect the environment and your health.')}
                </li>
                <li>
                  ● {t('Integrity: We operate with honesty and transparency, building trust with our clients through reliable and ethical business practices.')}
                </li>
                <li>
                  ● {t('Innovation: We continuously seek out new techniques and technologies to improve our services and deliver the best results.')}
                </li>
              </ul>
            </div>
            <div className="w-[50%] lg:block hidden">
              <Image alt="" src={img} className="xl:mb-[46%] mb-[2%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 ">
        <ChooseBrilo />
      </div>
      <div className="my-12">
        <OurTeam />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
