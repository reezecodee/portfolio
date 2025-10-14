<script setup>
defineProps({
    header: String
})
</script>

<template>
    <section class="content-section">
        <h1>{{ header }}</h1>
        <slot/>
    </section>
</template>

<style scoped>
.content-section h1 {
    font-size: 40px;
    font-weight: 300;
    letter-spacing: 4px;
    color: var(--text-dark);
    text-transform: uppercase;
    margin-top: 0;
}

.content-section h1::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ddd;
    margin-top: 10px;
}
</style>