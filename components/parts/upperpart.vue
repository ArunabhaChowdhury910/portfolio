<template>
    <div class=" w-full items-center flex h-full px-3 py-32 font-Space">
       
       <div v-motion-slide-left  class=" w-1/2 h-full flex flex-col justify-center  px-3 ">
          <h1 class="text-8xl font-bold text-yell dark:text-or">HELLO,</h1>
          <h1 class="text-6xl font-semibold text-bl dark:text-ye">I AM ARUNABHA</h1>
          <div class="bg-transparent w-full h-[20px]"></div>
          <p class="bg-bgog text-bl rounded-lg w-fit px-1.5">Front end developer</p>
          <div class="bg-transparent w-full h-[20px]"></div>
          <p class="font-Space dark:text-white">A budding engineer with an insatiable passion for crafting digital marvels. As I traverse the exciting realms of technology, I find myself enchanted by the intricate dance of code and creativity. As a tech enthusiast, I embark on a journey fueled by curiosity, armed with Java, C++, and C skills, delving into front-end development using Nuxt3 and Tailwind CSS to craft captivating digital experiences where innovation meets aesthetics.</p>
         
          <div class="bg-transparent w-full h-[20px]"></div>
          <boxbtn :subject="sub" class="w-72 bg-bgog "></boxbtn>
      </div>
      
      <div  v-motion-fade class=" flex wwww w-1/2 h-3/4 items-center  justify-center ">
        <!-- <img src="/assets/images/6.png" class="translate-x-8 h-full w-5/6" /> -->
        <!-- <div class="w-screen h-screen bg-white flex items-center justify-center"> -->
        <img src="/assets/images/bac08k.png" class="w-fit h-fit -translate-y-[8px] -translate-x-[px] absolute "/>
        <div class="w-96 h-96 border-or border-8 p-52  absolute border-l-0 anime  border-r-0 border-t-0 rounded-full "></div>
        <div class="w-96 h-96 border-ye border-8 p-44 border-b-0  border-r-0 anime border-l-0 rounded-full absolute "></div>
        <div class="w-96 h-96 border-mg border-8 absolute border-l-0 p-40 anime border-r-0 border-t-0 rounded-full "></div>
 </div>
      </div>
      
   <!-- </div>    -->

   <!-- <div class="w-full h-fit py-20">  -->
    <!-- <ul class="flex justify-center gap-9 font-bold">
      <li @click="S" class="hover:text-amber-500 hover:underline hover:cursor-pointer">Skills</li>
      <li @click="P" class="hover:text-amber-500 hover:underline hover:cursor-pointer">Projects</li>
      <li @click="E" class="hover:text-amber-500 hover:underline hover:cursor-pointer">Education</li>
      <li @click="A" class="hover:text-amber-500 hover:underline hover:cursor-pointer">Achievemts</li>
    </ul> -->

    <!-- <div v-if="isVisibleS" class="flex justify-center pt-3 ">
          <div v-motion-slide-top class="w-fit h-fit  duration-200 py-6 flex justify-around px-10 gap-20 items-start ">
            <Cards v-for="feature in featureSkills" :contens="feature.contens" />
          </div>
    </div>
    <div v-if="isVisibleE" class="flex justify-center pt-3 ">
      <div v-motion-slide-top class="w-fit h-fit  duration-200 py-6 flex justify-around px-10 gap-20 items-start ">
            <Cards v-for="feature in featureEdu" :contens="feature.contens" />
          </div>
    </div>
    <div v-if="isVisibleA" class="flex justify-center pt-3 ">
      <div v-motion-slide-top class="w-fit h-fit  duration-200 py-6 flex justify-around px-10 gap-20 items-start ">
      <Cards v-for="feature in featureAchv" :contens="feature.contens" />
    </div>
    </div>
    <div v-if="isVisibleP" class="flex justify-center pt-3 ">
      <div v-motion-slide-top class="w-fit h-fit  duration-200 py-6 flex justify-around px-10 gap-20 items-start ">
      <Cards v-for="feature in featurePrjt" :contens="feature.contens" />
    </div>
    </div> -->
   <!-- </div> -->
</template>

<script lang="ts" setup>
    import Cards from '/components/cards/cards.vue'
    import boxbtn from '/components/buttons/boxbtn.vue'
    const sub = ref("HIRE ME");
    
  

  const isVisibleS = ref(false);
  const isVisibleE = ref(false);
  const isVisibleA = ref(false);
  const isVisibleP = ref(false);

function S() {
  isVisibleS.value = !isVisibleS.value;
  isVisibleP.value = false;
  isVisibleE.value = false;
  isVisibleA.value = false;

}
function P() {
  isVisibleP.value = !isVisibleP.value;
  isVisibleS.value = false;
  isVisibleE.value = false;
  isVisibleA.value = false;
}
function E() {
  isVisibleE.value = !isVisibleE.value;
  isVisibleS.value = false;
  isVisibleP.value = false;
  isVisibleA.value = false;
}
function A() {
  isVisibleA.value = !isVisibleA.value;
  isVisibleS.value = false;
  isVisibleP.value = false;
  isVisibleE.value = false;

}

const featureSkills:{contens: string}[] = [
        {contens: "C"},
        {contens: "C++"},
        {contens: "JAVA"},
        {contens: "HTML/CSS"},
        {contens: "NUXT"},
    ]

    const featureEdu:{contens: string}[] = [
        {contens: "Persuing: B.Tech in CSE from Techno India University with sepecialisation in AI and ML"},
        
    ]

    const featurePrjt:{contens: string}[] = [
        {contens: "Helmdall"},
        {contens: "NoteDrive"},
        {contens: "Samklang"},
       
    ]

    const featureAchv:{contens: string}[] = [
        {contens: "KAVACH 2023, CYBER SEC. HACKATHON WINNER"},
        {contens: "SMART INSIA HACKATHON 2023, WINNWE"},
        
    ]
</script>

<style scoped>
.anime{
  animation: spin 5s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  } 
  100% {
    transform: rotate(360deg);
  }
}
</style>