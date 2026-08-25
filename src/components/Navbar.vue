<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t, locale } = useI18n()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')
let observer: IntersectionObserver | null = null

const toggleLanguage = () => {
  locale.value = locale.value === 'id' ? 'en' : 'id'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Setup intersection observer for scroll spy
  const options = {
    root: null,
    rootMargin: '-30% 0px -70% 0px',
    threshold: 0
  }
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)
  
  // Observe sections
  const sections = ['home', 'about', 'resume', 'portfolio', 'contact']
  setTimeout(() => {
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer?.observe(el)
    })
  }, 100) // Small delay to ensure DOM is ready
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})
</script>

<template>
  <nav :class="['fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-darker/80 border-b border-white/5', { 'shadow-lg shadow-black/20': isScrolled }]">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <router-link to="#" class="text-2xl font-bold text-white tracking-tighter flex items-center gap-2 group">
        <Icon icon="ph:terminal-window" class="text-white transition-colors duration-300" />
        <span>{{ t('navbar.logo') }}</span>
      </router-link>
      
      <div class="hidden md:flex items-center gap-8 text-sm font-medium">
        <router-link :to="{ hash: '#home' }" :class="['transition-colors duration-300', activeSection === 'home' ? 'text-white font-bold' : 'text-slate-400 hover:text-white']">{{ t('navbar.home') }}</router-link>
        <router-link :to="{ hash: '#about' }" :class="['transition-colors duration-300', activeSection === 'about' ? 'text-white font-bold' : 'text-slate-400 hover:text-white']">{{ t('navbar.about') }}</router-link>
        <router-link :to="{ hash: '#resume' }" :class="['transition-colors duration-300', activeSection === 'resume' ? 'text-white font-bold' : 'text-slate-400 hover:text-white']">{{ t('navbar.resume') }}</router-link>
        <router-link :to="{ hash: '#portfolio' }" :class="['transition-colors duration-300', activeSection === 'portfolio' ? 'text-white font-bold' : 'text-slate-400 hover:text-white']">{{ t('navbar.portfolio') }}</router-link>
        
        <!-- Language Toggle -->
        <button @click="toggleLanguage" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 uppercase font-bold" title="Toggle Language">
          <Icon icon="ph:translate" class="text-lg" />
          {{ locale }}
        </button>

        <!-- Solid Button transition -->
        <router-link :to="{ hash: '#contact' }" class="px-5 py-2 rounded-full border border-white bg-white text-darker font-bold hover:bg-silver hover:scale-105 transition-all duration-300 shadow-glow-white">{{ t('navbar.contact') }}</router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-2xl text-slate-300 hover:text-white" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <Icon icon="ph:list" />
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-dark border-b border-slate-800 p-4 absolute w-full flex-col gap-4 text-center shadow-2xl flex">
      <router-link :to="{ hash: '#home' }" :class="['block py-2 hover:text-white', activeSection === 'home' ? 'text-white font-bold bg-white/5 rounded-lg' : 'text-slate-300']" @click="isMobileMenuOpen = false">{{ t('navbar.home') }}</router-link>
      <router-link :to="{ hash: '#about' }" :class="['block py-2 hover:text-white', activeSection === 'about' ? 'text-white font-bold bg-white/5 rounded-lg' : 'text-slate-300']" @click="isMobileMenuOpen = false">{{ t('navbar.about') }}</router-link>
      <router-link :to="{ hash: '#resume' }" :class="['block py-2 hover:text-white', activeSection === 'resume' ? 'text-white font-bold bg-white/5 rounded-lg' : 'text-slate-300']" @click="isMobileMenuOpen = false">{{ t('navbar.resume') }}</router-link>
      <router-link :to="{ hash: '#portfolio' }" :class="['block py-2 hover:text-white', activeSection === 'portfolio' ? 'text-white font-bold bg-white/5 rounded-lg' : 'text-slate-300']" @click="isMobileMenuOpen = false">{{ t('navbar.portfolio') }}</router-link>
      <button @click="toggleLanguage" class="block py-2 text-slate-300 hover:text-white flex items-center justify-center gap-2 uppercase font-bold w-full">
        <Icon icon="ph:translate" class="text-lg" /> {{ locale === 'id' ? 'English' : 'Indonesia' }}
      </button>
      <router-link :to="{ hash: '#contact' }" class="block py-2 bg-white text-darker font-bold rounded-full mt-2" @click="isMobileMenuOpen = false">{{ t('navbar.contact') }}</router-link>
    </div>
  </nav>
</template>
