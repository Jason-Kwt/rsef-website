import Image from 'next/image';
import Hero from './Hero';
import { dataNews, dataPartner, dataCharity } from '@/constants/data';
import ServicesBar from './ServicesBar';

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="home-news" className="w-full">
        <div className="container mx-auto my-16 py-16">
          <div className="flex flex-col">
            <div className=" flex justify-between items-end mb-12">
              <div>
                <h2 className="text-gray-900 text-5xl font-bold">最新消息</h2>
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
            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-16">
              {dataNews.map((newPost, index) => (
                <div
                  key={index}
                  className="bg-gray-50 h-[390px] drop-shadow-lg overflow-hidden relative "
                >
                  <Image
                    src={newPost.imgUrl}
                    alt={newPost.title}
                    width={360}
                    height={270}
                    className="w-full h-[270px] object-cover object-center overflow-hidden"
                  />
                  <h4 className="p-4 text-left font-semibold text-lg text-teal-700">
                    {newPost.title}
                  </h4>
                  <div className="absolute inset-x-0 bottom-0 w-full h-[3px] bg-teal-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="home-ser" className="w-full bg-gray-50 ">
        <div className="h-[700px] my-16 py-16">
          <div className="flex flex-col text-center">
            <div className="mb-12 ">
              <h2
                className="text-transparent bg-gradient-to-r from-teal-800 to-teal-400 bg-clip-text
                text-5xl font-extrabold"
              >
                服務範疇
              </h2>
              <p className="text-gray-900 text-sm mt-4">服務xxxxxx</p>
            </div>
            <ServicesBar />
          </div>
        </div>
      </section>

      <section id="home-partner" className="w-full bg-white">
        <div className="container mx-auto my-16 py-16">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center mb-12 text-center">
              <div>
                <h2
                  className="text-transparent bg-gradient-to-r from-teal-800 to-teal-400 bg-clip-text
                text-5xl font-extrabold"
                >
                  友好機構
                </h2>
                <p className="text-gray-900 text-sm mt-4">
                  暸解更多基金會的最新資訊
                </p>
              </div>
            </div>
            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-between items-center gap-12">
              {dataPartner.map((newPost, index) => (
                <div
                  key={index}
                  className="bg-transparent h-full overflow-hidden p-4"
                >
                  <Image
                    src={newPost.imgUrl}
                    alt={newPost.title}
                    width={360}
                    height={270}
                    className="w-full h-[100px] object-cover object-center overflow-hidden "
                  />
                  <h4 className="p-4 text-center font-base text-sm text-gray-900">
                    {newPost.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="home-charity" className="w-full bg-gray-50">
        <div className="container mx-auto mt-16 py-16">
          <div className="flex flex-col">
            <div className=" mb-12 text-left">
              <div>
                <h2
                  className="text-gray-900
                text-5xl font-extrabold"
                >
                  公益活動參與
                </h2>
                <p className="text-gray-900 text-sm mt-4">
                  暸解更多基金會的最新資訊
                </p>
              </div>
            </div>
            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-6">
              {dataCharity.map((newPost, index) => (
                <div
                  key={index}
                  className="bg-transparent h-full overflow-hidden p-4"
                >
                  <Image
                    src={newPost.imgUrl}
                    alt={newPost.title}
                    width={360}
                    height={270}
                    className="w-full h-[150px] object-cover object-center overflow-hidden shadow-lg rounded-lg hover:scale-110 duration-700"
                  />
                  <h4 className="p-4 text-center font-base text-sm text-gray-900">
                    {newPost.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="home-partner" className="w-full bg-teal-600/70">
        <div className="container mx-auto py-16">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center mb-12 text-center">
              <div>
                <h2 className="text-white text-5xl font-extrabold drop-shadow-lg">
                  聯繫我們
                </h2>
                <p className="text-white text-sm mt-4 drop-shadow-lg">
                  暸解更多基金會的最新資訊
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8">
              <button
                className="w-32 rounded-lg p-2 text-sm
               text-white hover:text-teal-700 hover:bg-white
               border-2 border-white "
              >
                123
              </button>
              <button
                className="w-32 rounded-lg p-2 text-sm
               text-white hover:text-teal-700 hover:bg-white
               border-2 border-white "
              >
                123
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
