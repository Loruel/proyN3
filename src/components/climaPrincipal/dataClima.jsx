import React from 'react'
import { useClima } from '../../context/climaContext'

export default function DataClima() {
    const { clima, todayToday, KaCelsius, KaFhrenheit, buttonCF } = useClima()

    const temperatura = clima.main
        ? buttonCF === 'C'
            ? Math.round(KaCelsius(clima.main.temp))
            : Math.round(KaFhrenheit(clima.main.temp))
        : '--   '

    return (
        <div className='flex flex-col items-center'>
            <div className='flex items-end'>
                <p className='text-white text-8xl font-semibold'>
                    {temperatura}
                </p>
                <p className='text-[#88869D] text-5xl'>
                    °{buttonCF}
                </p>
            </div>
            <h2 className='mt-5 text-[#88869D] text-xl font-bold lg:mt-20'>
                {clima.weather && clima.weather[0].main}
            </h2>
            <div className='flex items-center mt-7 lg:mt-20'>
                <p className='text-[#88869D]'>
                    Today
                </p>
                <span className='mx-2 text-[#88869D]'>•</span>
                <p className='text-[#88869D]'>
                    {todayToday}
                </p>
            </div>
            <div className='flex items-center mt-5 mb-10'>
                <img className='h-4' src="locaion.svg" alt="" />
                <p className='text-[#88869D] ml-1'>
                    {clima.name}
                </p>
            </div>

        </div>
    )
}
