<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navLinks = computed(() => {
    const mainRoute = router.options.routes.find(route => route.path === '/');
    return mainRoute ? mainRoute.children.filter(child => child.meta && child.meta.header) : [];
});

const navRef = ref(null); 
let isDown = false;
let startX;
let scrollLeft;

const handleMouseDown = (e) => {
    isDown = true;
    navRef.value.classList.add('active-drag');
    startX = e.pageX - navRef.value.offsetLeft;
    scrollLeft = navRef.value.scrollLeft;
};

const handleMouseLeave = () => {
    isDown = false;
    navRef.value.classList.remove('active-drag');
};

const handleMouseUp = () => {
    isDown = false;
    navRef.value.classList.remove('active-drag');
};

const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - navRef.value.offsetLeft;
    const walk = (x - startX) * 2; 
    navRef.value.scrollLeft = scrollLeft - walk;
};
</script>

<template>
    <div class="wrapper-center">
        <nav class="main-nav" ref="navRef" @mousedown="handleMouseDown" @mouseleave="handleMouseLeave"
            @mouseup="handleMouseUp" @mousemove="handleMouseMove">
            <ul>
                <li v-for="link in navLinks" :key="link.name">
                    <router-link :to="{ name: link.name }" :title="link.meta.title" active-class="active" draggable="false"
                        :exact-active-class="link.path === '' ? 'active' : ''">
                        {{ link.meta.header }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.wrapper-center {
    display: flex;
    justify-content: center;
    user-select: none;
}

.main-nav {
    width: 80%;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.main-nav::-webkit-scrollbar {
    display: none;
}

.main-nav ul {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    padding: 15px 30px;
}

.main-nav li {
    flex-shrink: 0;
}

.main-nav a {
    text-decoration: none;
    color: var(--text-gray);
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s ease;
    white-space: nowrap;
}

.main-nav a:hover {
    color: var(--text-dark);
}

.main-nav a.active {
    color: var(--text-orange);
    font-weight: 600;
}

.main-nav.active-drag {
    cursor: grabbing;
    cursor: -webkit-grabbing;
}
</style>