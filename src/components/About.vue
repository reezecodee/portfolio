<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="relative z-10 py-24 bg-dark/30 border-y border-white/5">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      
      <!-- Informasi Kiri -->
      <div>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">{{ t('about.title') }}</h2>
        <p class="text-slate-400 mb-6 leading-relaxed" v-html="t('about.desc_1')"></p>
        <p class="text-slate-400 mb-6 leading-relaxed" v-html="t('about.desc_2')"></p>
        <div class="flex items-center gap-4 text-slate-300">
          <div class="flex items-center gap-2"><Icon icon="ph:map-pin" class="text-xl" /> {{ t('about.location') }}</div>
        </div>
      </div>
      
      <!-- Foto Kanan -->
      <div class="relative flex justify-center md:justify-end">
        <div class="absolute -inset-4 bg-white/5 rounded-2xl blur-lg"></div>
        <img src="https://placehold.co/400x500/1e293b/cbd5e1?text=Atyla+Photo" alt="Atyla Azfa Al Harits" class="relative z-10 w-full max-w-sm rounded-2xl border border-slate-700 object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
      </div>
      
    </div>
    
    <!-- Skills & Languages Divider -->
    <div class="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-12">
      
      <!-- Skills Categories (Takes 2 Columns) -->
      <div class="md:col-span-2">
        <h3 class="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">{{ t('about.skills_title') }}</h3>
        
        <div class="space-y-6">
          <!-- Kategori 1 -->
          <div>
            <h4 class="text-sm text-slate-500 font-semibold mb-3 uppercase tracking-wider">{{ t('about.skills.languages') }}</h4>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:php" class="text-lg" /> PHP</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:python" class="text-lg" /> Python</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:dart" class="text-lg" /> Dart</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:typescript" class="text-lg" /> TypeScript</span>
            </div>
          </div>
          
          <!-- Kategori 2 -->
          <div>
            <h4 class="text-sm text-slate-500 font-semibold mb-3 uppercase tracking-wider">{{ t('about.skills.frameworks') }}</h4>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:laravel" class="text-lg" /> Laravel</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:vuejs" class="text-lg" /> Vue.js</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:flutter" class="text-lg" /> Flutter</span>
            </div>
          </div>

          <!-- Kategori 3 -->
          <div>
            <h4 class="text-sm text-slate-500 font-semibold mb-3 uppercase tracking-wider">{{ t('about.skills.database') }}</h4>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:mysql" class="text-lg" /> MySQL</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:postgresql" class="text-lg" /> PostgreSQL</span>
            </div>
          </div>

          <!-- Kategori 4 -->
          <div>
            <h4 class="text-sm text-slate-500 font-semibold mb-3 uppercase tracking-wider">{{ t('about.skills.tools') }}</h4>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:docker" class="text-lg" /> Docker</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:git" class="text-lg" /> Git/GitHub</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="ph:cube" class="text-lg" /> Bruno</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="ph:database" class="text-lg" /> Navicat</span>
            </div>
          </div>

          <!-- Kategori 5 -->
          <div>
            <h4 class="text-sm text-slate-500 font-semibold mb-3 uppercase tracking-wider">{{ t('about.skills.ide') }}</h4>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:vscode" class="text-lg" /> VS Code</span>
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="ph:rocket" class="text-lg" /> Antigravity</span>
            </div>
          </div>

          <!-- Kategori 6 -->
          <div>
            <h4 class="text-sm text-slate-500 font-semibold mb-3 uppercase tracking-wider">{{ t('about.skills.os') }}</h4>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-dark border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2 hover:border-white transition-colors cursor-default"><Icon icon="devicon-plain:windows8" class="text-lg" /> Windows</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Languages -->
      <div>
        <h3 class="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">{{ t('about.languages_title') }}</h3>
        <div class="flex flex-col gap-4">
          <div class="flex items-center p-4 bg-darker border border-slate-800 rounded-xl hover:border-slate-500 transition-colors">
            <img src="https://flagcdn.com/w80/jp.png" alt="Japan Flag" class="w-10 h-10 object-cover rounded-full border border-slate-700 mr-4">
            <div>
              <h5 class="text-white font-semibold">{{ t('about.languages.jp_name') }}</h5>
              <p class="text-xs text-slate-500">{{ t('about.languages.jp_desc') }}</p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-darker border border-slate-800 rounded-xl hover:border-slate-500 transition-colors">
            <img src="https://flagcdn.com/w80/gb.png" alt="UK Flag" class="w-10 h-10 object-cover rounded-full border border-slate-700 mr-4">
            <div>
              <h5 class="text-white font-semibold">{{ t('about.languages.en_name') }}</h5>
              <p class="text-xs text-slate-500">{{ t('about.languages.en_desc') }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
