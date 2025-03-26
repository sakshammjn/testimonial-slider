import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Card = (props) => {

    let review = props.reviews;
    
  return (
    <div className='flex flex-col md:relative w-[650px] bg-white rounded-t-lg'>
      <div className='absolute top-[-5rem] left-[1rem] z-[10] mx-auto'>
        <img src={review.image} className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'></img>
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]'></div>
      </div>

      <div className='text-center mt-7'> 
        <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
      </div>

      <div className='text-center mt-7'>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>

      <div className='text-center text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className='w-[80%] mx-auto text-center mt-4 text-slate-500 w-'>
        <p>{review.text}</p>
      </div>
      
      <div>
        <FaQuoteRight className='text-center text-violet-400 mx-auto mt-5'/>
      </div>      
    </div>
  )
}

export default Card
