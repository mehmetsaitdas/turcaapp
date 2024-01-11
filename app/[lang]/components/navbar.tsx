'use client'

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"

import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

type naviProps = {
    navi: {
        href: string;
        key: string;
        label: string;
    }[]
}

const Navbar = async ({ lang }: { lang: Locale }) => {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = (): void => {
        setisClick(!isClick)
    }

    const { navi } = await geMessages(lang);

    return (
        <nav className='bg-black sticky top-0 z-50'>
            <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center '>
                        <div className='flex-shrink-0'>
                            <Link href={`/${lang}`}>
                                <Image src="/aogo/white.svg"
                                    alt="logo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '25%', height: 'auto' }} />
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            {navi.map((item) => (
                                <Link href={`/${lang}/${item.href}`} key={item.key} className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-2 
                        rounded-md text-white hover:text-white focus:outline-none
                        focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                            {isClick ? (
                                <Image
                                    src="/navbar/close.svg"
                                    alt="close"
                                    width={32}
                                    height={32}
                                    className="inline-block cursor-pointer lg:hidden" />
                            ) : (

                                <Image
                                    src="/navbar/menu.svg"
                                    alt="menu"
                                    width={32}
                                    height={32}
                                    className="inline-block cursor-pointer lg:hidden" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isClick && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {navi.map((item) => (
                            <Link href={`/${lang}/${item.href}`} key={item.key} className="text-white block hover:bg-white hover:text-black rounded-lg p-2" onClick={toggleNavbar}>
                                {item.label}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    )
}



export default Navbar