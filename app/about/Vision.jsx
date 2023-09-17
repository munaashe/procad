import React from 'react'
import Image from 'next/image'

import quality from '@/app/assets/quality.png'
import safety from '@/app/assets/safety.png'
import relations from '@/app/assets/relations.png'
import integrity from '@/app/assets/integrity.png'
import agile from '@/app/assets/agile.png'
import innovation from '@/app/assets/innovation.png'

function Vision() {
    return (
        <section className='relative'>
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className='absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-[#f1f1f1] pointer-events-none'
                aria-hidden='true'
            ></div>
            <div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2'></div>

            <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
                <div className='py-12 md:py-20'>
                    {/* Section header */}
                    <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
                        <h2 className='text-4xl font-semibold mb-2'>
                            Our Values
                        </h2>
                        <p className='text-xl text-gray-600'>
                            We hold these values dearly and believe they set us
                            apart from the rest.
                        </p>
                    </div>

                    {/* Items */}
                    <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none'>
                        {/* 1st item */}
                        <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl'>
                            <Image
                                alt='quality'
                                src={quality}
                                className='rounded-full max-w-full mx-auto'
                                height={80}
                                weight={80}
                            />
                            <h4 className='text-xl text-[#7f2d00] font-bold leading-snug tracking-tight mb-1'>
                                Quality
                            </h4>
                            <p className='text-gray-600 text-center'>
                                Our work meets the most rigorous quality
                                standards, but yet is competitively priced.
                            </p>
                        </div>

                        {/* 2nd item */}
                        <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl'>
                            <Image
                                weight={80}
                                alt='integrity'
                                src={integrity}
                                className='rounded-full max-w-full mx-auto'
                                height={80}
                            />
                            <h4 className='text-xl text-[#7f2d00] font-bold leading-snug tracking-tight mb-1'>
                                Integrity
                            </h4>
                            <p className='text-gray-600 text-center'>
                                We have a consistent and uncompromising
                                adherence to principles and values
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl'>
                            <Image
                                weight={80}
                                alt='safety'
                                src={safety}
                                className='rounded-full max-w-full mx-auto'
                                height={80}
                            />
                            <h4 className='text-xl text-[#7f2d00] font-bold leading-snug tracking-tight mb-1'>
                                Safety
                            </h4>
                            <p className='text-gray-600 text-center'>
                                We strive to create environments free from
                                injury and any type of harm.
                            </p>
                        </div>

                        {/* 4th item */}
                        <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl'>
                            <Image
                                weight={80}
                                alt='agile'
                                src={agile}
                                className='rounded-full max-w-full mx-auto'
                                height={80}
                            />
                            <h4 className='text-xl text-[#7f2d00] font-bold leading-snug tracking-tight mb-1'>
                                Agile
                            </h4>
                            <p className='text-gray-600 text-center'>
                                We provide high quality, efficient solutions at
                                an unbeatable time.
                            </p>
                        </div>

                        {/* 5th item */}
                        <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl'>
                            <Image
                                weight={80}
                                alt='relations'
                                src={relations}
                                className='rounded-full max-w-full mx-auto'
                                height={80}
                            />
                            <h4 className='text-xl text-[#7f2d00] font-bold leading-snug tracking-tight mb-1'>
                                Relationships
                            </h4>
                            <p className='text-gray-600 text-center'>
                                We strive to build long-lasting relations that
                                will stand the test of time.
                            </p>
                        </div>

                        {/* 6th item */}
                        <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl'>
                            <Image
                                weight={80}
                                alt='innovation'
                                src={innovation}
                                className='rounded-full max-w-full mx-auto'
                                height={80}
                            />
                            <h4 className='text-xl text-[#7f2d00] font-bold leading-snug tracking-tight mb-1'>
                                Innovation
                            </h4>
                            <p className='text-gray-600 text-center'>
                                We believe in finding better ways of doing
                                things. We are open to new ideas and tech.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision