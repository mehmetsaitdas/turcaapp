
import Slider from './compo/slider'

import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

const Home = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {

  const { homeInfo } = await geMessages(lang)
  const { mobile } = await geMessages(lang)

  const images: {
    id: number,
    srca: string,
    title: string,
    desc: string,
  }[] = [];

  mobile.map((item, index) => images.push({
    id: index,
    srca: item.topImage,
    title: item.title,
    desc: item.desc,
  }));

  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-10 md:gap-28">
        <div className="relative z-20 flex flex-col">
          <h1 className="bold-52 lg:bold-50">
            {homeInfo.title}
          </h1>
          <p className="regular-16 mt-6 text-gray-30">
            {homeInfo.deta}
          </p>
        </div>
        <div className="relative z-20 flex flex-col mb-5">
          <Slider images={images} />
        </div>
      </section>
    </>
  )
}

export default Home
