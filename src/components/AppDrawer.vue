<template>
  <div class="drawer sm:block md:hidden relative z-50">
    <div class="overlay fixed top-0 right-0 left-0 bottom-0 bg-black opacity-20 w-screen h-screen"
      @click="closeDrawer"></div>
    <div class="fixed top-0 right-0 bottom-0 w-3/6  bg-light dark:bg-dark shadow-md shadow-gray-400 dark:shadow-black" >
      <div class="flex flex-col justify-around items-center h-screen px-2">
        <div>
          <ThemeSwitcher  />
        </div>
        <nav role="navigation" class="w-full text-center">
          <ul class="flex flex-col gap-6">
            <li>
              <router-link to="/" active-class="!text-blue-700 dark:!text-blue-500 bg-blue-500 bg-opacity-20"
                class="block text-gray-900 rounded dark:text-slate-300 hover:!text-blue-700 hover:bg-blue-500 hover:bg-opacity-20 dark:hover:!text-blue-500 text-lg px-3 py-2 transition-colors duration-300 ease-in-out"
                @click="closeDrawer"
                >
                Home
                <Home class="text-2xl" />
              </router-link>
            </li>
            <li>
              <router-link to="/about" active-class="!text-blue-700 dark:!text-blue-500 bg-blue-500 bg-opacity-20"
                class="block text-gray-900 rounded dark:text-slate-300 hover:!text-blue-700 hover:bg-blue-500 hover:bg-opacity-20 dark:hover:!text-blue-500 text-lg px-3 py-2 transition-colors duration-300 ease-in-out"
                @click="closeDrawer"
                >
                About me
                <Information class="text-2xl" />
              </router-link>
            </li>
            <li>
              <router-link to="/recent" active-class="!text-blue-700 dark:!text-blue-500 bg-blue-500 bg-opacity-20"
                class="block text-gray-900 rounded dark:text-slate-300 hover:!text-blue-700 hover:bg-blue-500 hover:bg-opacity-20 dark:hover:!text-blue-500 text-lg px-3 py-2 transition-colors duration-300 ease-in-out"
                @click="closeDrawer"
                >
                Recent work
                <History class="text-2xl" />
              </router-link>
            </li>
            <li>
              <router-link to="/contact" active-class="!text-blue-700 dark:!text-blue-500 bg-blue-500 bg-opacity-20"
                class="block text-gray-900 rounded dark:text-slate-300 hover:!text-blue-700 hover:bg-blue-500 hover:bg-opacity-20 dark:hover:!text-blue-500 text-lg px-3 py-2 transition-colors duration-300 ease-in-out"
                @click="closeDrawer"
                >
                Contact
                <CardAccountMail class="text-2xl" />
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="social-media flex flex-col">
          <SocialMediaButton title="Github" link="https://github.com/Muhammed-Hossam" class="mb-4"
            color-scheme="border-gray-600 dark:border-gray-700 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700">

            <Github class="text-lg" />
          </SocialMediaButton>
          <SocialMediaButton title="Linkedin" link="https://www.linkedin.com/in/mohamed--haroun"
            color-scheme="border-blue-700 dark:border-blue-800 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
            <Linkedin class="text-lg" />
          </SocialMediaButton>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import SocialMediaButton from './SocialMediaButton.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import Home from 'vue-material-design-icons/Home.vue';
import Information from 'vue-material-design-icons/Information.vue';
import History from 'vue-material-design-icons/History.vue';
import CardAccountMail from 'vue-material-design-icons/CardAccountMail.vue';

import { computed } from 'vue';

const emit = defineEmits(['closeDrawer']);


const closeDrawer = () => {
  emit('closeDrawer')
}
</script>