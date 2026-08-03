<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="relative z-10 border-t border-slate-800 bg-dark py-3 text-center">
    <p class="text-slate-500 text-sm font-medium" v-html="t('footer.copyright')"></p>
  </footer>
</template>
