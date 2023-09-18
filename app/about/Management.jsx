import React from 'react'
import Image from 'next/image'
import patsimo from '@/app/assets/patsimo.png'
import anesu from '@/app/assets/anesu.png'
import kudzi from '@/app/assets/kudzi.png'
import ngoni from '@/app/assets/ngoni.png'
import steve from '@/app/assets/steve.png'

const directors = [
    {
        name: 'Eng. P. Ncube',
        position: 'Commercial Director',
        linkedIn: 'https://www.linkedin.com/in/patsimo-ncube-02729412a/',
        whatsapp: '263785874486',
        image: patsimo
    },
    {
        name: 'Eng. K. Nyengerai',
        position: 'Financial Director',
        linkedIn: 'https://www.linkedin.com/in/kudzai-esther-nyengerai-661236138/',
        whatsapp: '263776013163',
        image: kudzi
    },
    {
        name: 'Eng. A. Munaki',
        position: 'Operational Director',
        linkedIn: 'https://www.linkedin.com/in/anesu-munaki-5077b552/',
        whatsapp: '263774675544',
        image: anesu
    },
    {
        name: 'Eng. S. Kamupurusa',
        position: 'Commercial Director',
        linkedIn: 'https://www.linkedin.com/in/stephen-kampulusa-731b3991/',
        whatsapp: '263776306750',
        image: steve
    },
    {
        name: 'Eng. N. Masisimani',
        position: 'Operations Director',
        linkedIn: 'https://www.linkedin.com/in/ngonidzashe-masisimani-11b58b131/',
        whatsapp: '263776013163',
        image: ngoni
    },
]

const Management = () => {
    return (
        <section className='pt-20 pb-[60px]'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap justify-center text-center mb-8'>
                    <div className='w-full lg:w-6/12 px-4'>
                        <h2 className='text-4xl font-semibold'>
                            Our Management
                        </h2>
                        <p className='text-lg leading-relaxed m-4 text-gray-600'>
                            We boast of a young, vibrant leadership team that is
                            daring to handle construction projects of any type
                            and magnitude.
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-evenly'>
                    {directors.map((director) => (
                        <div className='w-full md:w-6/12 lg:w-4/12 lg:mb-0 px-4'>
                            <div className='container mx-auto px-4 mt-16'>
                                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg '>
                                    <div className='px-6 flex flex-col'>
                                        <div className='flex flex-wrap justify-center'>
                                            <div className='w-full px-4 order-2 flex justify-center'>
                                                <div className='flex justify-center h-[260px]'>
                                                    <Image
                                                        alt={director.name}
                                                        src={director.image}
                                                        className='shadow-xl rounded-full min-h-[250px] min-w-[250px] w-full align-middle border-none'
                                                        width={250}
                                                        height={250}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-center mt-16'>
                                            <h3 className='text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2'>
                                                {director.name}
                                            </h3>
                                            <div className='text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase'>
                                                <i className='fas fa-map-marker-alt mr-2 text-lg text-gray-500'></i>{' '}
                                                {director.position}
                                            </div>
                                            <div className='mt-6 flex justify-evenly h-10 mb-4'>
                                                <a
                                                    href={director.linkedIn}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                >
                                                    <button
                                                        className='text-[#0077b5] w-8 hover:opacity-[80%] h-8'
                                                        type='button'
                                                    >
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 448 512'
                                                        >
                                                            <path
                                                                fill='currentColor'
                                                                d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
                                                            />
                                                        </svg>
                                                    </button>
                                                </a>
                                                <a
                                                    href={`https://wa.me/${director.whatsapp}`}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                >
                                                    <button
                                                        className='text-[#128c7e] w-8 hover:opacity-[80%] h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                                                        type='button'
                                                    >
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 448 512'
                                                        >
                                                            <path
                                                                fill='currentColor'
                                                                d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
                                                            />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Management