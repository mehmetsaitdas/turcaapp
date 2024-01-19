import Guide from "../../compo/guide";
import Features from "../../compo/features";
import GetApp from "../../compo/get-app";

import { Locale } from '@/i18n.config'

const Mobile = async ({
    params: { lang, names },
}: {
    params: { lang: Locale, names: string }
}) => {
    return (
        <>
            <Guide params={{ lang, names }} />
            <Features params={{ lang, names }} />
            <GetApp params={{ lang, names }} />
        </>
    )
}

export default Mobile