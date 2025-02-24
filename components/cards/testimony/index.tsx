import { CardDetails } from '@/utils/types'
import React from 'react'
import Image from 'next/image'
import Text from '@/components/ui-components/text'

type Props = {
    testimony: CardDetails;
}

const TestimonyCard = ({ testimony }: Props) => {
    return (
        <div className='w-full flex flex-col items-center justify-center text-center group cursor-pointer'>
            <Image
                src={testimony?.photograph?.url}
                alt=''
                width={100}
                height={100}
                className='h-[240px] w-[240px] object-cover rounded-full'
            />
            <Text variant='title5' additional='mt-4'>
                {testimony.name}
            </Text>
            <Text
                variant='body2'
                additional='mx-4 mt-4 group-hover:underline transition-all duration-300 lg:h-[124px]'
            >
                "{testimony.text}"
            </Text>
        </div>
    )
}

export default TestimonyCard