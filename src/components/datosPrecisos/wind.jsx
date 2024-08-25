import React from 'react'

export default function Wind() {
  return (
    <div className='w-full h-full bg-[#1E213A] text-[#E7E7EB] mt-6 flex flex-col items-center'>
      <p className='mt-5'>
        Wind status
      </p>
      <div className='flex items-center mt-4'>
        <h2 className='text-6xl font-bold'>
          7
        </h2>
        <h3 className='text-3xl'>
          mph
        </h3>
      </div>
      <div className='flex mt-5 mb-5'>
        <figure className='w-5 h-5 rounded-full bg-gray-500'>
          <img className='w-full h-full' src="arrow.svg" alt="" />
        </figure>
        <p className='ml-2'>
          WSW
        </p>
      </div>
    </div>
  )
}
