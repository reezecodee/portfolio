<template>
    <MainLayout>
        <h1 class="text-4xl mb-1 text-start font-extrabold pb-1 plus-jakarta-sans-heading">
            Guestbook</h1>
        <p class="mb-7 text-start">Send me a message. Go to <a class="font-bold underline"
                href="https://guestbook-reeze.vercel.app" target="_blank">guestbook-reeze.vercel.app</a> to write a
            message.</p>
        <div class="w-full">
            <div class="flex gap-3 items-center mb-6 border rounded-lg p-3 dark:shadow-white shadow-sm">
                <img src="https://avatars.githubusercontent.com/u/159593076?v=4"
                    class="rounded-full text-center w-12 min-w-12 min-h-12 h-12">
                <div>
                    <h4>Infokan ngoding bareng bang😂</h4>
                    <p class="text-slate-400 text-sm">Al Harits - Apr 04, 2025
                    </p>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';


</script>

<style lang="scss" scoped></style>