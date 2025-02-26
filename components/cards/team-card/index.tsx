import React, { useState } from 'react';
import { Management } from '@/utils/types';
import Image from 'next/image';
import Text from '@/components/ui-components/text';
import Container from '@/components/ui-components/container';
type Props = {
    details: Management;
};

const TeamCard = ({ details }: Props) => {
    const [showBio, setShowBio] = useState(false);

    return (
        <div className={`flex flex-col items-center text-center w-full max-w-sm break-words bg-white w-full mb-6 shadow-xl pt-8 ${showBio ? "min-h-[500px]" : "h-[440px]"}`}>
            {/* Profile Image */}
            <div className="rounded-full overflow-hidden">
                <Image
                    src={details.image.url}
                    alt={details.image.title}
                    width={128}
                    height={128}
                    className="object-cover h-[280px] w-[280px]"
                />
            </div>

            {/* Info Card */}
            <Container className="w-full p-4">
                <div className='w-full flex items-center justify-center'>
                    <div className='flex-1 text-left'>
                        <Text variant='title5' additional='!text-[20px]'>
                            {details.name}
                        </Text>
                        <Text variant='label1' additional='!text-[14px]'>
                            {details.headline}
                        </Text>

                    </div>
                    <div className='flex flex-col items-end mt-4'>
                        <div className="flex gap-3">
                            <a href={details.linkedin} target="_blank" rel="noopener noreferrer">
                                <img
                                    src='/assets/icons/linkedin.svg'
                                    alt=''
                                    className='h-6 w-6'
                                />
                            </a>
                            <a href={`mailto:${details.email}`} target="_blank" rel="noopener noreferrer">
                                <img
                                    src='/assets/icons/email.svg'
                                    alt=''
                                    className='h-6 w-6'
                                />
                            </a>
                        </div>
                        <button
                            className="mt-4 flex justify-end items-end h-6 w-6"
                            onClick={() => setShowBio(!showBio)}
                        >
                            <img
                                src='/assets/icons/down-arrow.svg'
                                alt=''
                                className={`h-4 w-4 ${showBio ? 'rotate-180' : ''}`}
                            />
                        </button>
                    </div>
                </div>

                {/* Icons */}


                {/* Expand Bio */}


                {/* Bio */}
                {showBio && <p className="text-sm text-gray-700 mt-4 text-left">{details.bio}</p>}
            </Container>
        </div>
    );
};

export default TeamCard;