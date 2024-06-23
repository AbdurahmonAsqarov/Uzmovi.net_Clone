import React from 'react'
import SwiperCard from '../swiperCard/SwiperCard'

const Card = ({card}) => {
  return (
    <>
    <div key={card._id} className='flex justify-between items-center gap-28 my-10'>
      <img src={card.backdrop_path} className='w-1/2' alt="" />
       <div>
       <h1 className='text-[30px] my-10'>{card.original_title}</h1>
            <p className='my-10 text-[20px]'>{card.overview}</p>
            <p className='text-[20px]'>{card.first_aired}</p>
            </div>    
    </div>
   <div className='mt-52'>
   <SwiperCard/>
   </div>
    </>
  )
}

export default Card