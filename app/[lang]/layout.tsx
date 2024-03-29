
import './globals.css'
import { geMessages } from '@/lib/messages'
import { Locale, i18n } from '@/i18n.config'

import Navbar from './compo/navbar'
import Footer from './compo/footer'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const { info } = await geMessages(lang);
  return info;
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  await generateMetadata({ params: { lang: params.lang } });
  const { navi } = await geMessages(params.lang);

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Navbar lang={params.lang} navi={navi} />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  )
}
