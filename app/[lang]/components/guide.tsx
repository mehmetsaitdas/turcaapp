import Image from 'next/image'
import React from 'react'

import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

const Guide = async ({
    params: { lang },
    params: { names },

}: {
    params: { lang: Locale, names: string }
}) => {
    const { mobile } = await geMessages(lang)
    const valuea = mobile.filter((i) => i.names == names)[0];

    return (
        <section className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-24">
                <Image src={valuea.icon} alt="campa" width={50} height={50} />
                <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
                    {valuea.messa}
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
                        {valuea.title}
                    </h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                        {valuea.desc}
                    </p>
                </div>
            </div>

            <div className="flexCenter max-container relative w-full">
                <Image
                    src={valuea.topImage}
                    alt={valuea.names}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="w-full object-cover object-center 2xl:rounded-5xl" />
            </div>
        </section>
    )
}

export default Guide