'use client';
import React from 'react';
import Image from 'next/image';
import { Fade, Slide } from 'react-slideshow-image';
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa';
import 'react-slideshow-image/dist/styles.css';

import { dataServies } from '@/constants/data';

const indicators = () => (
  <div className="z-20 text-center p-2 text-neutral-200 [&.active]:text-gray-400 -h-[50px]">
    <FaCircle size={10} />
  </div>
);

const properties = {
  prevArrow: (
    <button className="p-4 mt-16 bg-teal-700/[.50]">
      <FaAngleLeft className="text-white text-[40px] drop-shadow-lg" />
    </button>
  ),
  nextArrow: (
    <button className="p-4 mt-16 bg-teal-700/[.50]">
      <FaAngleRight className="text-white text-[40px] drop-shadow-lg" />
    </button>
  ),
  transitionDuration: 300,
};

function ServicesBar() {
  return (
    <div className=" w-full">
      <Slide
        indicators={indicators}
        autoplay={false}
        slidesToScroll={3}
        slidesToShow={3}
        {...properties}
      >
        {dataServies.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={720}
              height={540}
              className="w-full h-[400px] object-cover object-center overflow-hidden  hover:brightness-50 hover:scale-110 duration-1000"
            />
            <div className="absolute inset-x-0 bottom-0 mb-8">
              <h3 className=" text-white text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default ServicesBar;
