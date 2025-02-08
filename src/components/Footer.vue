<template>
    <footer>
        <div
            class="mx-auto font-semibold text-center py-6 text-xs text-gray-200 leading-5">
            &copy; Copyright {{ new Date().getFullYear() }} by Reeze Dev <br class="block md:hidden"> Made with <a
                href="https://vuejs.org/" class="text-[#00DC82]">Vue.js</a> and <a href="https://tailwindcss.com/"
                class="text-[#0EA5E9]">TailwindCSS</a>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped></style>