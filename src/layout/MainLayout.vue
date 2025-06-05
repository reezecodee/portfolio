<template>
    <Navbar />
    <div class="mt-28 plus-jakarta-sans-text">
        <div class="container mx-auto px-4 md:px-8 text-justify md:text-start min-h-screen">
            <div class="flex justify-center">
                <div class="max-w-full md:max-w-3xl w-full text-black dark:text-white text-md">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-full md:max-w-3xl w-full">
            <hr class="border-t border-gray-700 mx-auto">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>