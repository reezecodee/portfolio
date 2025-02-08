<template>
    <footer>
        <div
            class="mx-auto font-semibold text-center py-6 text-xs text-gray-200 leading-5">
            &copy; Copyright {{ new Date().getFullYear() }} by Reeze <br class="block md:hidden"> Made with <a
                href="https://vuejs.org/" class="underline">VueJS</a> and <a href="https://tailwindcss.com/"
                class="underline">TailwindCSS</a>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped></style>