import React from 'react'
import { useClima } from '../../context/climaContext'

export default function TomorrowCards({ data }) {
    const { buttonCF, getImage, KaCelsius, KaFhrenheit } = useClima()

    /* const temperatura = clima.main
        ? buttonCF === 'C'
            ? Math.round(KaCelsius(clima.main.temp))
            : Math.round(KaFhrenheit(clima.main.temp))
        : '--   ' */

    const temperaturaMin = data.main
        ? buttonCF === 'C'
            ? Math.round(KaCelsius(data.main.temp_min))
            : Math.round(KaFhrenheit(data.main.temp_min))
        : '--'

    const temperaturaMax = data.main
        ? buttonCF === 'C'
            ? Math.round(KaCelsius(data.main.temp_max))
            : Math.round(KaFhrenheit(data.main.temp_max))
        : '--'



    const weatherIcon = data.weather[0].icon ? getImage(data.weather[0].icon) : '/01d.png'


    return (
        <div className='bg-[#1E213A] w-full h-full flex flex-col items-center lg:h-full'>
            <h4 className='text-white mt-3 lg:mt-1'>
                {data.dt_txt.split(" ")[0]}
            </h4>
            <figure className='w-3/5 mt-2 flex items-center justify-center'>
                <img src={weatherIcon} alt="" />
            </figure>
            <div className='flex space-x-3 mt-6'>
                <p className='text-white'>
                    {temperaturaMin}°{buttonCF}
                </p>
                <p className='text-gray-400 lg:mb-1'>
                    {temperaturaMin}°{buttonCF}
                </p>
            </div>
        </div>
    )
}
