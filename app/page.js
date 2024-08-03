
'use client'
import CustomerFeedbacl from "@/components/web/CustomerFeedbacl";
import Footer from "@/components/web/Footer";
import Hero from "@/components/web/Hero";
import LatestWork from "@/components/web/LatestWork";
import Navbar from "@/components/web/Navbar";
import Services from "@/components/web/Services";
import Welcom from "@/components/web/Welcom";
import WhyChoose from "@/components/web/WhyChoose";
import { cardData } from "@/libs/data";
import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const footerRef = useRef(null);
  return (
    <div className="overflow-hidden">
      <Navbar footerRef={footerRef} />
      <Hero />
      <div className="flex justify-center">
        <div className='md:hidden  grid grid-cols-1  w-[90%] gap-8 mb-4'>
          {
            cardData.map((e, i) => (
              <div key={i} className='bg-white p-4 rounded-xl shadow-lg' >
                <div className='flex items-center gap-3'>
                  {e.icon}
                  <div>
                    <p className='text-gray'>{t(e.subhead)}</p>
                    <h1 className='text-black lg:text-2xl text-lg'>{t(e.name)}</h1>
                  </div>
                </div>
                <p className='text-gray text-sm'>{t(e.des)}</p>
              </div>
            ))
          }
        </div>
      </div>
      <Welcom />
      <Services />
      <WhyChoose />
      <LatestWork />
      <CustomerFeedbacl />
      <Footer ref={footerRef} />
    </div>
  );
}
