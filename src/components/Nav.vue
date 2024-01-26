<template>
  <nav>
    <ul>
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{ $t("nav.home") }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'about' })">{{ $t("nav.about") }}</RouterLink>
      </li>
    </ul>
  </nav>

  <p>Demode</p>

  <ul>
  <li v-for="item in locales.navi" :key="item.key">
    {{ item.label }}
  </li>
</ul>

  <LanguageSwitcher></LanguageSwitcher>
</template>

<script>
  import LanguageSwitcher from "@/components/LanguageSwitcher.vue"
  import Tr from "@/i18n/translation"

  import { useI18n } from "vue-i18n"

const { locales, locale } = useI18n();

  export default {
    components: { LanguageSwitcher },
    setup() {
      return { Tr }
    }
  }
</script>
