<template>
  <footer class=" text-center mb-4 mt-8 w-11/12 mx-auto">
    <div class="social_media__links flex justify-center items-center mb-2 gap-8">
      <a href="https://linkedin.com/in/mohamed--haroun" target="_blank">
        <img :src="Linkedin" width="45" height="45" alt="">
      </a>
      <a href="https://github.com/Muhammed-Hossam" target="_blank">
        <img :src="Github" width="45" height="45" alt="">
      </a>
      <a href="https://wa.me/+201556239800" target="_blank">
        <img :src="Whatsapp" width="45" height="45" alt="">
      </a>
      <a href="mailto:mohamedhossamharoun@gmail.com">
        <img :src="Gmail" alt="">
      </a>
    </div>
    <p class="text-sm lg:text-base text-slate-600 dark:text-gray-400 text-center">
      &copy; {{ currentYear }} Mohamed Haroun. Built with 
      <a class="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out" href="https://vuejs.org" target="_blank">Vue.js</a>
      and
      <a class="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out" href="https://tailwindcss.com/" target="_blank">Tailwindcss</a>
    </p>
  </footer>
</template>


<script setup>
import Linkedin from '../assets/icons/linkedin.png';
import Github from '../assets/icons/github.png';
import Whatsapp from '../assets/icons/whatsApp.png';
import Gmail from '../assets/icons/gmail.png';

const currentYear = new Date().getFullYear();

</script>