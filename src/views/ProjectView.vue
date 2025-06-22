<template>
    <MainLayout>
        <h1 class="text-4xl mb-1 text-start font-extrabold pb-1 plus-jakarta-sans-heading">
            My Projects</h1>
        <p class="mb-7 text-start">Some projects that i have worked on.</p>
        <div v-for="(projects, category) in api.projects" :key="category" class="mb-7">
            <h2 class="text-2xl mb-5 text-start font-extrabold pb-1 plus-jakarta-sans-heading">
                {{ category }}</h2>
            <div class="flex flex-wrap gap-4 mb-7">
                <RouterLink to="" v-for="project in projects" :key="project.id">
                    <div
                        class="w-full md:w-[15.3rem] bg-white hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800/70 duration-200 shadow-lg dark:shadow-gray-800 overflow-hidden cursor-pointer">
                        <img :src="`https://dknfcfcucbesgjhduhnv.supabase.co/storage/v1/object/public/projects/${project.thumbnail}`"
                            class="w-full h-full md:h-32 object-fill">
                        <div class="p-4">
                            <h3 class="font-bold text-lg md:text-base mb-1">{{ project.title }}</h3>
                            <p class="text-base md:text-xs text-gray-800 dark:text-gray-300 mb-3">{{ project.description
                                }}</p>
                            <div class="flex justify-end items-center gap-2">
                                <img v-for="icon in project.skill_icons" width="24" height="24"
                                    :src="`https://dknfcfcucbesgjhduhnv.supabase.co/storage/v1/object/public/icons/brand-${icon}.svg`"
                                    class="dark:invert">
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="flex justify-center mt-6" v-if="api.projects[category].length >= 6">
                <button v-if="hasMore[category]" @click="callOthersData(category)"
                    class="px-6 py-3 font-semibold border border-gray-300 rounded-lg text-sm text-black dark:text-white hover:bg-gray-100 duration-300 hover:dark:text-black transition-colors">
                    Lihat Selanjutnya...
                </button>
                <button v-else @click="showLess(category)"
                    class="px-6 py-3 font-semibold border border-gray-300 rounded-lg text-sm text-black dark:text-white hover:bg-gray-100 duration-300 hover:dark:text-black transition-colors">
                    Lihat Lebih Sedikit...
                </button>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';
import { ref, onMounted, watch } from 'vue';
import { useApiStore } from '@/stores/useApiStore.js';
import axios from 'axios';

const api = useApiStore()
const offsets = ref({})
const hasMore = ref({})
const metas = ref({})

const callOthersData = async (projectType) => {
    if (offsets.value[projectType] == null) {
        offsets.value[projectType] = api.projects[projectType]?.length || 0
    }

    const res = await axios.get(`https://reeze-portfolio-api.up.railway.app/projects/specifics?offset=${offsets.value[projectType]}&project_type=${projectType}`)

    if (!api.projects[projectType]) {
        api.projects[projectType] = []
    }

    api.projects[projectType].push(...res.data.data)
    offsets.value[projectType] += res.data.data.length

    metas.value[projectType] = res.data.meta  // <-- Simpan meta per kategori
    hasMore.value[projectType] = res.data.meta?.has_more ?? false
}

const showLess = (projectType) => {
    api.projects[projectType] = api.projects[projectType].slice(0, 6)
    offsets.value[projectType] = api.projects[projectType].length

    // Reset meta, supaya next fetch bener
    metas.value[projectType] = null

    // Default: assume masih ada data (biar tombol "Lihat Selanjutnya" muncul)
    hasMore.value[projectType] = true
}

watch(
    () => api.projects,
    (newProjects) => {
        for (const category in newProjects) {
            offsets.value[category] = newProjects[category]?.length || 0

            if (metas.value[category]) {
                hasMore.value[category] = metas.value[category].has_more
            } else {
                hasMore.value[category] = true
            }
        }
    },
    { immediate: true, deep: true }
)

</script>