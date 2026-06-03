<template>
    <NavBar class="hidden md:block" />
  
    <div class="hidden md:flex">
      <div class="social-buttons">
        <SocialMediaButton title="Github" link="https://github.com/Muhammed-Hossam"
          class="mr-3"
          color-scheme="border-gray-600 dark:border-gray-700 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700">
          <Github class="text-lg" />
        </SocialMediaButton>
  
        <SocialMediaButton title="Linkedin" link="https://www.linkedin.com/in/mohamed--haroun"
          color-scheme="border-blue-700 dark:border-blue-800 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
          <Linkedin class="text-lg" />
        </SocialMediaButton>
      </div>
      <ThemeSwicher class="ml-8" />
  </div>
</template>


<script setup>
import NavBar from './NavBar.vue';
import ThemeSwicher from './ThemeSwitcher.vue';
import SocialMediaButton from './SocialMediaButton.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
</script>