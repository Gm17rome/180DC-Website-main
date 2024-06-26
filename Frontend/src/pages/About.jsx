import React from 'react'
import Nav from '/src/components/Nav'
import Footer from '/src/components/Footer'
import car_2 from '/src/assets/carousel_2.jpeg'
import AU_1 from '/src/assets/AU_1.png'
import AU_2 from '/src/assets/AU_2.png'
import AU_3 from '/src/assets/AU_3.png'
import fadeInSection from "/src/components/cards/FadeInSection.jsx";
import FadeInSection from "/src/components/cards/FadeInSection.jsx";
import MEE from "/src/assets/MEE.png";

function Stats(props) {
    return (<div className='flex flex-col justify-center items-center m-8'>
        <div className='p-2'>
            <img src={props.imgUrl} alt="..." className='h-16 w-16 lg:h-32 lg:w-32'/>
        </div>
        <div
            className='flex flex-col p-2 text-lg lg:text-2xl font-light font-title opacity-60 justify-center items-center'>
            <p>{props.stat}</p>
            <p>{props.what}</p>
        </div>
    </div>)
}


function About() {

    const backgroundStyle = {
        backgroundImage: 'url("src/assets/Desktop - 6.png")'
    };
    return (<div className='overflow-x-hidden overflow-y-hidden' style={backgroundStyle}>
        <Nav/>
        <div className="relative h-64 w-full sm:h-[23vh] sm:w-full xl:h-[53vh] object-contain" style={{
            zIndex:1
        }}>
            <img src={car_2} alt="..." className="absolute h-full w-full object-cover object-center opacity-30"/>
            <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full"/>
            <p className='flex justify-center items-center h-full text-lime-600 text-3xl md:text-5xl lg:text-8xl shadow-2xl font-medium font-title relative tracking-widest'>ABOUT
                US</p>
        </div>

        <FadeInSection >
            <div className='flex flex-row justify-center items-center p-8 m-4 md:p-14' >
                <div className='flex flex-col basis-1/3 p-1 font-title justify-center'>
                    <div className='flex items-center basis-1/3'><p
                        className='text-lg md:text-3xl lg:text-6xl text-light-black font-bold'>What is</p></div>
                    <div className='flex items-center basis-2/3'><p
                        className='text-lg md:text-3xl lg:text-6xl text-lime-600 font-bold'>180 DC BITM ?</p>
                    </div>
                </div>

                <div
                    className='flex flex-col p-2 justify-between basis-2/3 font-light font-content text-sm md:text-lg opacity-60 lg:text-3xl text-justify'>
                    <div className='flex mb-4'>
                        <p>180DC BIT MESRA is
                            a non -profit student run organization that aims to professionally consult for
                            Socially Impactful Initiatives to help them enhance their
                            operations and potency by identifying and assuaging
                            their issues. We wish to make a positive impact on society
                            through helpful advice while simultaneously encouraging professionalism.
                        </p>
                    </div>
                    <div className='flex mt-4'>
                        <p>We offer very high-quality consulting services without the usual price tag because as our
                            consultants
                            are carefully selected top students with the right combination of expertise, creativity, and
                            problem-solving ability.
                        </p>
                    </div>
                </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className='flex flex-row justify-center items-center p-8 m-4 md:p-14'>
                <div className='flex flex-col basis-1/3 p-1 font-title justify-center'>
                    <div className='flex items-center basis-1/3'><p
                        className='text-lg md:text-3xl lg:text-6xl text-lime-600 font-bold'>Our</p></div>
                    <div className='flex items-center basis-2/3'><p
                        className='text-lg md:text-3xl lg:text-6xl text-light-black font-bold'>Mission</p></div>
                </div>
                <div
                    className='flex flex-col p-2 justify-between basis-2/3 font-light font-content text-sm md:text-lg opacity-60 lg:text-3xl text-justify'>
                    <div className='flex mb-4'>
                        <p>To create an impact in the society by serving our clients in social impact projects,
                            increase the effectiveness and troubleshoot problems in the client’s organizations,
                            thereby, helping them achieve a firmer stance amongst competitors and in society and,
                            spread the consulting culture among undergraduates and awareness about
                            opportunities in the consulting world.
                        </p>
                    </div>
                    <div className='flex mt-4'>
                        <p>We work primarily with organizations that are focused on improving education
                            and health outcomes, achieving environmental sustainability, and/or
                            alleviating poverty. We aim to serve various social enterprises, startups and
                            non-profit organizations while maximizing our branch’s social impact.</p>
                    </div>
                </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className='flex flex-col md:flex-row font-title justify-center items-center relative h-[50vh] mb-52'>

                <div className='md:h-full md:w-1/2 flex flex-col md:flex-col justify-center items-center'>
                    <div className='flex flex-row justify-center items-center m-4'>
                        <div className='text-lime-600 font-extrabold text-6xl md:text-8xl mr-2'>10+
                        </div>
                        <div className='flex flex-col justify-center font-bold text-light-black'>
                            <div className='text-xl md:text-5xl relative'>Projects</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='text-lime-600 font-extrabold text-6xl md:text-8xl mr-2'>6+</div>
                        <div className='flex flex-col justify-center font-bold text-light-black'>
                            <div className='text-xl md:text-5xl relative'>Mentors</div>

                        </div>
                    </div>
                </div>
                <div className='md:h-full md:w-1/2 flex flex-col md:flex-col justify-center items-center'>
                    <div className='flex flex-row m-4 justify-center items-center'>
                        <div className='text-lime-600 font-extrabold text-6xl md:text-8xl mr-2'>25+</div>
                        <div className='flex flex-col justify-center font-bold text-light-black'>
                            <div className='text-xl md:text-5xl relative'>Members</div>

                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center m-4'>
                        <div className='text-lime-600 font-extrabold text-6xl md:text-8xl mr-2'>10K+</div>
                        <div className='flex flex-col justify-center font-bold text-light-black'>
                            <div className='text-xl md:text-5xl relative'>Lives Impacted</div>

                        </div>
                    </div>
                </div>
                <div>
                <a href="https://drive.google.com/drive/folders/1J3E9T4JxmJkbgka3Zi8jPSgwWvbqs--5?usp=sharing">
                <div
                        className="flex flex-row p-5 m-10 items-center justify-center rounded-2xl bg-white-opac w-100 drop-shadow-lg hover:scale-110 transition-all delay-100 cursor-pointer
                               group hover:bg-lime-600 hover:text-white ">
                        <p style={{
                            width: 200
                        }}>DOWNLOAD BROCHURE</p>
                    </div>
                </a>
                <a href="https://medium.com/@180DC_BITMesra">
                    <div
                        className="flex flex-row p-5 m-10 items-center justify-center rounded-2xl bg-white-opac w-100 drop-shadow-lg hover:scale-110 transition-all delay-100 cursor-pointer
                               group hover:bg-lime-600 hover:text-white ">
                        <p style={{
                            width: 190
                        }}>SEE 180DC BITM BLOGS</p>
                    </div>
                </a>
                </div>
            </div>

        </FadeInSection>

        <Footer/>


    </div>)
}

export default About
