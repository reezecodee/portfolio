<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="Component" :header="route.meta.header" />
  </RouterView>
</template>

<style scoped></style>
