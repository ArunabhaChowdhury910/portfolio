<template>
 <div class="w-screen h-screen bg-white flex items-center justify-center">
  <img src="/assets/images/bac08k.png" class="w-fit h-fit p-96 absolute"/>
  <div class="w-96 h-96 border-or border-8 p-52 delay-1000 absolute border-l-0 anime  border-r-0 border-t-0 rounded-full "></div>
  <div class="w-96 h-96 border-ye border-8 p-44 border-b-0 delay-1000 border-r-0 anime border-l-0 rounded-full absolute"></div>
 </div>
</template>

<script setup lang="ts">
const contact:{cons: string, main:string}[] = [
        {cons: "Address",
        main: "Address"},
        {cons: "Address",
        main: "Address"},
        {cons: "Address",
        main: "Address"} 
        
    ]
</script>

<style lang="postcss" scoped>
.anime{
  animation: spin 5s linear infinite;
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
