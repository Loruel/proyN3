import React from 'react'
import ClimaPrincipal from './components/climaPrincipal/climaPrincipal'
import ClimaTomorrows from './components/climaTomorrows/climaTomorrows'
import DatosPrecisos from './components/datosPrecisos/datosPrecisos'
import Footer from './components/footer/footer'
import Modal from './components/modal/modal'

export default function App() {
  return (
    <div className='w-full h-full bg-[#100E1D] lg:flex'>

      <div className='lg:w-3/12'>
        <ClimaPrincipal />

        <Modal/>
      </div>

      <div className='lg:w-full lg:flex lg:flex-col'>
        <ClimaTomorrows />

        <DatosPrecisos />

        <Footer />

      </div>

    </div>

  )
}
