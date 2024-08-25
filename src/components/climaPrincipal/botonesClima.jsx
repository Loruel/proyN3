import React from 'react'

export default function BotonesClima() {
    return (
        <div className='flex items-center p-2'>

            <button className='bg-[#6E707A] w-52 h-8 text-sm text-white mt-4 lg:ml-8 lg:mt-6 lg:w-72'>
                Search for places
            </button>

            <div className='h-8 w-full flex justify-end mt-4 lg:mr-6 lg:mt-8'>
                <button className='bg-[#6E707A] w-8 h-8 rounded-full flex items-center justify-center'>
                    <img className='w-6 h-6' src="target.svg" alt="" />
                </button>
            </div>
        </div>
    )
}
