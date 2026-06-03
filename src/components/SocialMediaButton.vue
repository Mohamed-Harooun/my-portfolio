<template>
  <a :href="link" target="_blank" class="text-slate-100 py-1.5 px-2.5 text-base border rounded-full  transition-colors duration-300 ease-in-out shadow-lg" :class="colorScheme">
    <span class="mr-1">{{ title }}</span>
    <slot />
  </a>
</template>


<script setup>
const props = defineProps(['title', 'link', 'colorScheme'])

</script>


<style>

</style>