<template>
  <nav role="navigation">
    <ul class="flex gap-2">
      <li>
        <router-link to="/" active-class="!text-blue-700 dark:!text-blue-500"
          class="text-gray-900 dark:text-slate-300 hover:!text-blue-700 dark:hover:!text-blue-500 text-lg px-3 py-2 transition-colors duration-300 ease-in-out">Home</router-link>
      </li>
      <li>
        <router-link to="/about" active-class="!text-blue-700 dark:!text-blue-500"
          class="text-gray-900 dark:text-slate-300 hover:!text-blue-700 dark:hover:!text-blue-500 text-lg px-3 py-2 transition-colors duration-300 ease-in-out">About
          me</router-link>
      </li>
      <li>
        <router-link to="/recent" active-class="!text-blue-700 dark:!text-blue-500"
          class="text-gray-900 dark:text-slate-300 hover:!text-blue-700 dark:hover:!text-blue-500 text-lg px-3 py-2 transition-colors duration-300 ease-in-out">Recent
          work</router-link>
      </li>
      <li>
        <router-link to="/contact" active-class="!text-blue-700 dark:!text-blue-500"
          class="text-gray-900 dark:text-slate-300 hover:!text-blue-700 dark:hover:!text-blue-500 text-lg px-3 py-2 transition-colors duration-300 ease-in-out">Contact</router-link>
      </li>
    </ul>

  </nav>
</template>

<script setup>

</script>

<style scoped>
/* .router-link-active {
  color: #325fb9;
} */
</style>
