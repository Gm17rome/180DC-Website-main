'use client';

import {Carousel} from 'flowbite-react';
import FadeInSection from "./cards/FadeInSection.jsx";
import React from "react";

export default function Testimonials() {
    return (
        <div className=" h-64 sm:h-64 xl:h-80 2xl:h-96 " style={{
            marginBottom: '15%',
            height: '30<h1>0px'
        }}>
            <div
                className='flex justify-center items-center text-lime-600 text-4xl sm:text-6xl md:text-7xl font-title font-bold pt-8 md:p-8'>
                <FadeInSection>
                    <p>TESTIMONIALS</p>
                </FadeInSection>
            </div>

            <Carousel>
                <div
                    className="flex flex-col relative  w-full h-full  sm:w-1/2  sm:h-100rounded-2xl shadow-2xl shadow-gray-600 items-center justify-center bg-gray-50 dark:bg-gray-700 dark:text-white">
                    <h1 className='font-sans text-lime-600 text-sm sm:text-xl md:text-2xl lg:text-sm xl:text-sm scale-85' style={{ transform: 'scale(0.85)'}}>Working with your team has been an absolute pleasure. They provided us with exceptional
                        strategic insight that played a crucial role in elevating our brand at Indigifts. Your
                        dedication to understanding our unique challenges and tailoring solutions accordingly was truly
                        commendable. We are genuinely impressed with the results and the level of professionalism
                        demonstrated throughout the collaboration. We look forward to continued collaboration and highly recommend
                        their services.</h1>
                    <p className='italic font-bold'>-Indibni</p>
                </div>
                <div
                    className="flex flex-col  relative  w-full h-full  sm:w-1/2 sm:h-100 rounded-2xl shadow-2xl shadow-gray-600 items-center justify-center bg-gray-50 dark:bg-gray-700 dark:text-white">
                    <h1 className='font-sans text-lime-600 text-sm sm:text-xl md:text-2xl lg:text-sm xl:text-sm scale-85' style={{ transform: 'scale(0.85)'}}>You and your team have been a pleasure to work with. They gave us
                        outstanding strategic advice that was really helpful in enhancing our brand at
                        BOXBOY. It was quite admirable how committed you were to comprehending
                        our particular problems and adjusting your answers accordingly.
                        The outcomes and the degree of professionalism displayed during the
                        partnership have truly pleased us. We are forward to work with them going
                        future and heartily endorse their services. </h1>
                    <p className='italic  font-bold '>-Boxboy</p>
                </div>
                <div
                    className="flex flex-col relative  w-full  h-full sm:w-1/2 sm:h-100 rounded-2xl shadow-2xl shadow-gray-600 items-center justify-center bg-gray-50 dark:bg-gray-700 dark:text-white">
                    <h1 className='font-sans text-lime-600 text-sm sm:text-xl md:text-2xl lg:text-sm xl:text-sm scale-85' style={{ transform: 'scale(0.85)'}}>I highly recommend 180 Degrees Consulting for any company seeking strategic growth.** Their
                        team was professional, efficient, and exceeded my expectations. They delivered high-quality work
                        within the timeframe, providing valuable insights and data-backed recommendations for our
                        expansion into new markets and product lines. I was particularly impressed with their ability to identify
                        potential business partners and collaborators, which has significantly accelerated our expansion
                        plans.</h1>
                    <p className='italic font-bold'>-EarthTatva</p>
                </div>
                <div
                    className="flex flex-col relative  w-full  h-full sm:w-1/2 sm:h-100 rounded-2xl shadow-2xl shadow-gray-600 items-center justify-center bg-gray-50 dark:bg-gray-700 dark:text-white">
                    <h1 className='font-sans text-lime-600 text-sm sm:text-xl md:text-2xl lg:text-sm xl:text-sm scale-85' style={{ transform: 'scale(0.85)'}}>Wowed by 180 Degrees Consulting! Their professional, efficient team surpassed expectations,
                        delivering valuable insights and data-driven solutions for our growth. Their flexibility and
                        partnership approach led to a tailored plan, including identifying crucial business partners
                        that fast-tracked our expansion. Highly recommend this results-oriented consultancy for any
                        company!</h1>
                    <p className='italic font-bold'>-Pratigya</p>
                </div>
            </Carousel>


        </div>
    );
}
