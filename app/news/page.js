import React from 'react';
import Hero from '../Hero';

export default function news() {
  return (
    <main>
      <Hero />
      <section id="news-page" className="w-full">
        <div className="container mx-auto my-16 border-2">
          <div className="flex flex-col">
            <div className="my-12 flex justify-between items-end">
              <div>
                <h3 className="text-gray-900 text-4xl font-bold">最新消息</h3>
                <p className="text-gray-900 text-sm mt-4">
                  暸解更多基金會的最新資訊
                </p>
              </div>
              <p
                className="rounded-lg p-2 text-sm
               text-teal-700 hover:text-white hover:bg-teal-700
               border-2 border-teal-700 "
              >
                更多消息
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
