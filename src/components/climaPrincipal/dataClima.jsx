import React from 'react'

export default function DataClima() {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex items-end'>
                <p className='text-white text-8xl font-semibold'>
                    15
                </p>
                <p className='text-[#88869D] text-5xl'>
                    °C
                </p>
            </div>
            <h2 className='mt-5 text-[#88869D] text-xl font-bold lg:mt-20'>
                Shower
            </h2>
            <div className='flex items-center mt-7 lg:mt-20'>
                <p className='text-[#88869D]'>
                    Today
                </p>
                <span className='mx-2 text-[#88869D]'>•</span>
                <p className='text-[#88869D]'>
                    Fri, 5 Jun
                </p>
            </div>
            <div className='flex items-center mt-5 mb-10'>
                <img className='h-4' src="locaion.svg" alt="" />
                <p className='text-[#88869D]'>
                    Helsinki
                </p>
            </div>
            
        </div>
    )
}
