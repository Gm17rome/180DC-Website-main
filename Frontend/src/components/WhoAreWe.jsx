import React from "react";
import FadeInSection from "/src/components/cards/FadeInSection";

const WhoAreWe = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center mt-4">
            <div
                className="fade-in-text flex flex-col justify-center items-center pt-8 md:p-12 basis-1/2 subpixel-antialiased text-4xl sm:text-6xl md:text-7xl font-title font-bold text-lime-600">
                <FadeInSection>
                    <p>WHO ARE WE</p>
                </FadeInSection>
            </div>
            <div
                className="invisible sm:visible h-2 w-64 md:w-96 lg:w-2 lg:h-64 rounded-xl bg-clip-content sm:bg-gradient-to-r lg:bg-gradient-to-b from-lime-600 to-lime-600"></div>
            <div className="fade-in-text font-content flex flex-col basis-1/2 p-4 md:p-12 lg:p-28">
                <FadeInSection>
                    <p className="p-4 subpixel-antialiased font-light text-xl opacity-60">
                        180DC BIT MESRA is a non -profit student run organization that aims to professionally consult for
                        Socially Impactful Initiatives to help them enhance their
                        operations and potency by identifying and assuaging
                        their issues. Dedicated to social impact, they leverage the expertise of motivated
                        students to provide high-quality, affordable consulting services to
                        non-profit organizations and social enterprises. We wish to make a positive impact on society
                        through helpful advice while simultaneously encouraging professionalism.
                    </p>
                    <div className="flex flex-row justify-center items-center">
                        <div
                            className="lg:invisible h-72 w-8 sm:h-36 md:w-4 rounded-xl bg-clip-content bg-lime-600"></div>
                        <p className="p-4 subpixel-antialiased text-xl opacity-60 italic font-bold text-lime-600">
                            " There are enough charities to solve the world's problems. They just need a hand to reach their potential " -
                            Nat Ware (Founder & CEO)
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default WhoAreWe;
