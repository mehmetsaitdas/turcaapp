import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

const PrivacyPolicy = async ({
    params: { lang },
}: {
    params: { lang: Locale }
}) => {

    const { privacyPolicy } = await geMessages(lang)

    return (
        <>
            <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-10">
                <div className="max-container padding-container relative w-full flex justify-end">
                    <div className="z-20 flex w-full flex-col lg:w-[60%]">
                        <h2 className="bold-32 lg:bold-32 mt-5 capitalize">
                            {privacyPolicy.title}
                        </h2>
                        {privacyPolicy.listaDeta.map((item, index) => (
                            <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none" key={index}>
                                {item}
                            </p>
                        ))}
                        <br />
                        {privacyPolicy.listaDetaTitle.map((item, index) => (
                            <div className='mt-5' key={index}>
                                <h3 className="bold-20 lg:bold-20 capitalize">
                                    {item.title}
                                </h3>
                                <p className="regular-16 mt-0 bg-white/80 text-gray-30 lg:mt-[10px] lg:bg-none" key={index + 111}>
                                    {item.deta}
                                </p>
                            </div>
                        ))}
                        <br />
                        <div className='mt-5'>
                            <h3 className="bold-20 lg:bold-20 capitalize">
                                {privacyPolicy.listaDetaNum.title}
                            </h3>
                            <p className="regular-16 mt-0 bg-white/80 text-gray-30 lg:mt-[10px] lg:bg-none">
                                {privacyPolicy.listaDetaNum.detai}
                            </p>
                            {privacyPolicy.listaDetaNum.listaDeta.map((item, index) => (
                                <p className="regular-16 mt-0 bg-white/80 text-gray-30 lg:mt-[10px] lg:bg-none" key={index}>
                                    {item}
                                </p>
                            ))}
                            <h2 className="mt-2 bold-16">
                                {privacyPolicy.listaDetaNum.booMes}
                            </h2>
                        </div>
                        <br />
                        <div className='mt-5'>
                            <h3 className="bold-20 lg:bold-20 capitalize">
                                {privacyPolicy.footerDeta.title}
                            </h3>
                            {privacyPolicy.footerDeta.listaDeta.map((item, index) => (
                                <p className="regular-16 mt-0 bg-white/80 text-gray-30 lg:mt-[10px] lg:bg-none" key={index}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy