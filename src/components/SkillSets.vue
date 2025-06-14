<template>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(64px,1fr))] gap-3 mb-7">
    <div v-for="skill in api.skills" :key="`skill-${skill.id}`"
      class="relative group p-3 shadow-sm rounded-lg cursor-pointer w-full max-w-[80px] mx-auto">
      <img :src="`https://dknfcfcucbesgjhduhnv.supabase.co/storage/v1/object/public/skills
/${skill.icon}`" class="w-14 rounded" :class="{ 'dark:invert': skill.dark_invert }">
      <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 
              px-2 py-1 bg-gray-800 text-white text-xs rounded 
              opacity-0 group-hover:opacity-100 transition-opacity duration-200 
              pointer-events-none">
        {{ skill.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApiStore } from '@/stores/useApiStore.js';

const api = useApiStore()
</script>