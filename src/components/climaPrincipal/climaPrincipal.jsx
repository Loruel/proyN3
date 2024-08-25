import React from 'react'
import BotonesClima from './botonesClima'
import TemplateClima from './templateClima'
import DataClima from './dataClima'

export default function ClimaPrincipal() {
    return (
        <div className='w-full h-full bg-[#1E213A]'>

            <BotonesClima />

            <TemplateClima />

            <DataClima />

        </div>
    )
}
