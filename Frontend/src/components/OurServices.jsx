import React from "react";
import MEE from "/src/assets/MEE.png";
import IM from "/src/assets/IM.png";
import SEO from "/src/assets/SEO.png";
import MB from "/src/assets/MB.png";
import OM from "/src/assets/OM.png";
import FM from "/src/assets/FM.png";
import middleSVG from "/src/assets/middleSVG.png";
import FadeInSection from "/src/components/cards/FadeInSection";

function OurServices() {
  return (
    <div id="services">
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="text-lime-600 text-4xl sm:text-6xl md:text-7xl font-title font-bold pt-8 md:p-8">
          <FadeInSection>
            <p>OUR SERVICES</p>
          </FadeInSection>
        </div>
        <div className="px-10 md:px-14 md:py-8 lg:px-28 pt-10 font-extralight font-content text-lg">
          <FadeInSection>
            <p className="text-xl lg:text-2xl opacity-60">
              We are able to leverage our extensive experience and deep
              understanding of the non-profit sector to provide customized
              solutions that address your organization's specific challenges and
              drive measurable impact.
            </p>
          </FadeInSection>
        </div>
      </div>
      <FadeInSection>
        <div className="flex flex-col sm:flex-row px-10 md:px-14 lg:px-28 text-base sm:text-sm lg:text-xl font-semibold font-title text-lime-600">
          <div className="flex flex-col justify-center items-center basis-1/3 p-2">
            <div className="flex flex-row p-3 m-5 items-center justify-center rounded-2xl  bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-100">
              <img src={MEE} alt="..." className="h-10 w-10" />
              <p>REVENUE
                GENERATION</p>
            </div>
            <div className="flex flex-row p-3 m-5 items-center justify-center rounded-2xl  bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-100">
              <img src={IM} alt="..." className="h-10 w-10" />
              <p>MARKET
                STRATEGY</p>
            </div>
          </div>
          <div className="invisible sm:visible sm:basis-1/3 flex justify-center items-center">
            <h1  style={{ transform: 'scale(5)', fontWeight:"lighter" }}>X</h1>
          </div>
          <div className="flex flex-col justify-center items-center basis-1/3 p-2">
            <div
                className="flex flex-row p-3 m-5 items-center justify-center rounded-2xl  bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-100">
              <img src={MB} alt="..." className="h-10 w-10"/>
              <p>EXPANSION</p>
            </div>
            <div
                className="flex flex-row p-3 m-5 items-center justify-center rounded-2xl bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-100">
              <img src={SEO} alt="..." className="h-10 w-10"/>
              <p>ORGANISATIONAL PLANNING</p>
            </div>

          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default OurServices;
