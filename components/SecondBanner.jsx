'use client';
import React from 'react';
import Image from 'next/image';

function SecondBanner({ title, imgUrl }) {
  return (
    <section
      className="w-full h-[40vh] bg-black relative bg-cover bg-center "
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="w-full h-full bg-teal-500/50 backdrop-brightness-75"></div>
      <div className="container mx-auto absolute inset-x-0 bottom-0 mb-20 p-8 lg:p-0">
        <h1 className="font-bold text-5xl text-white drop-shadow-lg">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default SecondBanner;
