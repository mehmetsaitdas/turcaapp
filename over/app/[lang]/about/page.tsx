import { geMessages } from '@/lib/messages'
import { Locale } from '@/i18n.config'

const About = async ({
    params: { lang },
}: {
    params: { lang: Locale }
}) => {

    const { contactInfo } = await geMessages(lang)

    return (
        <>
            <section className="flex-col flexCenter overflow-hidden bg-softwa bg-center bg-no-repeat py-10">
                <div className="max-container padding-container relative w-full flex justify-end">
                    <div className="z-20 flex w-full flex-col lg:w-[40%] md:w-[40%] sm:w-[40%] xs:w-[40%] mb-20">
                        <h2 className="bold-32 lg:bold-32 mt-20 capitalize">
                            {contactInfo.title}
                        </h2>
                        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                            {contactInfo.deta}
                        </p>
                        {contactInfo.booLista.map((item, index) => (
                            <div className='mt-20' key={index}>
                                <h3 className="bold-20 lg:bold-20 capitalize">
                                    {item.title}
                                </h3>
                                <p className="regular-16 mt-0 bg-white/80 text-gray-30 lg:mt-[10px] lg:bg-none">
                                    {item.deta}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About