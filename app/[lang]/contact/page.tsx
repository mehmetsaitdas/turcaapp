import Guide from "../components/guide";
import Features from "../components/features";
import GetApp from "../components/get-app";

import { Locale } from '@/i18n.config'

const Contact = async ({
    params: { lang },
}: {
    params: { lang: Locale }
}) => {
    return (
        <>
            Contact
            {/* <Guide params={{ lang, names }} />
            <Features params={{ lang, names }} />
            <GetApp params={{ lang, names }} /> */}
        </>
    )
}

export default Contact