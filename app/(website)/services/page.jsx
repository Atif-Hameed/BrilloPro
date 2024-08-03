'use client'
import React from "react";
import img1 from "@/public/assets/service1.svg";
import img2 from "@/public/assets/service2.svg";
import img3 from "@/public/assets/service3.svg";
import img4 from "@/public/assets/service4.svg";
import icon1 from "@/public/assets/chooseicon1.svg";
import icon2 from "@/public/assets/chooseicon2.svg";
import icon3 from "@/public/assets/chooseicon3.svg";
import icon4 from "@/public/assets/chooseicon4.svg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Footer from "@/components/web/Footer";
import { useTranslation } from "react-i18next";

const Page = () => {

  const { t } = useTranslation();

  const data = [
    { name: "Interior and exterior window cleaning" },
    { name: "Window frame and sill cleaning" },
    { name: "Gutter Cleaning" },
    { name: "Screen cleaning" },
    { name: "Chandelier and light fixture cleaning" },
  ];

  const data2 = [
    {
      icon: icon1,
      name: "Experienced Professionals",
      des: "Experienced and trained professionals",
    },
    {
      icon: icon2,
      name: "Eco-Friendly Products",
      des: "Eco-friendly and safe cleaning solutions",
    },
    {
      icon: icon3,
      name: "Customer Satisfaction Guarantee",
      des: "Flexible scheduling and customized plans",
    },
    {
      icon: icon4,
      name: "Flexible Scheduling",
      des: "Comprehensive range of services & customer satisfaction.",
    },
  ];

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-[90%]">
          <div className="flex lg:flex-row flex-col-reverse items-stretch w-full gap-8 ">
            <div className="lg:w-[60%] w-full">
              <Image alt="" src={img1} />
            </div>
            <div className="lg:w-[40%] w-full bg-[#FBFBFB] rounded-lg p-3 h-full">
              <h1 className="text-2xl font-squadaOne">
                {t('Residential Window Cleaning')}
              </h1>
              <p className=" text-gray text-base">
                {t('Keep your home looking its best with our thorough and reliable residential window cleaning services. We understand the importance of clean windows in maintaining the aesthetic appeal and atmosphere of your home. Our team carefully cleans each window, removing dirt, smudges, and streaks, to leave your windows crystal clear.')}
              </p>
              <div className="flex flex-col gap-2 mt-8">
                {data.map((e, i) => (
                  <div
                    key={i}
                    className="flex justify-start items-center bg-white p-2 px-3 rounded-md"
                  >
                    <h1 className="text-xl font-squadaOne text-gray">
                      {t(e.name)}
                    </h1>
                    {/* <BsArrowRight className=' text-gray text-lg' /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-[60%] w-full">
            <div className="w-full h-full">
              <div className="w-full my-5 flex items-center justify-between gap-3">
                <h1 className="sm:w-[60%] w-full lg:text-5xl sm:text-4xl text-2xl font-squadaOne">
                  {t('Commercial Window Cleaning')}
                </h1>
                <div className="w-[40%] sm:block hidden h-3 bg-darkSkyBlue"></div>
              </div>
              <p className="text-gray mb-4">
                {t('Maintain a professional appearance with our comprehensive commercial window cleaning services. Clean windows can significantly enhance the curb appeal of your business, creating a welcoming environment for customers and clients.')}
              </p>
              <p className="text-gray mb-4">
                {t(' Our experienced team is equipped to handle buildings of all sizes, from small storefronts to large office buildings. We work efficiently and discreetly to minimize disruption to your business operations, ensuring your windows are spotless and streak-free.')}
              </p>
            </div>

            <div className="w-full h-full ">

              <p className="text-gray mb-4">
                {t('Services Include:')} <br />
                ● {t('High-rise and low-rise window cleaning')}
                <br />
                ● {t('Storefront and office building window cleaning')}
                <br />
                ● {t('Window frame and sill cleaning')}
                <br />
                ● {t('Customized maintenance plans')}
                <br />
              </p>
              {/* New */}
              <div className="w-full mb-5 flex items-center justify-between gap-3">
                <h1 className="w-full lg:text-5xl sm:text-4xl text-2xl font-squadaOne">
                  {t('Gutter Cleaning')}
                </h1>
              </div>
              <p className="text-gray mb-4">
                {t('Prevent water damage and maintain your property’s integrity with our expert gutter cleaning services. Clogged gutters can lead to serious issues, including roof damage and foundation problems. Our team ensures your gutters are clean and free of debris, allowing rainwater to flow freely and protecting your property from potential damage.')}
              </p>
              <p className="text-gray mb-4">
                {t('Services Include:')} <br />
                ● {t('Removal of leaves, twigs, and debris')}
                <br />
                ● {t('Downspout inspection and cleaning')}

                <br />
                ● {t('Gutter and fascia board inspection')}
                <br />
                ● {t('Regular maintenance plans available')}
                <br />
              </p>
              {/* New */}
              <div className="w-full mb-5 flex items-center justify-between gap-3">
                <h1 className="w-full lg:text-5xl sm:text-4xl text-2xl font-squadaOne">
                  {t('Pressure Washing')}
                </h1>
              </div>
              <p className="text-gray mb-4">
                {(' Revitalize the exterior of your property with our professional pressure washing services. Over time, dirt, grime, and mold can build up on your surfaces, diminishing their appearance. Our high-pressure cleaning techniques effectively remove stubborn stains, restoring the beauty of your home or business.')}
              </p>
              <p className="text-gray mb-4">
                {t('Services Include:')} <br />
                ●{t(' Driveways and sidewalks')}
                <br />
                ● {t('Building exteriors and facades')}
                <br />
                ● {t('Decks and patios')}
                <br />
                ● {t('Fences and walls')}
                <br />
              </p>
              {/* New */}
              <div className="w-full mb-5 flex items-center justify-between gap-3">
                <h1 className="w-full lg:text-5xl sm:text-4xl text-2xl font-squadaOne">
                  {t('Subscription Services')}
                </h1>
              </div>
              <p className="text-gray mb-4">
                {t('Ensure your windows stay sparkling clean all year round with our convenient subscription services. Choose from monthly, quarterly, or bi-annual plans that best suit your needs and enjoy the benefits of regular, professional window cleaning without the hassle of scheduling each time.')}
              </p>
              <p className="text-gray mb-4">
                {t('Services Include:')} <br />
                ● {t('Customized cleaning schedules')}

                <br />
                ● {t('Priority booking and flexible rescheduling')}
                <br />
                ● {t('Discounted rates for regular service')}

                <br />
                ● {t('Comprehensive maintenance for continuous cleanliness')}

                <br />
              </p>
              <h1 className="w-full lg:text-5xl sm:text-4xl text-2xl font-squadaOne">
                {t(' Why Choose BrillePro?')}

              </h1>
              <p className="text-gray mb-4">{('At BrillePro, we are committed to delivering exceptional window cleaning services that meet the highest standards of quality and professionalism. Here are a few reasons why our clients trust us with their window cleaning needs:')}
              </p>
              <div className="w-full flex md:flex-row flex-col-reverse items-center gap-8">
                <div className="md:w-[40%] md:block hidden w-full">
                  <Image alt="" src={img2} />
                </div>
                <div className="md:w-[60%] w-full">
                  <div className="flex flex-col gap-2">
                    {data2.map((e, i) => (
                      <div
                        className="flex items-center gap-3 rounded-lg hover:bg-darkBlue px-3 py-2 cursor-pointer group bg-white shadow-md"
                        key={i}
                      >
                        <div className="bg-darkSkyBlue p-2 rounded-full">
                          <Image alt="" src={e.icon} />
                        </div>
                        <div>
                          {/* <h1 className="text-black group-hover:text-white  font-squadaOne  sm:text-2xl text-lg">
                            {e.name}
                          </h1> */}
                          <p className="text-gray group-hover:text-white sm:text-sm text-xs">
                            {t(e.des)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full">
              <div className="w-full mb-5 flex items-center justify-between gap-3 my-8">
                <h1 className="w-full lg:text-5xl sm:text-4xl text-2xl font-squadaOne">
                  {t('Get a Free Quote')}
                </h1>
              </div>
              <p className="text-gray mb-4">
                {t('Ready to experience the BrillePro difference? Contact us today to get a free, no-obligation quote for any of our services. Our team is here to help you maintain the beauty and cleanliness of your windows, gutters, and exterior surfaces.')}
              </p>
              <p className="text-gray mb-4">{t('Phone: (514) 500-0017')} <br />
                {t(`Email: info@brillepro.com`)} <br />
                {t(`Address: 108-2525 Rue de l'Acajou, Montreal, Qc, H4R 2W9`)}
              </p>
              <div className="w-full flex  ">
                <div className="w-1/2 relative">
                  <div className="bg-darkSkyBlue text-white absolute py-1 top-4 left-5 rounded-full px-7">
                    {/* Before */}
                  </div>
                  <Image alt="" src={img3} />
                </div>
                <div className="w-1/2 relative">
                  <div className="bg-darkBlue text-white absolute py-1 top-4 left-5 rounded-full px-7">
                    {/* After */}
                  </div>
                  <Image alt="" src={img4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
