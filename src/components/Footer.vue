<script setup lang="ts">
// this is actually being used on line 15, why is it displaying an error
import { isDark, toggleDark } from '~/composables'

// if I remove this the page goes blank, why is that?
const { t, availableLocales, locale } = useI18n()
</script>

<template>
  <nav class="text-xl mt-8">
    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>
  </nav>
</template>
