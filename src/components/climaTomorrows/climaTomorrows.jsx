import React from 'react'
import BotonesTomorrow from './botonesTomorrow'
import TomorrowCards from './tomorrowCards'
import { useClima } from '../../context/climaContext'

export default function ClimaTomorrows() {
    const { pronostico } = useClima()

    const listPtonostico = Array.isArray(pronostico.list)
        ? pronostico.list.filter(item => item.dt_txt.includes("12:00:00"))
        : [];

    return (
        <>
            <BotonesTomorrow />

            <div className='lg:flex lg:justify-center'>

                <div className='m-9 grid grid-cols-2 mb-10 gap-x-6 gap-y-4 lg:flex lg:w-5/6 lg:gap-x-8'>

                {listPtonostico.map((data, i) =>
                <TomorrowCards key={i} data={data} />
            )}



                </div>

            </div>

        </>
    )
}
