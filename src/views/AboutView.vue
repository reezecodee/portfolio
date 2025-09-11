<template>
    <MainLayout>
        <h1 class="text-4xl mb-5 text-start font-extrabold pb-1 plus-jakarta-sans-heading">
            水に流す</h1>
        <p class="mb-7 text-start">Hi there! My name is <b>Atyla Azfa Al Harits</b>, an Information Systems student at
            Bina Sarana Informatika University with a strong passion for Backend Development. I have hands-on experience
            building and developing server-side web applications using modern technologies like TypeScript, ExpressJS,
            Laravel, and MySQL
        </p>
        <p class="mb-7 text-start">My goal is to grow into a skilled developer, and to achieve that, I am constantly
            expanding my expertise. Currently, I'm delving into Mobile Development with Flutter for cross-platform apps
            and exploring the fundamentals of Machine Learning.</p>
        <p class="mb-7 text-start">Based in Tasikmalaya, West Java for my studies, I spend my free time watching anime
            and learning new languages, including English and Japanese. I'm always enthusiastic about tackling new
            challenges and am open to collaboration. <b>Feel free to reach out!</b>.
        </p>
        <h2 class="text-2xl text-start font-extrabold py-1 plus-jakarta-sans-heading">
            Experiences</h2>
        <p class="mb-5 text-start">A few highlights from my journey so far.</p>
        <Experiences />
        <h2 class="text-2xl text-start font-extrabold py-1 plus-jakarta-sans-heading">
            Tools & Technologies</h2>
        <p class="mb-5 text-start">I'm not too confident in my abilities yet, but this is what I normally use.</p>
        <SkillSets />
        <h2 class="text-2xl text-start font-extrabold py-1 plus-jakarta-sans-heading">
            Connect with Me</h2>
        <p class="mb-5 text-start">Let me know if you’d like to collaborate—just reach out!</p>
        <SocialMedia />
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';
import SkillSets from '@/components/SkillSets.vue';
import SocialMedia from '@/components/SocialMedia.vue';
// import Crypto from '@/components/Crypto.vue';
import Experiences from '@/components/Experiences.vue';

</script>