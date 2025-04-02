<template>
    <MainLayout>
        <h1
            class="text-4xl mb-5 text-start font-extrabold pb-1">
            Blogs</h1>
        <div class="w-screen">
            <div class="flex gap-3 items-center mb-6 ">
                <div
                    class="bg-slate-100 dark:bg-slate-800/70 duration-200 rounded-full text-center w-12 h-12 flex items-center justify-center font-bold">
                    ID
                </div>
                <a href="https://medium.com/@reezedev/git-semantic-commit-message-d2cc926f72f3" target="_blank">
                    <div>
                        <h4 class="hover:text-slate-600">Pesan semantik pada perintah commit Git</h4>
                        <p class="text-slate-400 text-sm">Jan 29, 2024
                        </p>
                    </div>
                </a>
            </div>
            <div class="flex gap-3 items-center mb-6 ">
                <div
                    class="bg-slate-100 dark:bg-slate-800/70 duration-200 rounded-full text-center w-12 h-12 flex items-center justify-center font-bold">
                    ID
                </div>
                <a href="https://medium.com/@reezedev/pengertian-logika-algoritma-121cfac54408" target="_blank">
                    <div>
                        <h4 class="hover:text-slate-600">Pengertian Logika & Algoritma</h4>
                        <p class="text-slate-400 text-sm">Nov 19, 2023 - 2 min read
                        </p>
                    </div>
                </a>
            </div>
            <div class="flex gap-3 items-center mb-6 ">
                <div
                    class="bg-slate-100 dark:bg-slate-800/70 duration-200 rounded-full text-center w-12 h-12 flex items-center justify-center font-bold">
                    ID
                </div>
                <a href="https://medium.com/@reezedev/apa-itu-aplikasi-mpa-dan-spa-137555a2d111" target="_blank">
                    <div>
                        <h4 class="hover:text-slate-600">Apa itu aplikasi MPA dan SPA? Manakah yang lebih baik?</h4>
                        <p class="text-slate-400 text-sm">Nov 18, 2023 - 2 min read
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';


</script>

<style lang="scss" scoped></style>