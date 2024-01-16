import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

type FeatureItem = {
    title: string;
    desc: string;
}

const FeatureItem = ({ title, desc }: FeatureItem) => {
    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                {title}
            </h2>
            <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                {desc}
            </p>
        </li>
    )
}

const TermsOfUse = async ({
    params: { lang },
}: {
    params: { lang: Locale }
}) => {

    const { document } = await geMessages(lang)
    const valuea = document.filter((i) => i.names == "termsOfUse")[0];

    return (
        <>
            <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-10">
                <div className="max-container padding-container relative w-full flex justify-end">
                    <div className="z-20 flex w-full flex-col lg:w-[60%]">
                        <ul className="mt-0 grid gap-10 md:grid-cols-1 lg:mg-20 lg:gap-20">
                            <FeatureItem
                                title={valuea.title}
                                desc={valuea.detai} />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsOfUse