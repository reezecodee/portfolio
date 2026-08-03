<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const { t, locale } = useI18n()

const cvLink = computed(() => {
  return locale.value === 'id' 
    ? '/CV/CV_ID_Atyla_Azfa_Al_Harits.pdf' 
    : '/CV/CV_EN_Atyla_Azfa_Al_Harits.pdf'
})
</script>

<template>
  <section id="home" class="relative z-10 min-h-[calc(100vh/0.9)] flex items-center justify-center pt-20">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      
      <!-- Hero Text -->
      <div class="order-2 md:order-1 text-center md:text-left">

        
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          {{ t('hero.name_1') }} <br>
          <span class="text-slate-400">{{ t('hero.name_2') }}</span>
        </h1>
        
        <h2 class="text-2xl text-white font-medium mb-4">{{ t('hero.title') }}</h2>
        <p class="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed" v-html="t('hero.description')">
        </p>
        
        <!-- Action Buttons: Solid & Outline -->
        <div class="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <a :href="cvLink" download class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-darker font-bold hover:bg-silver shadow-glow-white hover:scale-105 transition-all duration-300 text-center flex justify-center items-center gap-2">
            <Icon icon="ph:download-simple" class="text-xl" /> {{ t('hero.download_cv') }}
          </a>
          <a href="https://github.com/azuvicenna" target="_blank" class="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 text-white font-semibold hover:border-white hover:bg-white/5 transition-all duration-300 text-center flex justify-center items-center gap-2 group">
            <Icon icon="ph:github-logo" class="text-xl" /> {{ t('hero.github') }}
          </a>
        </div>
      </div>
      
      <!-- Hero Abstract Visual (Monochrome) -->
      <div class="order-1 md:order-2 flex justify-center relative">
        <div class="relative w-64 h-64 md:w-[400px] md:h-[400px] group">
          <!-- Efek cahaya terang dari belakang kotak (Glow Background) -->
          <div class="absolute inset-0 bg-white rounded-3xl rotate-6 opacity-10 blur-2xl group-hover:opacity-25 group-hover:rotate-12 transition-all duration-700"></div>
          
          <!-- Kotak Foto dengan efek Shadow Glow Putih -->
          <div class="absolute inset-0 bg-dark border border-slate-500/60 rounded-3xl -rotate-3 overflow-hidden shadow-glow-white flex items-center justify-center p-4 transition-transform group-hover:rotate-0 duration-500 z-10">
            <div class="grid grid-cols-2 gap-3 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity">
              <!-- Image 1 -->
              <img src="https://placehold.co/200x200/1e293b/cbd5e1?text=Photo+1" alt="Grid Image 1" class="w-full h-full object-cover rounded-xl border border-slate-600 hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0">
              <!-- Image 2 -->
              <img src="https://placehold.co/200x200/1e293b/cbd5e1?text=Photo+2" alt="Grid Image 2" class="w-full h-full object-cover rounded-xl border border-slate-600 hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0">
              <!-- Image 3 -->
              <img src="https://placehold.co/200x200/1e293b/cbd5e1?text=Photo+3" alt="Grid Image 3" class="w-full h-full object-cover rounded-xl border border-slate-600 hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0">
              <!-- Image 4 -->
              <img src="https://placehold.co/200x200/1e293b/cbd5e1?text=Photo+4" alt="Grid Image 4" class="w-full h-full object-cover rounded-xl border border-slate-600 hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0">
            </div>
            <!-- Optional Icon Overlay (Bisa dihapus jika mengganggu foto) -->
            <Icon icon="ph:code" class="text-7xl text-white/30 absolute pointer-events-none drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
