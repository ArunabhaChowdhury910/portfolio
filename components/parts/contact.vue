<template>
    <div class="flex space-x-32 justify-around px-24 pt-5 h-full">
      <!-- Left side with contact information -->
      <div class="w-1/2  space-y-3">
        <h1 class="text-4xl font-bold mb-4 dark:text-ye ">Contact Information</h1>
        <p class="dark:text-mg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corrupti totam cum itaque minima explicabo magnam quidem, eveniet inventore deleniti laborum consectetur saepe quibusdam iste officia facere possimus culpa fugit.</p>
        
        <div v-for="cons in contact" class="flex space-x-2">
          <!-- <Icon name="i-material-symbols:location-on-rounded"/> -->
          <SvgRenderer v-html="cons.svgs" class="text-yell hover:text-ye" />
          <div class="text-sm">
            <p class="font-bold text-xs dark:text-or">{{cons.cons}}</p>
            <p class="text-xs dark:text-white ">{{cons.main}}</p>
          </div>
        </div>
        
      </div>
  
      <!-- Right side with contact form -->
      <form class="w-1/2 mt-6 rounded-lg">
        
        <div class="mb-4 text-white">
          <!-- <label for="name" class="block text-sm font-medium text-gray-700">Name</label> -->
          <input placeholder="name" type="text" id="name" name="name" class="mt-1 p-2 block w-full bg-black opacity-55 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <!-- <label for="email" class="block text-sm font-medium text-gray-700">Email</label> -->
          <input placeholder="subject" type="text" id="email" name="email" class="mt-1 p-2 block w-full bg-black text-white opacity-55 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <!-- <label for="message" class="block text-sm font-medium text-gray-700">Message</label> -->
          <textarea placeholder="Your message"  id="message" name="message" rows="4" class="mt-1 p-2 block w-full bg-black opacity-55 rounded-md shadow-sm text-white sm:text-sm"></textarea>
        </div>
        <button type="submit" class="inline-block dark:bg-or text-white px-4 py-2 rounded-md hover:bg-ye bg-ye hover:bg-ye hover:text-black transition-colors">Send Message</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  const contact:{cons: string, main:string,svgs:string}[] = [
          {cons: "Address",
          svgs: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12"/></svg>`,
          main: "Indrajeet Apt., 18.No. Kalimandir Road, DumDum, Kol-28 "},
          {cons: "Mail",
          svgs: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"/></svg>`,
          main: "mailtoarunabha1234.e@gmail.com"},
          {cons: "Phone",
          svgs: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"/></svg>`,
          main: "+91 7439059965"} 
          
      ]
//       const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
//   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
// </svg>`;
  </script>
  
  <style>
  /* Any additional styles can go here */
  </style>
  