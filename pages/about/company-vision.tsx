import Container from '@/components/ui-components/container';
import Text from '@/components/ui-components/text';
import { Vision } from '@/utils/types';
import Image from 'next/image';
import React from 'react';

type Props = {
    vision: Vision
}

const CompanyVision = ({ vision }: Props) => {
    return (
        <Container className='relative !my-12 overflow-hidden'>
            <div className='flex flex-wrap items-center justify-center -m-8'>
                <div className='w-full md:w-1/2 p-8'>
                    <div className='relative z-10 md:max-w-md'>
                        <Text variant='title4' color='black'>
                            {vision?.title}
                        </Text>
                        <Text variant='title5' color='brown' additional='w-full max-w-[440px] mt-4 !text-khakhi'>
                            {vision?.description}
                        </Text>
                        <ul className='mt-8'>
                            {vision?.goals.map((goal, index) => (
                                <li key={index} className='inline-flex mb-3.5'>
                                    <img
                                        className='mr-3.5 h-6 w-6'
                                        src='/assets/icons/checked.svg'
                                        alt=''
                                    />
                                    <span className='text-gray-800'>
                                        {goal}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full md:w-1/2 p-8'>
                    <Image
                        className='mx-auto object-cover w-[400px] h-[400px] rounded-2xl'
                        src={vision?.image.url}
                        alt=''
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </Container>
    );
};

export default CompanyVision;