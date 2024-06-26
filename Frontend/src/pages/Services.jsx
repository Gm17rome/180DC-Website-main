import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import mab from '../assets/SMAB.png'
import im from '../assets/SIM.png'
import meae from '../assets/SMEAE.png'
import om from '../assets/SOM.png'
import car_2 from "../assets/bg.png";


function Flip(props) {
    return (<div
        className='absolute justify-center items-center w-full h-full bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all delay-200'>
        <p className='cursor-text p-8 text-xl font-semibold md:text-2xl text-white-opac'>
            {props.w1}
        </p>
    </div>)
}


function Services() {

    const backgroundStyle = {
        backgroundImage: 'url("src/assets/Desktop - 6.png")'
    };
    return (<div className='overflow-x-hidden overflow-y-hidden' style={backgroundStyle}>
        <Nav/>

        <div className="relative h-64 w-full sm:h-[23vh] sm:w-full xl:h-[53vh] object-contain" style={{
            zIndex:1}}>
            <img src={car_2} alt="..." className="absolute h-full w-full object-cover object-top opacity-30"/>
            <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full"/>
            <p className='flex justify-center tracking-widest items-center h-full text-lime-600 text-3xl md:text-5xl lg:text-8xl shadow-2xl font-medium font-title relative'>OUR
                SERVICES</p>
        </div>
        <div>
            <div class="sm:p-4 md:p-8 mx-2 grid md:grid-cols-2 lg:grid-cols-2 grid-col-1 gap-8 cursor-pointer">
                <div
                    class=" m-5 px-2 py-8 bg-gradient-to-b from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-2xl group hover:scale-110 transition-all delay-100 relative overflow-hidden lg:m-10 ">
                    <div class=" py-8 flex item-center justify-center ">
                        <img class=" h-40 w-40" src={meae} alt="ERROR"/>
                    </div>

                    <p class="text-white p-4 font-bold text-2xl text-center font-title md:text-3xl ">REVENUE
                        GENERATION</p>

                    <Flip
                        w1="In a competitive landscape, maximizing revenue is crucial. At 180dc, we've helped numerous organizations unlock their full fundraising potential through proven strategies."/>

                </div>


                <div
                    class="m-5 px-2 py-8   bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-lg group hover:scale-110 transition-all delay-100 relative overflow-hidden lg:m-10">
                    <div class=" py-8 flex item-center justify-center ">
                        <img class=" h-40 w-40 " src={mab} alt="Error"/>
                    </div>

                    <p class="text-white p-4 font-bold text-2xl text-center font-title md:text-3xl">MARKET
                        STRATEGY</p>

                    <Flip
                        w1="We're confident that by partnering with 180dc, you can significantly strengthen your marketing and engagement efforts, leading to increased volunteer recruitment, deeper audience engagement, and ultimately, greater impact."/>


                </div>
                <div
                    class="m-5 px-2 py-8  bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-lg group hover:scale-110 transition-all delay-100 relative overflow-hidden lg:m-10 ">
                    <div class=" py-8 flex item-center justify-center ">
                        <img class=" h-40 w-40" src={im} alt="ERROR"/>
                    </div>

                    <p class="text-white  p-4 font-bold text-2xl text-center md:text-3xl ">ORGANISATIONAL PLANNING</p>
                    <Flip
                        w1="In the dynamic landscape of non-profits, sustainable revenue is the lifeblood of your mission. At 180dc, we believe effective revenue generation goes beyond tactics – it's about strategic alignment and fueling organizational growth."/>


                </div>
                <div
                    class="m-5 px-2 py-8   bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-lg group hover:scale-110 transition-all delay-100 relative overflow-hidden lg:m-10  ">
                    <div class=" py-8 flex item-center justify-center ">
                        <img class=" h-40 w-40" src={om} alt="ERROR"/>
                    </div>

                    <p class="text-white p-4 font-bold text-2xl text-center font-title md:text-3xl">EXPANSION</p>
                    <Flip
                        w1="As your impact grows, so too does the need for strategic expansion. At 180dc, we help organizations like yours leverage their success to reach new heights without compromising core values or mission."/>


                </div>
            </div>

        </div>
        <Footer/>
    </div>);
}

export default Services