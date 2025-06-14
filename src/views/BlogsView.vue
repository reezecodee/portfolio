<template>
    <MainLayout>
        <h1 class="text-4xl mb-1 text-start font-extrabold pb-1 plus-jakarta-sans-heading">
            Blogs</h1>
        <p class="mb-7 text-start">Some blogs that i have written.</p>
        <div class="w-full">
            <div v-for="blog in blogs" :key="`blog-${blog.id}`" class="flex gap-3 items-center mb-6 ">
                <div
                    class="bg-slate-100 dark:bg-slate-800/70 duration-200 rounded-full text-center w-12 min-w-12 min-h-12 h-12 py-2 flex items-center justify-center font-bold">
                    {{ blog.lang_type }}
                </div>
                <a :href="blog.link" target="_blank" class="inline-block">
                    <div>
                        <h4 class="hover:text-slate-600">{{ blog.title }}</h4>
                        <p class="text-slate-400 text-sm">{{ blog.date }}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const blogs = ref(null)

onMounted(async () => {
    const res = await axios.get('https://reeze-portfolio-api.up.railway.app/blogs')
    blogs.value = res.data
})
</script>
