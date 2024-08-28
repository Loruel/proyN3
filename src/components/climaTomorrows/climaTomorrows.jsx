import React from 'react'
import BotonesTomorrow from './botonesTomorrow'
import { useClima } from '../../context/climaContext'

export default function ClimaTomorrows() {
    const { clima, buttonCF, KaCelsius, KaFhrenheit, getImage } = useClima()

    const temperatura = clima.main
        ? buttonCF === 'C'
            ? Math.round(KaCelsius(clima.main.temp))
            : Math.round(KaFhrenheit(clima.main.temp))
        : '--   '

        const weatherIcon = clima.weather ? getImage(clima.weather[0].icon) : '/01d.png'

    return (
        <>
            <BotonesTomorrow />

            <div className='lg:flex lg:justify-center'>

                <div className='m-9 grid grid-cols-2 mb-10 gap-x-6 lg:flex lg:w-5/6 lg:gap-x-8'>

                    <div className='bg-[#1E213A] w-full h-48 flex flex-col items-center lg:h-full'>
                        <h4 className='text-white mt-3 lg:mt-1'>
                            Tomorrow
                        </h4>
                        <figure className='w-3/5 mt-2'>
                            <img src={weatherIcon} alt="" />
                        </figure>
                        <div className='flex space-x-3 mt-6'>
                            <p className='text-white'>
                                {temperatura}°{buttonCF}
                            </p>
                            <p className='text-gray-400 lg:mb-1'>
                                {temperatura}°{buttonCF}
                            </p>
                        </div>
                    </div>

                    <div className='bg-[#1E213A] w-full h-48 flex flex-col items-center lg:h-full'>
                        <h4 className='text-white mt-3 lg:mt-1'>
                            Tomorrow
                        </h4>
                        <figure className='w-3/5 mt-2'>
                            <img src={weatherIcon} alt="" />
                        </figure>
                        <div className='flex space-x-3 mt-6'>
                            <p className='text-white'>
                                {temperatura}°{buttonCF}
                            </p>
                            <p className='text-gray-400 lg:mb-1'>
                                {temperatura}°{buttonCF}
                            </p>
                        </div>
                    </div>

                    <div className='bg-[#1E213A] w-full h-48 flex flex-col items-center mt-6 lg:mt-0 lg:h-full'>
                        <h4 className='text-white mt-3 lg:mt-1'>
                            Tomorrow
                        </h4>
                        <figure className='w-3/5 mt-2'>
                            <img src={weatherIcon} alt="" />
                        </figure>
                        <div className='flex space-x-3 mt-6'>
                            <p className='text-white'>
                                {temperatura}°{buttonCF}
                            </p>
                            <p className='text-gray-400 lg:mb-1'>
                                {temperatura}°{buttonCF}
                            </p>
                        </div>
                    </div>

                    <div className='bg-[#1E213A] w-full h-48 flex flex-col items-center mt-6 lg:mt-0 lg:h-full'>
                        <h4 className='text-white mt-3 lg:mt-1'>
                            Tomorrow
                        </h4>
                        <figure className='w-3/5 mt-2'>
                            <img src={weatherIcon} alt="" />
                        </figure>
                        <div className='flex space-x-3 mt-6'>
                            <p className='text-white'>
                                {temperatura}°{buttonCF}
                            </p>
                            <p className='text-gray-400 lg:mb-1'>
                                {temperatura}°{buttonCF}
                            </p>
                        </div>
                    </div>

                    <div className='bg-[#1E213A] w-full h-48 flex flex-col items-center mt-6 lg:mt-0 lg:h-full'>
                        <h4 className='text-white mt-3 lg:mt-1'>
                            Tomorrow
                        </h4>
                        <figure className='w-3/5 mt-2'>
                            <img src={weatherIcon} alt="" />
                        </figure>
                        <div className='flex space-x-3 mt-6'>
                            <p className='text-white'>
                                {temperatura}°{buttonCF}
                            </p>
                            <p className='text-gray-400 lg:mb-1'>
                                {temperatura}°{buttonCF}
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
