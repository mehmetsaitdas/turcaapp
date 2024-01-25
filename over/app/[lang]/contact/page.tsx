import Link from 'next/link'
import React from 'react'

import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

type ContactColumnProps = {
    title: string;
    children: React.ReactNode;
}

const ContactColumn = ({ title, children }: ContactColumnProps) => {
    return (
        <div className="flex flex-col gap-5" key={title}>
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

const Contact = async ({
    params: { lang },
}: {
    params: { lang: Locale }
}) => {

    const { footerInfo } = await geMessages(lang)
    const { socia } = await geMessages(lang)

    return (
        <>
            <section className="flex-col flexCenter overflow-hidden bg-contact bg-center bg-no-repeat py-10">
                <div className="max-container padding-container relative w-full flex justify-end mt-20 mb-40">
                    <div className="z-20 flex w-full flex-col lg:w-[40%]">
                        <div className="flex flex-col gap-5 mb-10 text-end">
                            <ContactColumn title={footerInfo.title}>
                                {footerInfo.links.map((link) => (
                                    <Link
                                        href={link.href}
                                        key={link.label}
                                        className=" gap-4 md:flex-col lg:flex-row text-end">
                                        <p className="whitespace-nowrap  text-end">
                                            {link.label}:
                                        </p>
                                        <p className="medium-14 whitespace-nowrap text-blue-70">
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </ContactColumn>
                        </div>
                        <div className="flex flex-col gap-5 mt-10 text-end">
                            <ContactColumn title={socia.title}>
                                {socia.links.map((link) => (
                                    <Link
                                        href={link.href}
                                        key={link.label}
                                        className=" gap-4 md:flex-col lg:flex-row text-end">
                                        <p className="whitespace-nowrap text-end">
                                            {link.label}
                                        </p>
                                    </Link>
                                ))}
                            </ContactColumn>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact