<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
</script>

<template>
  <section id="blog" class="relative z-10 py-16 bg-gradient-to-b from-transparent to-darker border-t border-slate-800/50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-2xl font-bold text-white mb-4">{{ t('blog.title') }}</h2>
      <p class="text-slate-400 mb-8" v-html="t('blog.desc')"></p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="https://azuvicenna.hashnode.dev/" target="_blank" class="px-8 py-4 rounded-xl bg-dark border border-slate-700 text-white hover:border-white hover:bg-white/5 transition-all flex items-center justify-center gap-3 font-medium">
          <img src="/icons/hashnode.svg" alt="Hashnode" class="w-6 h-6" /> {{ t('blog.hashnode') }}
        </a>
        <a href="https://medium.com/@azuvicenna" target="_blank" class="px-8 py-4 rounded-xl bg-dark border border-slate-700 text-white hover:border-white hover:bg-white/5 transition-all flex items-center justify-center gap-3 font-medium">
          <Icon icon="ph:medium-logo-fill" class="text-2xl" /> {{ t('blog.medium') }}
        </a>
      </div>
    </div>
  </section>
</template>
