import type { Locale } from '@/i18n.config'

const messagesa = {
  en: () => import('@/messages/en.json').then(module => module.default),
  tr: () => import('@/messages/tr.json').then(module => module.default)
}

export const geMessages = async (locale: Locale) => messagesa[locale]()
