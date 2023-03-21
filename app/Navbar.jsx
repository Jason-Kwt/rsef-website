'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FiMenu } from 'react-icons/fi';

function Navbar() {
  const navigation = [
    { name: '主頁', href: '/' },
    { name: '最新消息', href: '/news' },
    { name: '關於我們', href: '/about-us' },
    { name: '服務', href: '/servies' },
    { name: '聯繫我們', href: '/contact-us' },
  ];

  return (
    <>
      <nav className="w-full bg-gray-50 z-[1000] fixed pt-6">
        <div className="container mx-auto ">
          {/* nav item */}
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image width={240} height={120} src={'/logo.svg'} />
            </Link>
            <div className="flex flex-col gap-4 items-end justify-center">
              {/* Top Menu */}
              <div className="flex flex-row text-sm gap-6 text-teal-700">
                <div className="flex">
                  <p>友好機構:</p>
                  <Link href="/">RSEFHK MARIA COLLEGE</Link>
                </div>
                <div className="flex">
                  <Link href="/">其他連結</Link>
                </div>
              </div>
              {/*  Main Menu */}
              <div className=" flex font-bold items-center justify-center text-teal-900  text-lg gap-6">
                <div className="px-6 py-6 transition navItemHover hover:scale-110 duration-300">
                  <Link href="/">主頁</Link>
                </div>
                <div className="px-6 py-6 transition hover:text-teal-700 hover:scale-110 duration-300">
                  <Link href="/news">最新消息</Link>
                </div>
                {/*   About */}
                <div className="group ">
                  <div
                    className="px-4 py-6 transition group-hover:bg-white group-hover:text-teal-700 
                     group-hover:drop-shadow-lg  group-hover:scale-110"
                  >
                    <Link href="/about-us">關於我們</Link>
                  </div>

                  <div
                    className="hidden group-hover:flex flex-col absolute inset-x-0  w-full  min-h-fit
                  bg-white text-black font-base text-base 
                  duration-300 drop-shadow-lg "
                  >
                    <div className="container mx-auto py-8">
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                        {/*   sub menu */}
                        <div className="flex flex-col gap-4 col-span-2">
                          <h2 className="text-xl">關於我們</h2>
                          <p className="text-sm">華德福教育基金會</p>
                          <Link href="/">
                            <Image
                              src="/nav_img_01.jpg"
                              cover
                              alt=""
                              width={400}
                              height={180}
                            />
                          </Link>
                        </div>
                        <div className="flex flex-col gap-6">
                          <h3 className="mb-4 text-xl">認識基金會</h3>
                          <Link href="#" className="navItemHover">
                            創辦人的話
                          </Link>
                          <Link href="#" className="navItemHover">
                            理念願景
                          </Link>
                          <Link href="#" className="navItemHover">
                            機構簡介
                          </Link>
                          <Link href="#" className="navItemHover">
                            組織及架構
                          </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h3 className="mb-4 text-xl">認識華德福教育</h3>
                          <Link href="#" className="navItemHover">
                            華德福教育理念
                          </Link>
                          <Link href="#" className="navItemHover">
                            華德福教育課程
                          </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h3 className="mb-4 text-xl">聯絡我們</h3>
                          <Link href="#" className="navItemHover">
                            友好機構
                          </Link>
                          <Link href="#" className="navItemHover">
                            徵招人才
                          </Link>
                          <Link href="#" className="navItemHover">
                            聯絡方法
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  End Group */}
              </div>
              {/* main menu */}
            </div>
            {/* navbar right side  */}
          </div>
          {/* navbar  */}
        </div>
        {/* end container */}
      </nav>
    </>
  );
}

export default Navbar;
