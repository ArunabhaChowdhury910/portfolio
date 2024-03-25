<template>
    <div class=" max-w-xl rounded hover:border-or hover:border overflow-hidden shadow-lg hover:-translate-y-6 hover:duration-100 ">
                <div class="px-6 py-4 ">
                     <p class="dark:text-white   flex justify-center items-center text-4xl min-w-36 min-h-36 w-full h-fit max-[560px]:text-lg max-[560px]:font-bold item-center ">
                         {{subject}}
                         
                     </p>
                     
                  </div>
              </div>
</template>
 
<script setup lang="ts">
    import { defineProps } from 'vue';
const { subject} = defineProps<{
    subject: string
}>();
</script>

<style lang="scss" scoped>

</style>