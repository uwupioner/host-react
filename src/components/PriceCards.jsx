import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import GreenBtn from './GreenBtn'

const PriceCards = ({priceCategory, dollar}) => {
  return (
    <div className='bg-white text-slate-900 m-4 rounded-xl overflow-hidden shadow-2xl'>
    <div className='text-center bg-darkColor text-white py-4 uppercase'>
        <p>{priceCategory}</p>
    </div>
    <div className='p-4'>
        <p className='text-6xl font-bold py-4 flex'>{`$${dollar}`} <span className='text-xl text-darkColor flex flex-col justify-end'>/mo</span></p>
    </div>
    <p className='text-2xl px-4 py-8 text-slate-500'>Tell nevermore what off straight yet and was, thy each my this my i burned the this, i door i entreating that, name the caught and sad purple home never,.</p>
<div className='text-2xl'>
    <div className='px-4 '>
        <p className='flex items-center py-3 text-lg'>
            <FaPlusCircle className='w-5 mr-3 text-lightColor'/> Feature One
        </p>
        <p className='flex items-center py-3 text-lg'>
            <FaPlusCircle className='w-5 mr-3 text-lightColor'/> Feature One
        </p>
        <p className='flex items-center py-3 text-lg'>
            <FaPlusCircle className='w-5 mr-3 text-lightColor'/> Feature One
        </p>
        <p className='flex items-center py-3 text-lg'>
            <FaPlusCircle className='w-5 mr-3 text-lightColor'/> Feature One
        </p>
        <p className='flex items-center py-3 text-lg'>
            <FaPlusCircle className='w-5 mr-3 text-lightColor'/> Feature One
        </p>
    </div>
    <GreenBtn title="Get Started" className="w-full py-4 mt-14 rounded-none hover:border-none"/>
</div>
</div>
  )
}

export default PriceCards