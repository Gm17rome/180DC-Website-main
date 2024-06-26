import React from "react";
import {profiles} from '/src/data/team';
import FadeInSection from '/src/components/cards/FadeInSection'
import Nav from '/src/components/Nav'
import Footer from '/src/components/Footer'
import car_2 from "/src/assets/carousel_3.jpg";
import Linkedin from "/src/assets/linkedIn.png"

function scrollToElement(id) {
    document.getElementById(id).scrollIntoView();
}

function handleClick(e, id) {
    e.preventDefault();
    scrollToElement(id);
}

export default function Team() {
    const backgroundStyle = {
        backgroundImage: 'url("src/assets/Desktop - 6.png")'
    };

    return (

        <div id="team" style={backgroundStyle}>
            <Nav/>
            <div className="relative h-64 w-full sm:h-[23vh] sm:w-full xl:h-[53vh] object-contain" style={{
                zIndex:1
            }}>
                <img src={car_2} alt="..." className="absolute h-full w-full object-cover object-center opacity-30"/>
                <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full"/>
                <p className='flex justify-center items-center h-full text-lime-600 text-3xl md:text-5xl lg:text-8xl shadow-2xl font-medium font-title relative tracking-widest'>OUR
                    TEAM</p>
            </div>
            <FadeInSection>
                <div className="text-lime-600 p-8 md:p-12 text-center text-4xl md:text-6xl font-bold font-title">
                    EXECUTIVE BODY 24/25
                </div>
            </FadeInSection>
            <FadeInSection>
                <div
                    id="execcore"
                    className="md:flex md:flex-wrap md:justify-center md:item-center md:text-center ">
                    {profiles.map((profile, idx) => (
                        <div
                            key={idx}
                            className="md:w-1/4 md:flex md:justify-center md:item-center md:text-center md:p-5">
                            <div
                                className="text-lime-500 border-2 bg-opacity-40 border-lime-500 hover:scale-[1.05] transition-all delay-100 bg-white-100 m-5 rounded-lg pb-2 shadow cursor-pointer">
                                <img className="rounded-t-lg" src={profile.imgUrl} alt=""/>
                                <div className="p-5 text-center font-title">
                                    <h5 className="mb-2 text-2xl text-slate-600 font-bold ">{profile.member}</h5>
                                    <p className="mb-3 ">{profile.position}</p>
                                    <ul className="list-decimal white-space-normal text-base text-slate-500 hyphens-auto ">
                                        {profile.bio.p1}

                                        <hr style={{
                                            color: '#000000',
                                            backgroundColor: '#000000',
                                            height: .5,
                                            borderColor: '#000000'
                                        }}/>
                                        <ul className="mt-2">{profile.bio.p2}</ul>
                                            <hr style={{
                                            color: '#000000',
                                            backgroundColor: '#000000',
                                            height: .5,
                                            borderColor: '#000000'
                                        }}/>
                                        <ul className="mt-2">{profile.bio.p3}</ul>
                                    </ul>
                                </div>
                                <a href={profile.linkedin}>
                                <img src={Linkedin}
                                className='h-10 w-10 translate-x-32 hover:scale-150 transition-all delay-140'
                                /></a>
                            </div>
                        </div>
                    ))}
                </div>


            </FadeInSection>
            <FadeInSection>
                <Footer/>
            </FadeInSection>
        </div>


    );
}
