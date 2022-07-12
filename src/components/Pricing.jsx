import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import GreenBtn from './GreenBtn'
import PriceCards from './PriceCards'

const Pricing = () => {
  return (
    <div name="pricing" className='w-full h-fit text-white bg-gray-900'>
        <div className='flex flex-col items-center justify-center max-w-screen-xl h-full mx-auto px-3 py-12'>
            <div className='px-4 py-12'>
                <h2 className='text-5xl font-bold text-center'>Pricing</h2>
                <p className='text-xl py-8 text-gray-500 text-center'>Sinking and and whose with the bore sitting we. I only surcease whispered that of with and, here seeing more lenore tossed hopes tapping said this raven, still dared lenore.</p>
            </div>
            <div className='grid md:grid-cols-2'>
                <PriceCards priceCategory="Hobby" dollar="41"/>
                <PriceCards priceCategory="Professional" dollar="410"/>
            </div>
        </div>
    </div>
  )
}

export default Pricing