<template>
    <MainLayout>
        <h1
            class="text-4xl mb-5 text-start font-extrabold bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text text-transparent pb-1">
            Blogs</h1>
        <div class="w-screen">
            <div class="flex gap-3 items-center mb-6 group">
                <div
                    class="bg-slate-800/70 hover:bg-slate-800/90 duration-200 rounded-full text-center w-12 h-12 flex items-center justify-center font-bold">
                    ID
                </div>
                <div>
                    <h4 class="group-hover:text-white">Apa itu HTML? Bagaimana awal mulainya?</h4>
                    <p class="text-slate-400 text-sm">Mar 19, 2024</p>
                </div>
            </div>
            <div class="flex gap-3 items-center mb-6 group">
                <div
                    class="bg-slate-800/70 hover:bg-slate-800/90 duration-200 rounded-full text-center w-12 h-12 flex items-center justify-center font-bold">
                    EN
                </div>
                <div>
                    <h4 class="group-hover:text-white">Apa itu HTML? Bagaimana awal mulainya?</h4>
                    <p class="text-slate-400 text-sm">Mar 19, 2024</p>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';


</script>

<style lang="scss" scoped></style>