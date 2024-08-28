import React from 'react'
import { useClima } from '../../context/climaContext'

export default function Humidity() {
  const { clima } = useClima()

  const humidityPorcentage = clima.main && clima.main.humidity

  return (
    <div className='w-full h-full bg-[#1E213A] text-[#E7E7EB] mt-6 flex flex-col items-center'>
      <p className='mt-5'>
        Humidity
      </p>
      <div className='flex items-center mt-4'>
        <h2 className='text-6xl font-bold'>
          {humidityPorcentage}
        </h2>
        <h3 className='text-3xl'>
          %
        </h3>
      </div>

      <div className='flex justify-center mt-5 mb-5 lg:mt-10 w-11/12 lg:mb-0'>

        <div className='w-5/6'>

          <div className='flex'>
            <p className='w-1/3 text-[#E7E7EB] text-xs flex justify-start'>
              0
            </p>
            <p className='w-1/3 text-[#E7E7EB] text-xs flex justify-center'>
              50
            </p>
            <p className='w-1/3 text-[#E7E7EB] text-xs flex justify-end'>
              100
            </p>
          </div>

          <div className='relative mt-1'>
            <div className='bg-[#E7E7EB] w-full h-3 rounded-2xl'></div>
            <div className='bg-[#FFEC65] h-3 rounded-2xl absolute bottom-0 left-0' style={{ width: `${humidityPorcentage}%` }}></div>
          </div>

          <div className='w-full text-xs flex justify-end mt-1'>
            <p>%</p>
          </div>

        </div>

      </div>

    </div>
  )
}
