import React from 'react'
import Image from 'next/image'
import { ValueItem } from '@/utils/types'
import Container from '@/components/ui-components/container';
import Text from '@/components/ui-components/text';

type Props = {
    values: ValueItem[];
}

const CoreValues = ({ values }: Props) => {
    return (
        <Container className='relative mb-12'>
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className='absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-[#f1f1f1] pointer-events-none'
                aria-hidden='true'
            ></div>
            <div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2'></div>

            <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
                <div className='py-12 md:py-20'>
                    {/* Section header */}
                    <div className='mx-auto text-center pb-12 md:pb-20 flex flex-col items-center'>
                        <Text variant='title4' color='black'>
                            Our Values
                        </Text>
                        <Text variant='title5' color='brown' additional='w-full max-w-[440px] mt-4 !text-khakhi'>
                            We hold these values dearly and believe they set us
                            apart from the rest.
                        </Text>
                    </div>

                    {/* Items */}
                    <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch md:max-w-2xl lg:max-w-none'>
                        {values?.map((value, index) => (
                            <div
                                key={index}
                                className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full'
                            >
                                <Image
                                    alt={value.title}
                                    src={value.icon.url}
                                    className='rounded-full max-w-full mx-auto h-[80px]'
                                    width={80}
                                    height={80}
                                />
                                <Text variant='title5' color='brown' additional='mt-2'>
                                    {value.title}
                                </Text>
                                <Text variant='body2' additional='mt-1 text-center !text-[16px]'>
                                    {value.description}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CoreValues