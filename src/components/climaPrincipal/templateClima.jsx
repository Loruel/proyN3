import React from 'react'
import { useClima } from '../../context/climaContext'

export default function TemplateClima() {
    const { clima, getImage } = useClima()

    const weatherIcon = clima.weather ? getImage(clima.weather[0].icon) : '/01d.png'


    return (
        <div className='h-96 flex justify-center items-center overflow-hidden lg:h-96 '>
            <figure className='relative'>
                <img className='opacity-10 w-full h-auto scale-150' src={"Cloud-background.png"} alt="" />
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 lg:w-3/6'
                    src={weatherIcon} alt="" />
            </figure>
        </div>
    )
}
