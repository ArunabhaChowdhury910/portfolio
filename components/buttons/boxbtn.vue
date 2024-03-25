<template>
    
        <nuxt-link to="/" class="button rounded-lg flex justify-center text-bl items-center w-fit px-4 py-1 h-fit bg-yell">{{ subject }}</nuxt-link>
    
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const { subject} = defineProps<{
    subject: string
}>();
</script>

<style scoped>

</style>