<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-light dark:bg-dark py-3" :class="headerShadow">
    <div class="container mx-auto ">
      <div class="flex justify-between items-center">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/logo.png" width="70" height="70" alt="logo">
          </router-link>
        </div>

        <AppHeaderContent  />

        
        <span class="sm:block md:hidden menu-icon p-2" @click="toggleDrawer">
          <Menu class="text-2xl" />
        </span>
      </div>
    </div>
  </header>

  <Transition name="slide">
    <AppDrawer v-if="drawer" @close-drawer="toggleDrawer" />
  </Transition>

</template>


<script setup>
import { ref, watch } from 'vue';

import AppHeaderContent from './AppHeaderContent.vue';
import AppDrawer from './AppDrawer.vue';
import Menu from 'vue-material-design-icons/Menu.vue';

const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
}


/** Start adding shadow to header when scroll **/
const headerShadow = ref("");
const scrollYValue = ref(window.scrollY);

// update the reactive reference of "scrollYValue" when window is scrolled
window.addEventListener("scroll", () => {
  scrollYValue.value = window.scrollY;
});

watch(scrollYValue, (currentScrollY) => {
  if (currentScrollY > 0) {
    headerShadow.value = "shadow-lg dark:shadow-2xl";
  } else {
    headerShadow.value = "";
  }
});
/** End adding shadow to header when scroll **/


</script>


<style scoped></style>