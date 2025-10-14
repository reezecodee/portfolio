<script setup>
import ProfileSection from '@/components/ProfileSection.vue';
import MainNav from '@/components/MainNav.vue';
import ContactSection from '@/components/ContactSection.vue';
import ContentSection from '@/components/ContentSection.vue';

defineProps({
    header: String
})
</script>

<template>
    <div class="portfolio-container">
        <aside class="sidebar">
            <ProfileSection />
            <MainNav />
            <ContactSection />
        </aside>

        <main class="main-content">
            <ContentSection :header="header">
                <router-view /> 
            </ContentSection>
        </main>
    </div>
</template>

<style scoped>
.portfolio-container {
    display: flex;
    max-width: 1300px;
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
}

.sidebar {
    flex-basis: 400px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-cream);
    min-width: 0;
}

.main-content {
    flex-grow: 1;
    padding: 30px 50px;
    background-color: var(--bg-cream);
    position: relative;
    overflow-y: auto;
    max-height: calc(100vh - 80px);
    scrollbar-width: none;
    -ms-overflow-style: none;
}
</style>