import React, { useState } from 'react'
import { useClima } from '../../context/climaContext'

export default function Modal() {
    const { openMenu, toggleModal, cityFija } = useClima()
    const [citySearch, setCitySearch] = useState('')

    const heandleCity = (city) => {
        cityFija(city)
        toggleModal()
    }

    const heandleCitySearchButton = () => {
        if (citySearch) {
            cityFija(citySearch)
            toggleModal()
        }
    }

    const heandleCitySearch = (event) => {
        setCitySearch(event.target.value)

    }

    return (

        openMenu && (
            <div className='fixed top-0 left-0 w-full h-full z-50 bg-[#1E213A] lg:w-3/12'>
                <div className='flex justify-end h-7'>
                    <button className='text-white w-7 h-7 mr-4 mt-4' onClick={toggleModal}>
                        <img src="/closeX.svg" alt="" />
                    </button>
                </div>
                <div className='relative flex items-center justify-center h-12 m-4 mt-8'>
                    <input className={`text-white h-11 w-3/4 bg-transparent border border-gray-300 backgroun bg-no-repeat bg-size-6 pl-10 pr-3 focus:outline-none`} type="text" value={citySearch} onChange={heandleCitySearch} placeholder='search location' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 absolute bottom-3 left-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>


                    <button className='bg-[#3C47E9] h-11 w-1/4 ml-2 text-white hover:bg-[#FFEC65]' onClick={heandleCitySearchButton}>
                        Search
                    </button>
                </div>
                <div className='p-4 h-full'>
                    <div className='cursor-pointer w-full h-14 flex items-center p-4 text-white mb-2 hover:border hover:border-gray-400 ' onClick={() => heandleCity('London')}>
                        <p className='w-1/2'>
                            London
                        </p>
                        <div className='flex justify-end w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 group-hover:scale-110">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className='cursor-pointer w-full h-14 flex items-center p-4 text-white mb-2 hover:border hover:border-gray-400 ' onClick={() => heandleCity('Barcelona')}>
                        <p className='w-1/2'>
                            Barcelona
                        </p>
                        <div className='flex justify-end w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 group-hover:scale-110">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className='cursor-pointer w-full h-14 flex items-center p-4 text-white mb-2 hover:border hover:border-gray-400 ' onClick={() => heandleCity('Long Beach')}>
                        <p className='w-1/2'>
                            Long Beach
                        </p>
                        <div className='flex justify-end w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 group-hover:scale-110">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )

    )
}
