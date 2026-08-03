<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
</script>

<template>
  <section id="resume" class="relative z-10 py-24">
    <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
      
      <!-- Education (Timeline) -->
      <div>
        <h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Icon icon="ph:graduation-cap" /> {{ t('resume.edu_title') }}</h2>
        
        <div class="relative border-l border-slate-800 ml-4 space-y-10 pb-4">
          
          <!-- Item Timeline 1 -->
          <div class="relative pl-8">
            <div class="absolute w-4 h-4 bg-dark border-2 border-white rounded-full -left-[9px] top-1"></div>
            <div class="flex gap-4 items-start">
              <img src="/logo/universitas-bsi.png" alt="UBSI Logo" class="w-12 h-12 rounded bg-white border border-slate-800 object-contain p-1">
              <div>
                <span class="text-xs font-bold text-white px-3 py-1 bg-white/10 rounded-full border border-white/10">{{ t('resume.edu_1_date') }}</span>
                <h3 class="text-xl font-bold text-white mt-3">{{ t('resume.edu_1_title') }}</h3>
                <h4 class="text-slate-400 font-medium mb-3">{{ t('resume.edu_1_school') }}</h4>
                <ul class="list-disc list-inside text-sm text-slate-400 space-y-1" v-html="t('resume.edu_1_desc')">
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Item Timeline 2 -->
          <div class="relative pl-8">
            <div class="absolute w-4 h-4 bg-dark border-2 border-slate-600 rounded-full -left-[9px] top-1"></div>
            <div class="flex gap-4 items-start">
              <img src="/logo/smkn3banjar.png" alt="SMKN 3 Logo" class="w-12 h-12 rounded bg-white border border-slate-800 object-contain p-1">
              <div>
                <span class="text-xs font-bold text-slate-400 px-3 py-1 bg-slate-800 rounded-full border border-slate-700">{{ t('resume.edu_2_date') }}</span>
                <h3 class="text-xl font-bold text-slate-200 mt-3">{{ t('resume.edu_2_title') }}</h3>
                <h4 class="text-slate-400 font-medium mb-3">{{ t('resume.edu_2_school') }}</h4>
                <ul class="list-disc list-inside text-sm text-slate-400 space-y-1" v-html="t('resume.edu_2_desc')">
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Experience (Cards List) -->
      <div>
        <h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Icon icon="ph:briefcase" /> {{ t('resume.exp_title') }}</h2>
        
        <div class="space-y-6">
          
          <!-- Job Card 1 -->
          <div class="bg-darker border border-slate-800 p-6 rounded-2xl hover:border-slate-500 transition-colors">
            <div class="flex gap-5 items-start">
              <img :src="'/logo/diskominfo-kota-tasikmalaya.png'" alt="Diskominfo Logo" class="w-14 h-14 rounded-lg bg-white p-1 object-contain">
              <div>
                <div class="flex justify-between items-center mb-1">
                  <h3 class="text-lg font-bold text-white">{{ t('resume.exp_1_title') }}</h3>
                  <span class="text-xs font-medium text-slate-400">{{ t('resume.exp_1_date') }}</span>
                </div>
                <h4 class="text-slate-400 text-sm mb-4">{{ t('resume.exp_1_company') }}</h4>
                <ul class="list-disc list-outside ml-4 text-sm text-slate-400 space-y-2" v-html="t('resume.exp_1_desc')">
                </ul>
              </div>
            </div>
          </div>

          <!-- Job Card 2 -->
          <div class="bg-darker border border-slate-800 p-6 rounded-2xl hover:border-slate-500 transition-colors">
            <div class="flex gap-5 items-start">
              <img :src="'/logo/mutiara-digital-printing.jpe'" alt="Mutiara Digital Printing Logo" class="w-14 h-14 rounded-lg bg-white p-1 object-contain">
              <div>
                <div class="flex justify-between items-center mb-1">
                  <h3 class="text-lg font-bold text-white">{{ t('resume.exp_2_title') }}</h3>
                  <span class="text-xs font-medium text-slate-400">{{ t('resume.exp_2_date') }}</span>
                </div>
                <h4 class="text-slate-400 text-sm mb-4">{{ t('resume.exp_2_company') }}</h4>
                <ul class="list-disc list-outside ml-4 text-sm text-slate-400 space-y-2" v-html="t('resume.exp_2_desc')">
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
