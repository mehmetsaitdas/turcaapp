import Guide from "../components/guide";
import Features from "../components/features";
import GetApp from "../components/get-app";

import { Locale } from '@/i18n.config'

const TermsOfUse = async ({
    params: { lang },
}: {
    params: { lang: Locale }
}) => {
    return (
        <>
            Terms of Use
            {/* <Guide params={{ lang, names }} />
            <Features params={{ lang, names }} />
            <GetApp params={{ lang, names }} /> */}
        </>
    )
}

export default TermsOfUse