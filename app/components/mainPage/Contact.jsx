import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import handover from '@/app/assets/handover.jpg'

const Contact = () => {
    return (
        <div className='py-16 lg:py-20 w-full px-24 xs:px-4'>
            <div className='flex flex-col items-center justify-between w-full mb-10 gap-4 lg:flex-row-reverse'>
                <div className='mb-16 lg:mb-0 lg:max-w-lg'>
                    <div className='max-w-xl mb-6'>
                        <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg'>
                            Let's make your
                        </h2>
                        <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6'>
                            dream house a reality
                        </h2>
                        <p className='text-gray-700 text-base tab:text-lg'>
                            The flexibility of our solutions enables us to
                            tailor-make every case to suit the specific needs
                            while priced competitively. Our highly competent
                            technical team ensures that the product is just as
                            it was envisioned to be.
                        </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <Link href='/contact'>
                            <button
                                type='submit'
                                className='inline-flex items-center justify-center rounded-2xl bg-[#e29b64] hover:bg-[#0b341c] active:bg-[#f2fcf4] py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark'
                            >
                                Reach Out to Us Today
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-center lg:w-1/2'>
                    <div className='w-5/5'>
                        <Image
                            className='object-cover rounded-[35px]'
                            src={handover}
                            alt='house handover'
                            width={400}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact