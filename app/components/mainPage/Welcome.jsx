import React from 'react'
import Image from 'next/image'
import meeting from '@/app/assets/meeting.jpg'
const Welcome = () => {
    return (
        <>
            <section className='pb-20 bg-[#f1f1f1] -mt-24 xs:mt-0'>
                <div className='container mx-auto px-4'>

                    <div className='flex flex-wrap items-center mt-8'>
                        <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
                            <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#7f2d00]'>
                                <i className='fas fa-user-friends text-xl'></i>
                            </div>
                            <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                                Working with us is a pleasure
                            </h3>
                            <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
                                Our top priority is to provide the best quality
                                with guaranteed perfection. We oversee each
                                project from start to the end and adhere to
                                safety standards and regulations.
                            </p>
                            <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>
                                Through the vastness of our skilled and dynamic
                                workforce which has technical and management
                                expertise, we have high capacity to cope with
                                large projects with regards to structural and
                                civil construction
                            </p>
                        </div>

                        <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
                            <div className='relative flex flex-col min-w-0 break-words bg-[#7f2d00] w-full mb-6 shadow-lg rounded-lg bg-[#7e2d00]'>
                                <Image
                                    alt='Kadge \Construction Pvt Ltd'
                                    src={meeting}
                                    className='w-full align-middle rounded-t-lg'
                                    width={400}
                                    height={400}
                                />
                                <blockquote className='relative p-8 mb-4'>
                                    <svg
                                        preserveAspectRatio='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 583 95'
                                        className='absolute left-0 w-full block'
                                        style={{
                                            height: '95px',
                                            top: '-94px',
                                        }}
                                    >
                                        <polygon
                                            points='-30,95 583,95 583,65'
                                            className='text-[#7f2d00] fill-current'
                                        ></polygon>
                                    </svg>
                                    <h4 className='text-xl font-bold text-white'>
                                        Our Quality Pledge
                                    </h4>
                                    <p className='text-md font-light mt-2 text-white'>
                                        It is our intent to continually improve
                                        our performance in product quality,
                                        on-schedule delivery, client
                                        satisfaction and we will always strive
                                        to be excellent in everything we do.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div
                        className='left-0 right-0 w-full mt-[11px] absolute pointer-events-none overflow-hidden'
                        style={{ height: '70px' }}
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
                                className='text-[#fff] fill-current'
                                points='2560 0 2560 100 0 100'
                            ></polygon>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome