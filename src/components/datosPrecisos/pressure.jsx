import React from 'react'

export default function Pressure() {
  return (
    <div className='w-full h-full bg-[#1E213A] text-[#E7E7EB] mt-6 flex flex-col items-center'>
      <p className='mt-5'>
        Air Pressure
      </p>
      <div className='flex items-center mt-4 mb-8'>
        <h2 className='text-6xl font-bold'>
          998
        </h2>
        <h3 className='text-4xl ml-2'>
          mb
        </h3>
      </div>
    </div>  
  )
}
