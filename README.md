# next JS calistirma icin
 npm run dev

 # dil secme switcher butonu olusturma

 'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className='flex gap-x-3'>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className='rounded-md border bg-black px-3 py-2 text-white'
            >
              {locale}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

# ornek sayfa calismasi

import { Locale } from '@/i18n.config'
import { geMessages } from '@/lib/messages'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await geMessages(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.about.title}</h1>
        <p className='text-gray-500'>{page.about.description}</p>
      </div>
    </section>
  )
}
