<template>
  <h3 class="card-title text-center mb-8">
    <span class="border-b-2 border-indigo-700 p-4 pb-1 text-xl lg:text-3xl uppercase font-semibold tracking-wider">{{ title }}</span>
  </h3>
</template>


<script setup>
defineProps(['title'])
</script>