<template>
    <MainLayout>
        <h1 class="text-4xl mb-5 text-start font-extrabold pb-1 plus-jakarta-sans-heading">
            水に流す</h1>
        <p class="mb-7 text-start">Hi there! My name is <b>Atyla Azfa Al Harits</b>, but people usually call me
            <b>Harits</b> or <b>Al</b>.
            So, who is <b>Reeze</b>? Well, <b>Reeze</b> is the name I use on social media. Sometimes I feel a bit
            awkward using my real name because people often assume I'm a girl—when actually, I'm a guy. I'm often active
            on Facebook and LinkedIn to share programming experiences.
        </p>
        <p class="mb-7 text-start">I'm someone who aspires to become a <b>Backend Developer</b> with the goal of
            becoming a
            skilled developer. Usually, I build web applications using technologies like Laravel, Livewire, VueJS, or
            AdonisJS. However, in the past few months, I have been trying to learn mobile applications with Dart
            Flutter.</p>
        <p class="mb-7 text-start">Besides programming, I'm an undergraduate student in Information Systems currently
            studying at a university in the city of Tasikmalaya. Outside of class time, I make time to watch Anime or
            learn languages like English and Japanese. Currently, I live in the city of Tasikmalaya, West Java to pursue
            my studies. <b>Don't hesitate to collaborate with me!</b>.
        </p>
        <h2 class="text-2xl text-start font-extrabold py-1 plus-jakarta-sans-heading">
            Tools & Technologies</h2>
        <p class="mb-5 text-start">I'm not too confident in my abilities yet, but this is what I normally use.</p>
        <SkillSets />
        <h2 class="text-2xl text-start font-extrabold py-1 plus-jakarta-sans-heading">
            Connect with Me</h2>
        <p class="mb-5 text-start">Let me know if you’d like to collaborate—just reach out!</p>
        <SocialMedia />
        <div v-if="false">
            <h2 class="text-2xl text-start font-extrabold py-1 plus-jakarta-sans-heading">
                Crypto Currencies</h2>
            <p class="mb-5 text-start">Just Buying & Selling, No Risk No Money.</p>
            <Crypto />
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';
import SkillSets from '@/components/SkillSets.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import Crypto from '@/components/Crypto.vue';

</script>