<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from "pinia";
import { useThemeStore } from "./stores/useThemeStore.js";

const themeStore = useThemeStore();
const { animationActive, isDarkMode, circlePositionX, circlePositionY } = storeToRefs(themeStore);
</script>

<template>
  <div v-if="animationActive" class="theme-overlay"
    :class="{ 'dark-overlay': !isDarkMode, 'light-overlay': isDarkMode }" :style="{
      '--circle-x': `${circlePositionX}px`,
      '--circle-y': `${circlePositionY}px`
    }"></div>
  <RouterView />
</template>

<style scoped>
.theme-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  pointer-events: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: var(--circle-x);
  top: var(--circle-y);
}

.dark-overlay {
  background-color: #ffffff;
  animation: circle-expand 1s cubic-bezier(0.25, 1, 0.3, 1) forwards;
}

.light-overlay {
  background-color: #ffffff;
  animation: circle-shrink 1s cubic-bezier(0.25, 1, 0.3, 1) forwards;
}

@keyframes circle-expand {
  0% {
    width: 0px;
    height: 0px;
  }

  100% {
    width: 300vw;
    height: 300vw;
  }
}

@keyframes circle-shrink {
  0% {
    width: 300vw;
    height: 300vw;
  }

  100% {
    width: 0px;
    height: 0px;
  }
}
</style>
