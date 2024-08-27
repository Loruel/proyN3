import React from 'react'
import { useClima } from '../../context/climaContext'

export default function BotonesTomorrow() {
    const { buttonCF, setButtonCF } = useClima()

    const presionarButton = (type) => {
        setButtonCF(type)
    }

    return (
        <div className='flex justify-end mt-5 mr-8'>
            <button className={`bg-[#6E707A] w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold mr-2 lg:w-7 lg:h-7 lg:text-sm ${buttonCF === 'C' ? 'bg-[#E7E7EB]' : 'bg-[#6E707A]'}`} onClick={() => presionarButton('C')}>
                <p>
                    °C
                </p>
            </button>
            <button className={`bg-[#6E707A] w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold lg:w-7 lg:h-7 lg:text-sm ${buttonCF === 'F' ? 'bg-[#E7E7EB]' : 'bg-[#6E707A]'}`} onClick={() => presionarButton('F')}>
                <p>
                    °F
                </p>
            </button>
        </div>
    )
}
