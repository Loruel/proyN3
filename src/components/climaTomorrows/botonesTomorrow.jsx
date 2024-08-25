import React from 'react'

export default function BotonesTomorrow() {
    return (
        <div className='flex justify-end mt-5 mr-8'>
            <button className='bg-[#6E707A] w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold mr-2 lg:w-7 lg:h-7 lg:text-sm'>
                <p>
                    °C
                </p>
            </button>
            <button className='bg-[#6E707A] w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold lg:w-7 lg:h-7 lg:text-sm'>
                <p>
                    °F
                </p>
            </button>
        </div>
    )
}
