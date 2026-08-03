<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()

const isModalOpen = ref(false)
const selectedCert = ref<string | null>(null)

const openModal = (src: string) => {
  selectedCert.value = src
  isModalOpen.value = true
}
</script>

<template>
  <section class="relative z-10 py-24">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-white mb-8"><Icon icon="ph:certificate" class="inline-block" /> {{ t('cert.title') }}</h2>
      
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- Cert Card 1 (Horizontal Layout) -->
        <div class="flex flex-col sm:flex-row bg-darker border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-500 transition-all lg:col-span-2">
          <div class="w-full sm:w-1/3 h-40 sm:h-auto bg-slate-900 border-b sm:border-b-0 sm:border-r border-slate-800 p-0 overflow-hidden relative group cursor-pointer" @click="openModal('/certifications/sertifikat-magang-diskominfo.jpe')">
            <img :src="'/certifications/sertifikat-magang-diskominfo.jpe'" alt="Sertifikat Magang Diskominfo" class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
            <!-- Overlay icon on hover -->
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Icon icon="ph:magnifying-glass-plus" class="text-white text-4xl" />
            </div>
          </div>
          <div class="p-6 w-full sm:w-2/3 flex flex-col justify-center">
            <h3 class="text-xl font-bold text-white mb-1">{{ t('cert.cert_1_title') }}</h3>
            <p class="text-base text-slate-300 mb-2">{{ t('cert.cert_1_org') }}</p>
            <p class="text-sm text-slate-400 mb-1">{{ t('cert.cert_1_date') }}</p>
            <p class="text-sm text-slate-500 mb-4">{{ t('cert.cert_1_id') }}</p>
            <div class="flex gap-2">
              <span class="px-3 py-1 bg-white/10 text-white text-sm rounded flex items-center gap-2"><Icon icon="devicon-plain:azuresqldatabase" class="text-lg" /> SQL</span>
            </div>
          </div>
        </div>

        <!-- Cert Card 2 (Horizontal Layout) -->
        <div class="flex flex-col sm:flex-row bg-darker border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-500 transition-all">
          <div class="w-full sm:w-1/3 h-40 sm:h-auto bg-slate-900 border-b sm:border-b-0 sm:border-r border-slate-800 p-0 overflow-hidden relative group cursor-pointer" @click="openModal('/certifications/pzn-typescript.jpe')">
            <img :src="'/certifications/pzn-typescript.jpe'" alt="Sertifikat TypeScript" class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Icon icon="ph:magnifying-glass-plus" class="text-white text-4xl" />
            </div>
          </div>
          <div class="p-6 w-full sm:w-2/3 flex flex-col justify-center">
            <h3 class="text-lg font-bold text-white mb-1">{{ t('cert.cert_2_title') }}</h3>
            <p class="text-sm text-slate-300 mb-2">{{ t('cert.cert_2_org') }}</p>
            <p class="text-xs text-slate-400 mb-1">{{ t('cert.cert_2_date') }}</p>
            <p class="text-xs text-slate-500 mb-4">{{ t('cert.cert_2_id') }}</p>
            <div class="flex gap-2">
              <span class="px-2 py-1 bg-white/10 text-white text-xs rounded flex items-center gap-1"><Icon icon="devicon-plain:typescript" class="text-base" /> TypeScript</span>
            </div>
          </div>
        </div>

        <!-- Cert Card 3 (Horizontal Layout) -->
        <div class="flex flex-col sm:flex-row bg-darker border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-500 transition-all">
          <div class="w-full sm:w-1/3 h-40 sm:h-auto bg-slate-900 border-b sm:border-b-0 sm:border-r border-slate-800 p-0 overflow-hidden relative group cursor-pointer" @click="openModal('/certifications/digitalent-sql.jpe')">
            <img :src="'/certifications/digitalent-sql.jpe'" alt="Sertifikat Database SQL" class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Icon icon="ph:magnifying-glass-plus" class="text-white text-4xl" />
            </div>
          </div>
          <div class="p-6 w-full sm:w-2/3 flex flex-col justify-center">
            <h3 class="text-lg font-bold text-white mb-1">{{ t('cert.cert_3_title') }}</h3>
            <p class="text-sm text-slate-300 mb-2">{{ t('cert.cert_3_org') }}</p>
            <p class="text-xs text-slate-400 mb-1">{{ t('cert.cert_3_date') }}</p>
            <p class="text-xs text-slate-500 mb-4">{{ t('cert.cert_3_id') }}</p>
            <div class="flex gap-2">
              <span class="px-2 py-1 bg-white/10 text-white text-xs rounded flex items-center gap-1"><Icon icon="devicon-plain:azuresqldatabase" class="text-base" /> SQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-opacity" @click="isModalOpen = false">
        <button class="absolute top-6 right-6 lg:top-10 lg:right-10 text-white hover:text-slate-400 transition-colors z-50 p-2" @click="isModalOpen = false">
          <Icon icon="ph:x-bold" class="text-4xl" />
        </button>
        <img :src="selectedCert!" class="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] transform scale-100 transition-transform" @click.stop>
      </div>
    </Teleport>
  </section>
</template>
