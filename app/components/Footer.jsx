import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/app/assets/logo.png'

function Footer() {
    return (
        <footer>
            <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                {/* Top area: Blocks */}
                <div className='grid grid-cols-12 tab:grid-cols-6 sm:grid-cols-6 xs:grid-cols-6 gap-8 py-8 tab:py-12 border-t border-gray-200'>
                    {/* 1st block */}
                    <div className='sm:col-span-12 tab:col-span-3 lg:col-span-3 xs:col-span-6'>
                        <div className='mb-2 flex items-center justify-center tab:justify-start'>
                            {/* Logo */}
                            <Link href='/' aria-label='Cruip'>
                                <Image
                                    src={Logo}
                                    alt='Procad Contruction (PVT) (LTD)'
                                    height={120}
                                    width={240}
                                    className='h-20 inline-block align-middle justify-center hover:opacity-80'
                                />
                            </Link>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className='sm:col-span-6 tab:col-span-3 lg:col-span-3 xs:col-span-3'>
                        <h6 className='text-gray-800 font-medium mb-2'>
                            Services
                        </h6>
                        <ul className='text-sm'>
                            <li className='mb-2'>
                                <Link
                                    href='#'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Construction Works
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link
                                    href='#'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Renovations
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link
                                    href='#'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Civils
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link
                                    href='#'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Consultancy Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className='sm:col-span-6 tab:col-span-3 lg:col-span-3 xs:col-span-3'>
                        <h6 className='text-gray-800 font-medium mb-2'>
                            Company
                        </h6>
                        <ul className='text-sm'>
                            <li className='mb-2'>
                                <Link
                                    href='/'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link
                                    href='/about'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    About us
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link
                                    href='/about'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Management
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link
                                    href='/contact'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className='sm:col-span-6 tab:col-span-3 lg:col-span-3 xs:col-span-6'>
                        <h6 className='text-gray-800 font-medium mb-2'>
                            Subscribe
                        </h6>
                        <p className='text-sm text-gray-600 mb-4'>
                            Get the latest news and articles to your inbox every
                            month.
                        </p>
                        <form>
                            <div className='flex flex-wrap mb-4'>
                                <div className='w-full'>
                                    <label
                                        className='block text-sm sr-only'
                                        htmlFor='newsletter'
                                    >
                                        Email
                                    </label>
                                    <div className='relative flex items-center max-w-xs'>
                                        <input
                                            id='newsletter'
                                            type='email'
                                            className='form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm'
                                            placeholder='Your email'
                                            required
                                        />
                                        <button
                                            type='submit'
                                            className='absolute inset-0 left-auto'
                                            aria-label='Subscribe'
                                        >
                                            <span
                                                className='absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300'
                                                aria-hidden='true'
                                            ></span>
                                            <svg
                                                className='w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0'
                                                viewBox='0 0 12 12'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                                                    fillRule='nonzero'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Success message */}
                                    {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom area */}
                <div className='flex items-center justify-between py-4 tab:py-8 border-t border-gray-200'>
                    {/* Social links */}
                    <ul className='flex mb-4 order-1 tab:ml-4 tab:mb-0 justify-center'>
                        <li>
                            <Link
                                href='https://twitter.com/procad_eng'
                                className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                                aria-label='Twitter'
                            >
                                <svg
                                    className='w-8 h-8 fill-current'
                                    viewBox='0 0 32 32'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z' />
                                </svg>
                            </Link>
                        </li>
                        <li className='ml-4'>
                            <Link
                                href='https://www.facebook.com/BlueDiamondEngineering/'
                                className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                                aria-label='Facebook'
                            >
                                <svg
                                    className='w-8 h-8 fill-current'
                                    viewBox='0 0 32 32'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z' />
                                </svg>
                            </Link>
                        </li>
                    </ul>

                    {/* Copyrights note */}
                    <div className='text-sm text-gray-600 mr-4 text-center'>
                        <a
                            className='text-blue-600 hover:underline'
                            href='https://munashe.co.zw/'
                        >
                            SiDesigned
                        </a>{' '}
                        © {new Date().getFullYear()} Procad Construction (PVT)
                        (LTD) . All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer