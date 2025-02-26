'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BannerItem } from '@/utils/types';
import Container from '@/components/ui-components/container';
import Text from '@/components/ui-components/text';

type Props = {
    bannerItems: BannerItem[];
}

const Banner = ({ bannerItems }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const router = useRouter();

    const handleNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerItems.length);
            setIsFading(false);
        }, 300);
    };

    const handlePrevious = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? bannerItems.length - 1 : prevIndex - 1
            );
            setIsFading(false);
        }, 300);
    };

    const handleBarClick = (index: number) => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsFading(false);
        }, 300);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const currentBanner = bannerItems[currentIndex];

    return (
        <div className="relative w-full h-[620px] bg-black overflow-hidden">
            <div
                className={`relative w-full h-full transition-opacity duration-300 ${isFading ? 'opacity-80' : 'opacity-100'}`}
            >
                <Image
                    src={currentBanner.project.coverImage.url}
                    alt={currentBanner.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70"
                />
            </div>

            <Container className="!py-2 absolute bottom-0 left-0 w-full flex justify-between items-start px-8 bg-black/60">
                <div className={`text-left transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    <Text variant="title4" additional="!text-white !max-w-[640px]">
                        {currentBanner.title}
                    </Text>
                </div>
                <Text variant="body1" additional="!text-white !max-w-[640px]">
                    {currentBanner.project.location}
                </Text>
            </Container>

            <Container className="absolute top-2/4 transform -translate-x-1/2 flex w-full justify-between gap-4 md:translate-x-0 ">
                <button
                    onClick={handlePrevious}
                    className="transform -translate-y-1/2 bg-white text-black text-[24px] rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80"
                >
                    <img src="/assets/icons/back.svg" alt="" className="h-6 w-6" />
                </button>
                <button
                    onClick={handleNext}
                    className="transform -translate-y-1/2 bg-white text-black text-[24px] rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80"
                >
                    <img src="/assets/icons/back.svg" alt="" className="h-6 w-6 rotate-180" />
                </button>
            </Container>
        </div>
    );
};

export default Banner;