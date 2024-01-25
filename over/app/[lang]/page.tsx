

import Image from "next/image";
import Slider from './compo/slider'
import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

const Home = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {

  const { homeInfo } = await geMessages(lang)
  const { homeSlide } = await geMessages(lang)

  const images: {
    id: number,
    srca: string,
    title: string,
    deta: string,
    href: string,
    btnTitle: string,
  }[] = [];

  homeSlide.map((itema) =>
    itema.lista.map((iteme) =>
      images.push({
        id: iteme.id,
        srca: iteme.srca,
        title: iteme.title,
        deta: iteme.deta,
        href: iteme.href,
        btnTitle: iteme.btnTitle,
      })));

  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-10 md:gap-10">
        <div className="relative z-20 flex flex-col">
          <h1 className="bold-52 lg:bold-50 text-center">
            {homeInfo.title}
          </h1>
          <p className="regular-16 mt-6 text-gray-30 text-center">
            {homeInfo.deta}
          </p>
        </div>
        <div className="relative z-20 flex flex-col mb-5">
          <Slider images={images} />
        </div>
        <div className="relative z-20 flex flex-col mt-5">
          {homeSlide.map((itema, indexa) => (
            <div key={indexa}>
              <div className="leading-relaxed hidden md:block font-medium bold-52 lg:bold-50 text-center tracking-wide italic mb-3">
                {itema.title}
              </div>
              {itema.lista.map((iteme, indexe) => (
                iteme.id % 2 == 0 ?
                  <div className="flex mb-20" key={indexe}>
                    <div className="flex-1 w-48 block md:h-[60vh] xs:h-[30vh] xs:py-5 md:py-20 px-10 text-left bg-black rounded-l-3xl">
                      <h2 className="py-6 xs:text-xs md:text-3xl font-extrabold mt-10 text-white capitalize">
                        {iteme.title}
                      </h2>
                      <p className="leading-relaxed hidden md:block font-medium text-base tracking-wide italic text-white">
                        {iteme.deta}
                      </p>
                      <br />
                      <a className="bg-white text-black uppercase px-4 py-2 rounded-md" href={iteme.href}>
                        {iteme.btnTitle}
                      </a>
                    </div>
                    <div className="flex-1 w-48">
                      <Image
                        src={iteme.srca}
                        alt=""
                        width={1512}
                        height={576}
                        className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl" />
                    </div>
                  </div>
                  :
                  <div className="flex mb-20" key={indexe}>
                    <div className="flex-1 w-48">
                      <Image
                        src={iteme.srca}
                        alt=""
                        width={1512}
                        height={576}
                        className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl" />
                    </div>
                    <div className="flex-1 w-48 block md:h-[60vh] xs:h-[30vh] xs:py-5 md:py-20 px-10 text-left bg-black rounded-r-3xl">
                      <h2 className="py-6 xs:text-xs md:text-3xl font-extrabold mt-10 text-white capitalize">
                        {iteme.title}
                      </h2>
                      <p className="leading-relaxed hidden md:block font-medium text-base tracking-wide italic text-white">
                        {iteme.deta}
                      </p>
                      <br />
                      <a className="bg-white text-black uppercase px-4 py-2 rounded-md" href={iteme.href}>
                        {iteme.btnTitle}
                      </a>
                    </div>
                  </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
