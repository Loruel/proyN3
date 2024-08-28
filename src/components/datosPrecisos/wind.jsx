import React from 'react'
import { useClima } from '../../context/climaContext'

export default function Wind() {
  const { clima, getAbreviatura } = useClima()

  const deg = clima.wind ? getAbreviatura(clima.wind.deg) : '--'
  const graditos = clima.wind && clima.wind.deg

  return (
    <div className='w-full h-full bg-[#1E213A] text-[#E7E7EB] mt-6 flex flex-col items-center'>
      <p className='mt-5'>
        Wind status
      </p>
      <div className='flex items-center mt-4'>
        <h2 className='text-6xl font-bold'>
          {clima.wind && clima.wind.speed}
        </h2>
        <h3 className='text-3xl'>
          mph
        </h3>
      </div>
      <div className='flex items-center mt-5 mb-5 lg:mt-10 lg:mb-0'>
        <figure className='w-5 h-5 rounded-full bg-gray-500 lg:w-10 lg:h-10'>
          <img className='w-full h-full' style={{ transform: `rotate(${graditos}deg)` }} src="arrow.svg" alt="" />
        </figure>
        <p className='ml-2'>
          {deg}
        </p>
      </div>
    </div>
  )
}
