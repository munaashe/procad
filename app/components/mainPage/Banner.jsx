import React from 'react';
import bannerImage from '@/app/assets/banner.png';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='m-24 min-h-[450px] w-full relative px-24 xs:px-0 flex jutify-center items-center xs:flex-col-reverse gap-4 xs:px-4'>
            <div className='w-full'>
                <div className="text-[#243353] text-[85px] md:text-[70px] xs:text-[32px] sm:text-[32px] font-bold leading-[85px] md:leading-[70px] sm:leading-[60px]">
                    Dream it,
                    <br />
                    We Build it.
                </div>
                <div className="w-full text-[#e29b64] text-2xl md:text-lg sm:text-base font-normal leading-[30px] md:leading-[25px] sm:leading-[20px] pt-[25px]">
                    We turn dreams into reality through customized construction solutions that meet our clients' precise needs.
                </div>
                <div className="w-[157px] h-[45px] bg-[#243353] rounded-[32.50px] flex justify-center items-center mt-[25px] cursor-pointer hover:bg-[#7f2d00]">
                    <Link href='/portfolio'>
                        <div className="text-white text-lg md:text-base sm:text-sm font-bold leading-[18px] md:leading-[15px] sm:leading-[12px]">
                            See our works
                        </div>
                    </Link>
                </div>
            </div>
            <div className='w-full'>
                <Image
                    src={bannerImage}
                    alt=''
                    height={900}
                    width={900}
                    style={{ zIndex: 2 }}
                />
            </div>
        </div>
    );
};

export default Banner;