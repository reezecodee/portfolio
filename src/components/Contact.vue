<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="relative z-10 py-24 border-t border-slate-800/50 bg-darker">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">{{ t('contact.title') }}</h2>
      <p class="text-slate-400 mb-10 text-lg" v-html="t('contact.desc')"></p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-6">
        <!-- Solid White Email Button -->
        <a href="mailto:azfaalharits25@gmail.com" class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-darker font-bold text-lg hover:bg-silver hover:scale-105 transition-all duration-300 shadow-glow-white">
          <Icon icon="ph:envelope-simple" class="text-2xl" /> {{ t('contact.email') }}
        </a>
        
        <!-- Outline LinkedIn Button -->
        <a href="https://www.linkedin.com/in/atyla-azfa-al-harits/" target="_blank" class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-slate-600 bg-dark text-white font-bold text-lg hover:border-white hover:bg-white/5 transition-all duration-300">
          <Icon icon="ph:linkedin-logo" class="text-2xl" /> {{ t('contact.linkedin') }}
        </a>
      </div>
      
      <!-- Quick Info Text -->
      <div class="mt-12 text-slate-500 text-sm flex justify-center gap-4">
        <span><Icon icon="ph:map-pin" class="inline-block" /> {{ t('contact.location') }}</span>
      </div>
    </div>
  </section>
</template>
