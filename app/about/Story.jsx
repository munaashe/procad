import React from 'react'
import Image from 'next/image'
import aboutImage from '@/app/assets/about-image.jpg'
import start from '@/app/assets/start.png'
import current from '@/app/assets/current.png'
import future from '@/app/assets/future.png'

const Story = () => {
    return (
        <main>
            <section className='relative py-20'>
                <div className='container mx-auto px-4'>
                    <div className='items-center flex flex-wrap'>
                        <div className='w-full md:w-4/12 ml-auto mr-auto px-4 p-4'>
                            <Image
                                alt='story'
                                className='max-w-full max-h-[400px] rounded-lg shadow-lg '
                                src={aboutImage}
                                height={400}
                                width={400}
                            />
                        </div>
                        <div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
                            <div className='md:pr-12'>
                                <div className='text-[#7f2d00] p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#7f2d00]'>
                                    <i className='fas fa-rocket text-xl'></i>
                                </div>
                                <h3 className='text-3xl font-semibold'>
                                    Our Story
                                </h3>
                                <p className='mt-4 text-lg leading-relaxed text-gray-600'>
                                    Since conception, we have been geared
                                    towards becoming the leading blue-chip
                                    construction services provider in the SADC
                                    region. Our strategy to achieve this feat
                                    comprises of three pillars:
                                </p>
                                <ul className='list-none mt-6'>
                                    <li className='py-2'>
                                        <div className='flex items-center'>
                                            <div>
                                                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#7f2d00] bg-[#7f2d00] mr-3'>
                                                    <i className='fas fa-fingerprint'></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className='text-gray-600'>
                                                    Efficiency & Competence
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='py-2'>
                                        <div className='flex items-center'>
                                            <div>
                                                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#7f2d00] bg-[#7f2d00] mr-3'>
                                                    <i className='fab fa-html5'></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className='text-gray-600'>
                                                    Innovation & Research
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='py-2'>
                                        <div className='flex items-center'>
                                            <div>
                                                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#7f2d00] bg-[#7f2d00] mr-3'>
                                                    <i className='far fa-paper-plane'></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className='text-gray-600'>
                                                    Honesty & Integrity
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pb-20 relative block bg-[#7f2d00]'>
                <div
                    className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
                    style={{ height: '80px' }}
                >
                    <svg
                        className='absolute bottom-0 overflow-hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        preserveAspectRatio='none'
                        version='1.1'
                        viewBox='0 0 2560 100'
                        x='0'
                        y='0'
                    >
                        <polygon
                            className='text-[#7f2d00] fill-current'
                            points='2560 0 2560 100 0 100'
                        ></polygon>
                    </svg>
                </div>

                <div className='container mx-auto px-4 lg:pt-24'>
                    <div className='flex flex-wrap text-center justify-center'>
                        <div className='w-full lg:w-6/12 px-4'>
                            <h2 className='text-4xl font-semibold text-white'>
                                Our Timeline
                            </h2>
                            <p className='text-lg leading-relaxed mt-4 mb-4 text-white'>
                                Through a series of small, seemingly
                                insignificant wins, we are proud of the
                                trajectory that we have taken and firmly believe
                                that more is still to come. One small victory at
                                a time!
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-12 justify-center'>
                        <div className='w-full lg:w-3/12 px-4 text-center'>
                            <div className=' inline-flex items-center justify-center'>
                                <Image
                                    alt='beginnings'
                                    src={start}
                                    className=' max-w-full mx-auto'
                                    height={50}
                                    width={50}
                                />
                            </div>
                            <h6 className='text-xl mt-5 font-semibold text-white'>
                                Beginnings
                            </h6>
                            <p className='mt-2 mb-4 text-white'>
                                In 2021 we opened our doors focusing on
                                renovations, building construction and design
                                works.
                            </p>
                        </div>
                        <div className='w-full lg:w-3/12 px-4 text-center'>
                            <div className=' inline-flex items-center justify-center'>
                                <Image
                                    alt='now'
                                    src={current}
                                    className=' max-w-full mx-auto'
                                    height={50}
                                    width={50}
                                />
                            </div>
                            <h5 className='text-xl mt-5 font-semibold text-white'>
                                The Present
                            </h5>
                            <p className='mt-2 mb-4 text-white'>
                                We added concrete works, civil works, structural
                                steel and excavation works.
                            </p>
                        </div>
                        <div className='w-full lg:w-3/12 px-4 text-center'>
                            <div className=' inline-flex items-center justify-center'>
                                <Image
                                    alt='the destination'
                                    src={future}
                                    className=' max-w-full mx-auto'
                                    height={50}
                                    width={50}
                                />
                            </div>
                            <h5 className='text-xl mt-5 font-semibold text-white'>
                                The Destination
                            </h5>
                            <p className='mt-2 mb-4 text-white'>
                                Our aspiration is to emerge as the foremost leaders in civil and
                                structural engineering construction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Story