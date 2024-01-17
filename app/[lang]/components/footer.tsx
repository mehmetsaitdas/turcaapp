import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-5" key={title}>
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

const Footer = async ({ lang }: { lang: Locale }) => {
    const { footer } = await geMessages(lang)
    const { footerInfo } = await geMessages(lang)
    const { socia } = await geMessages(lang)
    const { langu } = await geMessages(lang)

    return (
        <footer className="flexCenter mb-24">
            <div className="padding-container max-container flex w-full flex-col gap-8">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href={`/${lang}`} className="mb-6">
                        <Image src='/aogo/dark.svg' alt='logo'
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Link>
                    <div className='flex flex-wrap gap-20 sm:justify-between md:flex-1'>
                        {footer.map((itema) => (
                            <div className="flex flex-col gap-5" key={itema.title}>
                                <h4 className="bold-18 whitespace-nowrap">{itema.title}</h4>
                                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                                    {itema.links.map((iteme) => (
                                        <Link href={`/${lang}/${iteme.href}`} key={iteme.label}>
                                            {iteme.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="flex flex-col gap-5">
                            <FooterColumn title={footerInfo.title}>
                                {footerInfo.links.map((link) => (
                                    <Link
                                        href={link.href}
                                        key={link.label}
                                        className="flex gap-4 md:flex-col lg:flex-row">
                                        <p className="whitespace-nowrap">
                                            {link.label}:
                                        </p>
                                        <p className="medium-14 whitespace-nowrap text-blue-70">
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>
                        <div className="flex flex-col gap-5">
                            <FooterColumn title={socia.title}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {socia.links.map((item) => (
                                        <Link href={item.href} key={item.icon} target='_blank'>
                                            <Image src={item.icon} alt="logo" width={24} height={24} />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                        <div className="flex flex-col gap-5">
                            <FooterColumn title={langu.title}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {langu.lista.map((item, index) => (
                                        <Link href={item.href} key={index}>
                                            <p className="whitespace-nowrap">
                                                {item.label}
                                            </p>
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>
                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">2020 - ∞ Turca App ® Copyright</p>
            </div>
        </footer>
    )
}

export default Footer