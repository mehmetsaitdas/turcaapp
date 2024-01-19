import Image from 'next/image'
import React from 'react'

import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

const Features = async ({
    params: { lang },
    params: { names },

}: {
    params: { lang: Locale, names: string }
}) => {
    const { mobile } = await geMessages(lang)
    const valuea = mobile.filter((i) => i.names == names)[0];

    return (
        <section className="flex-col flexCenter overflow-hidden bg-feature bg-center bg-no-repeat py-24">
            <div className="max-container padding-container relative w-full flex justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <Image
                        src={valuea.cenImage}
                        alt="phone"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '30%', height: 'auto' }}
                        className="feature-phone" />
                </div>

                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <div className='relative'>
                        <Image
                            src={valuea.icon}
                            alt="campa"
                            width={50}
                            height={50}
                            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]" />
                        <h2 className="bold-40 lg:bold-64">{valuea.featuresTitle}</h2>
                    </div>
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
                        {valuea.featuresLista.map((feature) => (
                            <FeatureItem
                                key={feature.title}
                                title={feature.title}
                                icon={feature.icon}
                                desc={feature.desc}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

type FeatureItem = {
    title: string;
    icon: string;
    desc: string;
}

const FeatureItem = ({ title, icon, desc }: FeatureItem) => {
    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full p-4 lg:p-7 bg-green-50">
                <Image src={icon} alt="map" width={28} height={28} />
            </div>
            <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                {title}
            </h2>
            <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                {desc}
            </p>
        </li>
    )
}

export default Features