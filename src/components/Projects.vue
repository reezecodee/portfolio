<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="portfolio" class="relative z-10 py-24 bg-dark/30 border-t border-white/5">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">{{ t('projects.title') }}</h2>
      <p class="text-slate-400 max-w-xl mb-12">{{ t('projects.desc') }}</p>

      <div class="grid md:grid-cols-2 gap-8">
        
        <!-- Project 1 -->
        <div class="group relative bg-darker rounded-2xl border border-slate-800 overflow-hidden hover:border-white/40 hover:shadow-glow-white transition-all duration-500">
          <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded border border-slate-700"><img src="/icons/laravel.svg" alt="Laravel" class="inline-block w-3.5 h-3.5 mr-1" /> Laravel</span>
              <span class="px-2 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded border border-slate-700"><img src="/icons/mysql.svg" alt="MySQL" class="inline-block w-3.5 h-3.5 mr-1" /> MySQL</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ t('projects.proj_1_title') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed" v-html="t('projects.proj_1_desc')"></p>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="group relative bg-darker rounded-2xl border border-slate-800 overflow-hidden hover:border-white/40 hover:shadow-glow-white transition-all duration-500">
          <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded border border-slate-700"><img src="/icons/php.svg" alt="PHP" class="inline-block w-3.5 h-3.5 mr-1 invert dark:invert-0" /> PHP</span>
              <span class="px-2 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded border border-slate-700"><img src="/icons/mysql.svg" alt="SQL" class="inline-block w-3.5 h-3.5 mr-1" /> SQL</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ t('projects.proj_2_title') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed" v-html="t('projects.proj_2_desc')"></p>
          </div>
        </div>
        
        <!-- Project 3 -->
        <div class="group relative bg-darker rounded-2xl border border-slate-800 overflow-hidden hover:border-white/40 hover:shadow-glow-white transition-all duration-500">
          <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded border border-slate-700"><img src="/icons/laravel.svg" alt="Laravel" class="inline-block w-3.5 h-3.5 mr-1" /> Laravel</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ t('projects.proj_3_title') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed" v-html="t('projects.proj_3_desc')"></p>
          </div>
        </div>
        
        <!-- Project 4 -->
        <div class="group relative bg-darker rounded-2xl border border-slate-800 overflow-hidden hover:border-white/40 hover:shadow-glow-white transition-all duration-500">
          <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded border border-slate-700"><img src="/icons/laravel.svg" alt="Laravel" class="inline-block w-3.5 h-3.5 mr-1" /> Laravel</span>
              <span class="px-2 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded border border-slate-700"><img src="/icons/livewire.svg" alt="Livewire" class="inline-block w-3.5 h-3.5 mr-1" /> Livewire</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ t('projects.proj_4_title') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed" v-html="t('projects.proj_4_desc')"></p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
