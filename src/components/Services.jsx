import React from 'react'
import {FaChevronCircleRight} from 'react-icons/fa'

const Services = () => {

    const services = [
        {
            id: 1,
            title: "one",
            subtitle: "Nearly of of farther still truly whose of craven, gave."
        },        {
            id: 2,
            title: "two",
            subtitle: "Nearly of of farther still truly whose of craven, gave."
        },        {
            id: 3,
            title: "three",
            subtitle: "Nearly of of farther still truly whose of craven, gave."
        },        {
            id: 4,
            title: "four",
            subtitle: "Nearly of of farther still truly whose of craven, gave."
        },
    ]

  return (
    <div name="services" className='w-full h-fit md:h-screen bg-slate-300'>
        <div className='flex flex-col items-center justify-center max-w-screen-xl h-full mx-auto px-3 py-12'>
            <h2 className='text-5xl font-bold text-center'>Services</h2>
            <p className='text-xl py-8 text-gray-600 text-center'>Hesitating denser lies for lonely did wondering. Lamplight from sainted faintly the thy all soul rapping, above and all nothing.</p>
            <div className='grid sm:grid-cols-2 gap-4 pt-4'>

                    {services.map(({id, title, subtitle}) => (
                                        <div
                                        key={id}
                                        className='flex items-center p-4 bg-gray-900 text-white rounded-md'>
                                        <div>
                                            <FaChevronCircleRight size={20} className="mb-9 mr-4 text-lightColor"/>
                                        </div>
                                        <div>
                                            <h3 className='font-bold text-lg text-lightColor pt-2 pb-4 capitalize'>
                                                {title}
                                            </h3>
                                            <p className='text-lg'>{subtitle}</p>
                                        </div>
                                    </div>
                    ))}
                
            </div>
        </div>
    </div>
  )
}

export default Services