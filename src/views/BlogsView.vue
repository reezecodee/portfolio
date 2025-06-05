<template>
    <MainLayout>
        <h1 class="text-4xl mb-1 text-start font-extrabold pb-1 plus-jakarta-sans-heading">
            Blogs</h1>
        <p class="mb-7 text-start">Some blogs that i have written.</p>
        <div class="w-full">
            <div class="flex gap-3 items-center mb-6 ">
                <div
                    class="bg-slate-100 dark:bg-slate-800/70 duration-200 rounded-full text-center w-12 min-w-12 min-h-12 h-12 py-2 flex items-center justify-center font-bold">
                    ID
                </div>
                <a href="https://medium.com/@reezedev/git-semantic-commit-message-d2cc926f72f3" target="_blank"
                    class="inline-block">
                    <div>
                        <h4 class="hover:text-slate-600">Pesan semantik pada perintah commit Git</h4>
                        <p class="text-slate-400 text-sm">Jan 29, 2024
                        </p>
                    </div>
                </a>
            </div>
            <div class="flex gap-3 items-center mb-6 ">
                <div
                    class="bg-slate-100 dark:bg-slate-800/70 duration-200 rounded-full text-center w-12 min-w-12 min-h-12 h-12 py-2 flex items-center justify-center font-bold">
                    ID
                </div>
                <a href="https://medium.com/@reezedev/pengertian-logika-algoritma-121cfac54408" target="_blank"
                    class="inline-block">
                    <div>
                        <h4 class="hover:text-slate-600">Pengertian Logika & Algoritma</h4>
                        <p class="text-slate-400 text-sm">Nov 19, 2023 - 2 min read
                        </p>
                    </div>
                </a>
            </div>
            <div class="flex gap-3 items-start mb-6">
                <div
                    class="bg-slate-100 dark:bg-slate-800/70 duration-200 rounded-full text-center w-12 min-w-12 min-h-12 h-12 py-2 flex items-center justify-center font-bold">
                    ID
                </div>
                <a href="https://medium.com/@reezedev/apa-itu-aplikasi-mpa-dan-spa-137555a2d111" target="_blank"
                    class="inline-block">
                    <div>
                        <h4 class="hover:text-slate-600">Apa itu aplikasi MPA dan SPA? Manakah yang lebih baik?</h4>
                        <p class="text-slate-400 text-sm">Nov 18, 2023 - 2 min read</p>
                    </div>
                </a>
            </div>

        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';
</script>
