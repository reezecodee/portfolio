<template>
    <MainLayout>
        <h1
            class="text-4xl mb-5 text-start font-extrabold pb-1 plus-jakarta-sans-heading">
            Hello, I'am Reeze...</h1>
        <p class="mb-7 text-start">I am someone who aspires to become a Backend Developer with the goal of becoming a
            skilled developer. Usually, I build web applications using technologies like Laravel, Livewire, VueJS, or
            AdonisJS. However, in the past few months, I have been trying to learn mobile applications with Dart
            Flutter.</p>
        <p class="mb-7 text-start">Besides programming, I am an undergraduate student in Information Systems currently
            studying at a university in the city of Tasikmalaya. Outside of class time, I make time to watch Anime or
            learn languages like English and Japanese. Currently, I live in the city of Tasikmalaya, West Java to pursue
            my studies. <b>Don't hesitate to collaborate with me!</b>.
        </p>
        <h2
            class="text-2xl mb-5 text-start font-extrabold p-1 plus-jakarta-sans-heading">
            Skill Sets</h2>
        <SkillSets />
        <h2
            class="text-2xl mb-5 text-start font-extrabold p-1 plus-jakarta-sans-heading">
            Get in Touch</h2>
        <SocialMedia />
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';
import SkillSets from '@/components/SkillSets.vue';
import SocialMedia from '@/components/SocialMedia.vue';

</script>

<style lang="scss" scoped></style>