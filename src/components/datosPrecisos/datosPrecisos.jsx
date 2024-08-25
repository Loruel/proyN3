import React from 'react'
import Wind from './wind'
import Humidity from './humidity'
import Visibility from './visibility'
import Pressure from './pressure'

export default function DatosPrecisos() {
    return (
        <div className='m-5 mb-7 lg:mr-20 lg:ml-20'>
            <h2 className='text-white text-2xl font-bold'>
                Today’s Hightlights
            </h2>

            <div className='lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10'>
                <Wind />
                <Humidity />
                <Visibility />
                <Pressure />
            </div>

        </div>
    )
}
