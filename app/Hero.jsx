'use client';
import React from 'react';
import Image from 'next/image';
import { Fade, Slide } from 'react-slideshow-image';
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa';
import 'react-slideshow-image/dist/styles.css';
import { dataHeroImages } from '@/constants/data';

const indicators = () => (
  <div className="z-20 text-center p-2 text-neutral-200 [&.active]:text-gray-400 -h-[50px]">
    <FaCircle size={10} />
  </div>
);

const properties = {
  prevArrow: (
    <button className="p-4 mt-16 ">
      <FaAngleLeft className="text-white text-[40px] drop-shadow-lg" />
    </button>
  ),
  nextArrow: (
    <button className="p-4 mt-16">
      <FaAngleRight className="text-white text-[40px] drop-shadow-lg" />
    </button>
  ),
};

function Hero() {
  return (
    <div className=" w-full -z-10">
      <Fade indicators={indicators} autoplay={false} {...properties}>
        {dataHeroImages.map((item, index) => (
          <div key={index}>
            <Image
              width={1920}
              height={1080}
              className="w-screen h-[60vh] lg:h-[70vh] object-cover object-center overflow-hidden"
              src={item.url}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Hero;
