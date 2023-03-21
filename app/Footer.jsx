'use client';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="m-h-[30vh] w-full bg-teal-600">
        <div className="container mx-auto">
          <div className="py-8 px-8 lg:px-0">
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white
            items-center justify-items-left"
            >
              <div className="flex flex-col gap-6">
                <h2>認識基金會</h2>
                <Link href="/">123</Link>
                <Link href="/">123</Link>
                <Link href="/">123</Link>
              </div>
              <div className="flex flex-col gap-6">
                <h2>華德福教育</h2>
                <Link href="/">123</Link>
                <Link href="/">123</Link>
                <Link href="/">123</Link>
              </div>
              <div className="flex flex-col gap-6">
                <h2>服務</h2>
                <Link href="/">123</Link>
                <Link href="/">123</Link>
                <Link href="/">123</Link>
              </div>
              <div className="flex flex-col gap-6">
                <h2>聯絡我們</h2>
                <Link href="/">123</Link>
                <Link href="/">123</Link>
                <Link href="/">123</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="container mx-auto ">
          <div className="py-8 gap-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-900">
              © 2023 華德福教育基金會有限公司 版權所有
            </p>
            <div className="flex gap-8">
              <FaFacebook size={20} className="text-gray-900" />
              <FaInstagram size={20} className="text-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
