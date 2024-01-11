import Guide from "../components/guide";
import Features from "../components/features";
import GetApp from "../components/get-app";

import { Locale } from '@/i18n.config'

const About = async ({
    params: { lang },
}: {
    params: { lang: Locale }
}) => {
    return (
        <>
            About
            {/* <Guide params={{ lang, names }} />
            <Features params={{ lang, names }} />
            <GetApp params={{ lang, names }} /> */}
        </>
    )
}

export default About