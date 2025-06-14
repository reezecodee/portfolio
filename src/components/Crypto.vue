<template>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(64px,1fr))] gap-3 mb-7">
        <div v-for="crypto in cryptos" :key="`crypto-${crypto.id}`"
            class="group p-3 cursor-pointer w-full max-w-[80px] mx-auto">
            <img :src="`https://dknfcfcucbesgjhduhnv.supabase.co/storage/v1/object/public/cryptos
/${crypto.icon}`" class="w-14 rounded mb-1">
            <p class="text-center text-xs">{{ crypto.percent }}%</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const cryptos = ref(null)

onMounted(async () => {
    const res = await axios.get('https://reeze-portfolio-api.up.railway.app/cryptos')
    cryptos.value = res.data
})
</script>