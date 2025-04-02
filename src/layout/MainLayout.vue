<template>
    <Navbar></Navbar>
    <div class="mt-28 plus-jakarta-sans-text">
        <div class="container mx-auto px-4 md:px-8 text-justify md:text-start">
            <div class="flex justify-center">
                <div class="max-w-3xl text-white text-md">
                    <slot></slot>
                    <hr class="border-t border-gray-700">
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss" scoped></style>