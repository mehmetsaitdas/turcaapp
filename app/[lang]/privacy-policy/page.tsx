import Document from "../components/document";

import { Locale } from '@/i18n.config'

const PrivacyPolicy = async ({
    params: { lang },
}: {
    params: { lang: Locale }
}) => {

    return (
        <>
            <Document params={{ lang, names: "privacyPolicy" }} />
            {/* <Guide params={{ lang, names }} />
            <Features params={{ lang, names }} />
            <GetApp params={{ lang, names }} /> */}
        </>
    )
}

export default PrivacyPolicy