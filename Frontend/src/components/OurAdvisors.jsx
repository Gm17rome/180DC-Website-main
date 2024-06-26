import FadeInSection from '/src/components/cards/FadeInSection'
import Nitin from '/src/assets/pic/Nitin-Kumar.jpeg';
import Ashutosh from '/src/assets/pic/ashutosh.jpeg';
import Kishlay from '/src/assets/pic/kishlayjha.jpeg';
import Hiba from '/src/assets/pic/hiba.png';
import Manish from '/src/assets/pic/manish.jpeg';
import linkedIn from '/src/assets/linkedIn.png';
import Kislaya from '/src/assets/pic/kislaya.png'
import Sushant from '/src/assets/pic/sushant.png'
import Jai from '/src/assets/pic/jai.png'
import Gupta from '/src/assets/pic/gupta.png'
import Ghosh from '/src/assets/pic/ghosh.png'
import Apoorv from '/src/assets/pic/apoorv.png'


function AdvisorCard(props){
    return(
        <div className='w-56 hover:scale-110 transition-all delay-100'>
                <div className='group hover:bg-lime-600 text-lime-600 hover:text-white shadow-2xl hover:shadow-2xl transition-all delay-100 flex flex-col justify-center items-center w-full h-full p-2 border rounded-2xl'>
                    <img src={props.Img} alt="/src." className='h-44 w-44 m-2 group-hover:grayscale(100%) group-hover:blur-[1px] rounded-full outline outline-3 outline-offset-4 outline-lime-600' />
                    <div className=' h-full w-full absolute bottom-6 group-hover:bottom-[86px] transition-all delay-100 p-3 flex justify-center items-center'>
                        <a href={props.linkedIn} target="_blank"><img src={linkedIn} alt="..." className='h-10 w-10 hover:scale-150 transition-all delay-140 hover:shadow-2xl shadow-black'/></a>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='font-title font-bold text-lg'>{props.name}</p>

                    </div>

                    <div className='flex flex-col justify-center items-center m-1'>
                        <ul className='font-content text-sm font-extralight text-black list-disc list-inside'>
                            <li className=''>{props.p1}</li>
                            <li className=''>{props.p2}</li>
                            <li className=''>{props.p3}</li>
                        </ul>
                    </div>

                </div>
            </div>
    )
}

function OurAdvisors() {
  return (
    <div className='mt-5 mb-32'>
        <div className='flex justify-center items-center text-lime-600 text-4xl sm:text-6xl md:text-7xl font-title font-bold pt-8 md:p-8'>
            <FadeInSection>
            <p>OUR MENTORS</p>
            </FadeInSection>
        </div>
        <div className='flex flex-col md:flex-row justify-evenly md:gap-x-4 gap-y-10 lg:gap-x-10 pt-8 items-center'>
            <FadeInSection>
            <AdvisorCard
                Img={Kislaya}
                name="Kislay Jha"
                linkedIn="https://www.linkedin.com/in/nikumar/"
                p1 ="DGM Commercial"
                p2="Corporate Strategy at BC Jindal Group"
                p3="Ex Senior Associate at Boston Consulting Group"
            />
            </FadeInSection>
            <FadeInSection>
            <AdvisorCard
                Img={Sushant}
                name="Sushant Dutta"
                linkedIn="https://www.linkedin.com/in/sushant-dutta-07a88712/"
                p1 = "Founder at 1 Vendor Platform"
                p2="IIM Bangalore alumnus"
                p3="Ex Senior Product Manager - Technology at Amazon"
            />
            </FadeInSection>
            <FadeInSection>
            <AdvisorCard
                Img={Ashutosh}
                name="Akshay Saraogi"
                linkedIn="https://www.linkedin.com/in/akshay-saraogi-a41a6973/"
                p1 = "Associate at McKinsey & Co."
                p2="MBA IIM Bangalore’21"
                p3="BIT Mesra’16"
            />
            </FadeInSection>
            <FadeInSection>
                <AdvisorCard
                    Img={Hiba}
                    name="Hiba Ashraf"
                    linkedIn="https://www.linkedin.com/in/hiba-ashraf-b67143135/"
                    p1 = "Consultant at KPMG India"
                    p2="ECE alumus of Birla Institute of Technology, Mesra "
                    p3="Former Leader at BRICS Chamber of Commerce & Industry"
                />
            </FadeInSection>
        </div>
        <div className='flex flex-col md:flex-row justify-evenly md:gap-x-4 gap-y-10 lg:gap-x-10 pt-8 items-center'>
            <FadeInSection>
            <AdvisorCard
                Img={Jai}
                name="Jai Utkarsh"
                linkedIn="https://www.linkedin.com/in/jai-utkarsh/"
                p1 ="Associate Vice President -Technology at NatWest Group"
                p2="Associate Vice President -Technology at NatWest Group"
                p3="MBA IIM Lucknow'23"
                style={{width:'250px', height: '2200px'}}
            />
            </FadeInSection>
            <FadeInSection>
            <AdvisorCard 
                Img={Gupta}
                name="Srishti Gupta"
                linkedIn="https://www.linkedin.com/in/srishti-gupta-28467638/"
                p1 = "Senior Consultant at EY"
                p2="Ex Associate Vice President at HSBC"
                p3="MBA XIM Bhubaneswar'17"
                style={{width:'250px', height: '2200px'}}
            />
            </FadeInSection>
            <FadeInSection>
            <AdvisorCard
                Img={Ghosh}
                name="Debayan Ghosh Dastidar"
                linkedIn="https://www.linkedin.com/in/debayangd/"
                p1 = "Investment Banking Senior Associate at Ambit Pvt. Ltd."
                p2="Ex Investment Banking Analyst at JPMorgan Chase & Co."
                p3="MBA IIM Ranchi'21"
            />
            </FadeInSection>
            <FadeInSection>
                <AdvisorCard
                    Img={Apoorv}
                    name="Apoorv Kumar"
                    linkedIn="https://www.linkedin.com/in/apoorvkum/"
                    p1 = "Manager - State IPAs at Invest India - Govt. of India"
                    p2="Ex Manager - Strategic HR at Reliance Retail"
                    p3="MBA XLRI Jamshedpur'19"
                />
            </FadeInSection>
        </div>
    </div>
  )
}

export default OurAdvisors
