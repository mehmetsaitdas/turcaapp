import Image from 'next/image'
import React from 'react'

import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'
import Button from './button'

const GetApp = async ({
    params: { lang },
    params: { names },

}: {
    params: { lang: Locale, names: string }
}) => {
    const { mobile } = await geMessages(lang)
    const valuea = mobile.filter((i) => i.names == names)[0];

    return (
        <section className="flexCenter w-full flex-col pb-[30px]">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">{valuea.fooTitle}</h2>
                    <p className="regular-16 text-gray-10">{valuea.fooDesc}</p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">

                        {valuea.fooAppStoHref ? (
                            <Button
                                type="button"
                                title="App Store"
                                icon="/mobile/apple.svg"
                                variant="btn_white"
                                href={valuea.fooAppStoHref}
                                full
                            />
                        ) : (
                            <p></p>
                        )}

                        {valuea.fooPlayStoHref ? (
                            <Button
                                type="button"
                                title="Play Store"
                                icon="/mobile/android.svg"
                                variant="btn_dark_green_outline"
                                href={valuea.fooPlayStoHref}
                                full
                            />
                        ) : (
                            <p></p>
                        )}

                        {valuea.fooYouTubeHref ? (
                            <Button
                                type="button"
                                title="You Tube"
                                icon="/mobile/youtube.svg"
                                variant="btn_red"
                                href={valuea.fooYouTubeHref}
                                full
                            />
                        ) : (
                            <p></p>
                        )}

                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <Image
                        src={valuea.butImage}
                        alt="phones"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '90%', height: 'auto' }} />
                </div>
            </div>
        </section>
    )
}

export default GetApp