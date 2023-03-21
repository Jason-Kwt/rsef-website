import Image from 'next/image';
import Hero from './Hero';
import { dataNews, dataServies } from '@/constants/data';
import ServicesBar from './ServicesBar';

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="home-news" className="w-full">
        <div className="container mx-auto my-16 border-2">
          <div className="flex flex-col">
            <div className="my-12 flex justify-between items-end">
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
              {dataNews.map((newPost) => (
                <div className="bg-white h-[390px] drop-shadow-lg overflow-hidden">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="home-ser" className="w-full bg-gray-50">
        <div className="h-[700px]  my-16 border-2">
          <div className="flex flex-col text-center">
            <div className="my-12 ">
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
    </main>
  );
}
