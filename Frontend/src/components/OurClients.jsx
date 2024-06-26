import React from 'react'
import FadeInSection from '/src/components/cards/FadeInSection'
import ClientCard from '/src/components/cards/ClientCard';
import Spartificial from '/src/assets/pic/spartificial.png'
import Indibni from '/src/assets/pic/indibni.png'
import EarthTatva from '/src/assets/pic/et.jpg'
import Pratigya from '/src/assets/pic/pratigya.jpg'
import Boxboy from '/src/assets/pic/boxboy_logo.jpeg'


function OurClients() {
    return (
        <div className="flex flex-col justify-center items-center mt-0">
            <div
                className="fade-in-text flex flex-col justify-center items-center pt-8 md:p-12 basis-1/2 subpixel-antialiased text-4xl sm:text-6xl md:text-7xl font-bold font-title text-lime-600">
                <FadeInSection>
                    <p>OUR CLIENTS</p>
                </FadeInSection>
            </div>
            <div className='relative flex ' style={{
                height:'350px',
                margin:'25px'
            }}>
                <div className=' animate-marquee grid grid-cols-9 gap-x-72 mt-0'>
                    <ClientCard
                        name="Spartificial"
                        imgPath={Spartificial}
                        w1="Developing a business pitch deck"
                        w2="Finding the type and scale of companies that are working in these domains"
                        w3="Researching what the Engineering team looks like in these companies"
                        w4="Finding out institutions or companies providing job-focused training for these domains"
                    />
                    <ClientCard
                        name="Indibni"
                        imgPath={Indibni}
                        w1="Competitor Analysis"
                        w2="Product Analysis."
                        w3="Customer Analysis."
                        w4="Company Analysis."
                    />
                    <ClientCard
                        name="EarthTatva"
                        imgPath={EarthTatva}
                        w1="Developing a marketing & outreach strategy"
                        w2="Social Media Strategy"
                        w3=" Content Strategy across different platforms"
                        w4="Brand publicity strategies"
                    />
                    <ClientCard
                        name="Pratigya"
                        imgPath={Pratigya}
                        w1="Marketing and Outreach Strategy."
                        w2="CSR Fund raising strategy."
                        w3="Developing a marketing & outreach strategy"
                        w4="Brand publicity strategies"
                    />
                    <ClientCard
                        name="Boxboy"
                        imgPath={Boxboy}
                        w1="Go to Market Strategies"
                        w2="Market Brand Positioning"
                        w3="Digital Marketing Strategies"
                        w4="Technical and Pricing Strategies"
                    />
                    <ClientCard
                        name="Spartificial"
                        imgPath={Spartificial}
                        w1="Developing a business pitch deck"
                        w2="Finding the type and scale of companies that are working in these domains"
                        w3="Researching what the Engineering team looks like in these companies"
                        w4="Finding out institutions or companies providing job-focused training for these
domains"
                    />
                    <ClientCard
                        name="Indibni"
                        imgPath={Indibni}
                        w1="Competitor Analysis"
                        w2="Product Analysis."
                        w3="Customer Analysis."
                        w4="Company Analysis."
                    />
                    <ClientCard
                        name="EarthTatva"
                        imgPath={EarthTatva}
                        w1="Developing a marketing & outreach strategy"
                        w2="Social Media Strategy"
                        w3=" Content Strategy across different platforms"
                        w4="Brand publicity strategies"
                    />
                    <ClientCard
                        name="Pratigya"
                        imgPath={Pratigya}
                        w1="Marketing and Outreach Strategy."
                        w2="CSR Fund raising strategy."
                        w3="Developing a marketing & outreach strategy"
                        w4="Brand publicity strategies"
                    />
                    <ClientCard
                        name="Boxboy"
                        imgPath={Boxboy}
                        w1="Go to Market Strategies"
                        w2="Market Brand Positioning"
                        w3="Digital Marketing Strategies"
                        w4="Technical and Pricing Strategies"
                    />
                </div>
                <div className='absolute animate-marquee2 grid grid-cols-8 gap-x-72 mt-4'>
                    <ClientCard
                        name="Spartificial"
                        imgPath={Spartificial}
                        w1="Developing a business pitch deck"
                        w2="Finding the type and scale of companies that are working in these domains"
                        w3="Researching what the Engineering team looks like in these companies"
                        w4="Finding out institutions or companies providing job-focused training for these
domains"
                    />
                    <ClientCard
                        name="Indibni"
                        imgPath={Indibni}
                        w1="Competitor Analysis"
                        w2="Product Analysis."
                        w3="Customer Analysis."
                        w4="Company Analysis."
                    />
                    <ClientCard
                        name="EarthTatva"
                        imgPath={EarthTatva}
                        w1="Developing a marketing & outreach strategy"
                        w2="Social Media Strategy"
                        w3=" Content Strategy across different platforms"
                        w4="Brand publicity strategies"
                    />
                    <ClientCard
                        name="Pratigya"
                        imgPath={Pratigya}
                        w1="Marketing and Outreach Strategy."
                        w2="CSR Fund raising strategy."
                        w3="Developing a marketing & outreach strategy"
                        w4="Brand publicity strategies"
                    />
                    <ClientCard
                        name="Boxboy"
                        imgPath={Boxboy}
                        w1="Go to Market Strategies"
                        w2="Market Brand Positioning"
                        w3="Digital Marketing Strategies"
                        w4="Technical and Pricing Strategies"
                    />
                </div>
            </div>

        </div>
    );
}

export default OurClients
