import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

const Home = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const { info } = await geMessages(lang)

  return (
    <>
    </>
  )
}

export default Home
