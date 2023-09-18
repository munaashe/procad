'use client'

import React from 'react'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

//images import
import boundary1 from '@/app/assets/boundary-1.png'
import boundary2 from '@/app/assets/boundary-2.png'
import boundary3 from '@/app/assets/boundary-3.png'

import carrick1 from '@/app/assets/carrick-1.png'
import carrick2 from '@/app/assets/carrick-2.png'

import kg1 from '@/app/assets/kg6-1.png'
import kg2 from '@/app/assets/kg6-2.png'
import kg3 from '@/app/assets/kg6-3.png'

import marondera1 from '@/app/assets/marondera-1.png'
import marondera2 from '@/app/assets/marondera-2.png'
import marondera3 from '@/app/assets/marondera-3.png'
import marondera4 from '@/app/assets/marondera-4.png'

import tynwald1 from '@/app/assets/tynwald-1.png'
import tynwald2 from '@/app/assets/tynwald-2.png'
import tynwald3 from '@/app/assets/tynwald-3.png'


const projects = [
  {
    title: 'Arlington Boundary Wall',
    description: 'Construction of the 1.4km long Arlington East Boundary wall',
    images: [boundary3, boundary1, boundary2]
  },
  {
    title: 'Tynwald Sewer Reticulation',
    description: 'Construction supervision of the Tynwald North Sewer Reticulation Project',
    images: [tynwald3, tynwald1, tynwald2]
  },
  {
    title: 'Gate House Construction',
    description: 'Construction supervision of the Josiah Magama Tongogara Barracks gate house',
    images: [kg3, kg1, kg2]
  },
  {
    title: 'Marondera Flats',
    description: 'Brickwork, plastering, skimming, tiling and glazing of 4 flats in Marondera',
    images: [marondera1, marondera2, marondera3, marondera4]
  },
  {
    title: 'Carrick Creagh Clusters',
    description: 'Plastering, scheming, screeds and window finishes',
    images: [carrick2, carrick1]
  },

]

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    React.createElement("div", { className: className, onClick: onClick },
      React.createElement(ArrowForwardIos, {
        style: {
          color: '#7f2d00',
          fontSize: '20px',
          marginRight: '110px',
        }
      })
    )
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    React.createElement("div", { className: className, onClick: onClick },
      React.createElement(ArrowBackIos, {
        style: {
          color: '#7f2d00',
          fontSize: '20px',
          //paddingLeft: '10px',
          zIndex: 999
        }
      })
    )
  );
}

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    //speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className='p-20 xs:px-4 pb-4'>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-[40px] font-semibold text-center'>
          Our Projects
        </div>
        <div className='w-1/2 xs:w-full text-[18px] xs:text-[14px] text-[#e29b64] text-center pt-4'>
          Ours is a lifelong pledge of consistent quality construction services,
          delivered through professionalism, innovation and integrity.
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {projects.map((project) => {
          return (
            <div className='w-full md:w-6/12 lg:w-4/12 lg:mb-0 px-4'>
              <div className='container mx-auto px-4 mt-16'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg '>
                  <div className='px-6 flex flex-col'>
                  </div>
                  <div className='pb-12'>
                    <Slider {...settings}>
                      {project.images.map((image) => (
                        <div>
                          <Image
                            src={image}
                            alt=''
                            height={300}
                            width={'full'}
                            className='h-[250px] rounded-xl'
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className='text-center text-[#7f2d00] font-semibold text-[18px]'>
                    {project.title}
                  </div>
                  <div className='px-2 text-center py-4 h-[100px]'>
                    {project.description}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
