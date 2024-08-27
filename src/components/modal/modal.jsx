import React from 'react'
import { useClima } from '../../context/climaContext'

export default function Modal() {
    const { openMenu, toggleModal } = useClima()

    return (

openMenu && (
    <div className='fixed top-0 left-0 w-full h-full z-50 bg-[#1E213A] lg:w-3/12'>
        <div className='flex justify-end h-7'>
            <button className='text-white w-7 h-7 mr-4 mt-4' onClick={toggleModal}>
                <img src="/closeX.svg" alt="" />
            </button>
        </div>
        <div className='flex items-center justify-center h-12 m-4 mt-8'>
            <input className={`text-white h-11 w-3/4 bg-transparent border border-gray-300 bg-[url('/search.svg')] backgroun bg-no-repeat bg-size-6 pl-10 pr-3 focus:outline-none`} clas type="text" placeholder='search location'/>

            <button className='bg-[#3C47E9] h-11 w-1/4 ml-2 text-white'>
                Search
            </button>
        </div>
    </div>
)
        
    )
}
