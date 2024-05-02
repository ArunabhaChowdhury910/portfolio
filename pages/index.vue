<template>
    <div class="text-bl dark:text-white  pl-3 py-3 w-screen max-h-full justify-right space-x-6 font-Space">
      <a href="https://www.instagram.com/__arunabha28__/" class="hover:text-or">instagram</a>
      <a href="" class="hover:text-or">linkedin</a>
      <a href="" class="hover:text-or">facebook</a>
      <a href="" class="hover:text-or">github</a>
    </div>
    <PartsUpperpart/>
    
    <div class="w-full  items-center flex-1" >
      <Features/> 
    </div>
    
    <div class=" flex max-w-full h-full  justify-center gap-10 pt-20">
      <Cards v-for="feature in featureCards"  :subject="feature.subject" class=""/>
    </div>

    <div class="font-Space font-bold w-full h-full px-10 space-y-10 pt-32">
        <div>
          <h2 class="text-4xl pb-6 dark:text-ye">MY PROJECTS</h2>
        </div>
        
        <div class="flex  justify-around">
            <ol class="relative border-s  dark:border-mg">                  
                <li v-for="feat in feature" class="space-x-12 " @click="setPal(feat.number)">            
                    <span  class="absolute flex items-center justify-center w-6 h-6 bg-or rounded-full -start-3 ring-8 ring-or  dark:ring-ye dark:bg-ye hover:dark:bg-or hover:dark:ring-or cursor-pointer">{{feat.number}}
                    </span>
                    <h3 class="flex items-center mb-1 -translate-y-2 text-lg font-semibold dark:text-or ">{{feat.subject}} </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-mg">{{feat.mid}}</time>
                    <p class="mb-4 max-w-lg text-base font-normal text-bgbl dark:text-white">{{ feat.body }}</p>
                    
                    
    
                </li>
                
                
            </ol>
            <div  v-if="pal===1" class="  w-3/4 rounded-lg ">
              <img v-motion-fade-visible src="/assets/images/h-sec.png" class="transition-all duration-[500ms]"/>
            </div>
            <div v-if="pal===2 " class="  w-3/4 rounded-lg ">
              <img v-motion-fade-visible src="/assets/images/notedrive.jpg" class="transition-all duration-[500ms] mix-blend-exclusion rounded-lg"/>
            </div>
            <div v-if="pal===3" class="  w-3/4 rounded-lg ">
              <img v-motion-fade-visible src="/assets/images/user-dashboard.png" class="transition-all duration-[500ms]"/>
            </div>
        </div>



    </div>

    <div class="flex justify-center mt-32">
      <div class="w-full h-fit flex justify-center">
        <h1 class="text-6xl font-Space font-bold pb-10 dark:text-mg">GET IN TOUCH</h1>
      </div>
    </div>
    <Contact></Contact>
               
     
    
    
    


    
    
</template>


<script lang="ts" setup>
  import Features from '/components/parts/Features.vue'
  import PartsUpperpart from '/components/parts/upperpart.vue'
  import Cards from '/components/cards/cards.vue'
  import Contact from '/components/parts/contact.vue'
  
  const card  = ref('SIH');
  const sub = ref("My project");
    const featureCards:{subject: string}[] = [
        {subject: "SMART INDIA HACKATHON WINNER, 2023"},
        {subject: "KAVACH 2023, CYBER SECURITY HACKATHON WINNER"} 
        
    ]

    const feature:{subject: string,body:string,mid:string,number:Number}[] = [
        {subject: "HELMDALL",
        number : 1,
        mid:"something something",
        body: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."},
        {subject: "NOTEDRIVE",
        number : 2,
        mid:"something something",
        body: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."},   
        {subject: "SAMKLANG",
        number : 3,
        mid:"something something",
        body: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."},
        
    ]

    
    const pal = ref(1);

    const setPal = (number: number) => {
      pal.value = number;
    };

  
</script> 

<style>

</style>
