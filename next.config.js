/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'tr'],
        defaultLocale: 'en',
        domains: [
            {
                domain: 'turca.app',
                defaultLocale: 'en',
            },
            {
                domain: 'turca.app',
                defaultLocale: 'tr',
            },
        ],
    },
    /*
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/en': { page: '/[lang]' },
            '/tr': { page: '/[lang]' },
            '/en/terms-of-use': { page: '/[lang]/terms-of-use' },
            '/tr/terms-of-use': { page: '/[lang]/terms-of-use' },
            '/en/about': { page: '/[lang]/about' },
            '/tr/about': { page: '/[lang]/about' },
            '/en/mobile/comeeat': { page: '/[lang]/mobile/[names]' },
            '/tr/mobile/comeeat': { page: '/[lang]/mobile/[names]' },
            '/en/mobile/onevisit': { page: '/[lang]/mobile/[names]' },
            '/tr/mobile/onevisit': { page: '/[lang]/mobile/[names]' },
            '/en/contact': { page: '/[lang]/contact' },
            '/tr/contact': { page: '/[lang]/contact' },
            '/en/cookie-policy': { page: '/[lang]/cookie-policy' },
            '/tr/cookie-policy': { page: '/[lang]/cookie-policy' },
            '/en/privacy-policy': { page: '/[lang]/privacy-policy' },
            '/tr/privacy-policy': { page: '/[lang]/privacy-policy' },
        }
    },
    */
}

module.exports = nextConfig
