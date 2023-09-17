'use client'

import React, { useState } from 'react'

const Services = () => {
    const [hidden, setHidden] = useState(true)
    const [hidden1, setHidden1] = useState(true)
    const [hidden2, setHidden2] = useState(true)
    const [hidden3, setHidden3] = useState(true)
    return (
        <section className='relative z-20 overflow-hidden pt-16 pb-4 lg:pt-[120px] lg:pb-[90px]'>
            <div className='container'>
                <div className='-mx-4 flex flex-wrap'>
                    <div className='w-full px-4'>
                        <div className='mx-auto mb-[60px] max-w-[620px] text-center lg:mb-8'>
                            <h2 className='mb-4 text-4xl font-semibold'>
                                Our Services
                            </h2>
                            <p className='text-lg leading-relaxed m-4 text-gray-600'>
                                We strive to be the best in everything that we
                                do.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='-mx-4 flex flex-wrap'>
                    <div className='w-full px-8  lg:pl-16 lg:w-1/2'>
                        <div
                            className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                            data-wow-delay='.1s
            '
                        >
                            <button
                                className='faq-btn flex w-full items-center text-left'
                                onClick={() => setHidden(!hidden)}
                            >
                                <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'>
                                    <svg
                                        width='17'
                                        height='10'
                                        viewBox='0 0 17 10'
                                        className='icon fill-current'
                                    >
                                        <path
                                            d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                                            fill='#e29b64'
                                            stroke='#e29b64'
                                        />
                                    </svg>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-base font-semibold text-black sm:text-lg'>
                                        Building Construction
                                    </h4>
                                </div>
                            </button>
                            <div className='faq-content pl-[62px]'>
                                {!hidden ? (
                                    <p className='py-3 text-base leading-relaxed text-body-color'>
                                        Construction of steel, concrete, wood,
                                        glass and masonry structures that serve
                                        the socio-economic, religious and
                                        academic needs of people.
                                    </p>
                                ) : null}
                            </div>
                        </div>
                        <div
                            className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                            data-wow-delay='.15s
            '
                        >
                            <button
                                className='faq-btn flex w-full items-center text-left'
                                onClick={() => setHidden1(!hidden1)}
                            >
                                <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'>
                                    <svg
                                        width='17'
                                        height='10'
                                        viewBox='0 0 17 10'
                                        className='icon fill-current'
                                    >
                                        <path
                                            d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                                            fill='#e29b64'
                                            stroke='#e29b64'
                                        />
                                    </svg>
                                </div>

                                <div className='w-full'>
                                    <h4 className='text-base font-semibold text-black sm:text-lg'>
                                        Concrete & Steelworks
                                    </h4>
                                </div>
                            </button>

                            <div className='faq-content  pl-[62px]'>
                                {!hidden1 ? (
                                    <p className='py-3 text-base leading-relaxed text-body-color'>
                                        Design and construction of structural
                                        steelworks as well as reinforced
                                        structural concrete. Suppliers of
                                        pre-stressed concrete.
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className='w-full px-8 lg:pl-16 lg:w-1/2'>
                        <div
                            className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                            data-wow-delay='.1s
            '
                        >
                            <button
                                className='faq-btn flex w-full items-center text-left'
                                onClick={() => setHidden2(!hidden2)}
                            >
                                <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'>
                                    <svg
                                        width='17'
                                        height='10'
                                        viewBox='0 0 17 10'
                                        className='icon fill-current'
                                    >
                                        <path
                                            d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                                            fill='#e29b64'
                                            stroke='#e29b64'
                                        />
                                    </svg>
                                </div>

                                <div className='w-full'>
                                    <h4 className='text-base font-semibold text-black sm:text-lg'>
                                        Renovations & Demolitions
                                    </h4>
                                </div>
                            </button>
                            <div className='faq-content pl-[62px]'>
                                {!hidden2 ? (
                                    <p className='py-3 text-base leading-relaxed text-body-color'>
                                        Demolitions of old structures and
                                        renovations, painting, tiling, roofing,
                                        electricals, solar installations, air
                                        conditioning and general landscaping.
                                    </p>
                                ) : null}
                            </div>
                        </div>
                        <div
                            className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                            data-wow-delay='.15s
            '
                        >
                            <button
                                className='faq-btn flex w-full items-center text-left'
                                onClick={() => setHidden3(!hidden3)}
                            >
                                <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'>
                                    <svg
                                        width='17'
                                        height='10'
                                        viewBox='0 0 17 10'
                                        className='icon fill-current'
                                    >
                                        <path
                                            d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                                            fill='#e29b64'
                                            stroke='#e29b64'
                                        />
                                    </svg>
                                </div>

                                <div className='w-full'>
                                    <h4 className='text-base font-semibold text-black sm:text-lg'>
                                        Civils & Earthworks
                                    </h4>
                                </div>
                            </button>
                            <div className='faq-content  pl-[62px]'>
                                {!hidden3 ? (
                                    <p className='py-3 text-base leading-relaxed text-body-color'>
                                        Design and construction of rigid and
                                        flexible pavements, drains, water
                                        reticulation and sewer systems, canals,
                                        excavations. Also irrigation system
                                        design and developments
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 right-0 z-[-1]'>
                <svg
                    width='1440'
                    height='886'
                    viewBox='0 0 1440 886'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        opacity='0.5'
                        d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
                        fill='url(#paint0_linear)'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear'
                            x1='1308.65'
                            y1='1142.58'
                            x2='602.827'
                            y2='-418.681'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop stopColor='#f6e4e0' stopOpacity='1' />
                            <stop
                                offset='1'
                                stopColor='#e8f3f5'
                                stopOpacity='0'
                            />
                            <stop
                                offset='1'
                                stopColor='#F5F2FD'
                                stopOpacity='0.096144'
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default Services