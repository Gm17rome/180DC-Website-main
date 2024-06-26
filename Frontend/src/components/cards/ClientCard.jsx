import React from "react"


function ClientCard(props){
    return(
        <div className='flex flex-col font-bold bg-white h-56 w-56 font-content justify-center items-center rounded-3xl shadow-xl group hover:scale-110 transition-all delay-200 relative overflow-hidden m-5 md:m-10 lg:m-14'>
            <div className='flex flex-col justify-center items-center w-56 h-56 rounded-lg'>
            <img src={props.imgPath} alt="..." className='h-28 w-28 m-2'/>
            <p className='m-2 text-xl opacity-60'>{props.name}</p>
            </div>
            <div className='absolute justify-center items-center w-full h-full bg-white -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all delay-100 cursor-pointer'>
                <ul className='flex flex-col justify-center cursor-text gap-y-[5px] list-outside m-8 text-xs opacity-60 list-disc'>
                <li>{props.w1}</li>
                <li>{props.w2}</li>
                <li>{props.w3}</li>
                <li>{props.w4}</li>
                </ul>
            </div>
        </div>
    )
}

export default ClientCard
