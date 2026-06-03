<template>
  <div  :title="iconName"
    class="tech-icon bg-[#00000012] dark:bg-[#ffffff12] overflow-hidden flex justify-center items-center w-10 h-10 lg:w-20 lg:h-20 rounded-lg  border-2 border-transparent hover:rounded-full hover:border-indigo-700 hover:scale-95 lg:hover:p-4 transition-all duration-300 ease-in-out">
    <img :src="iconSrc" loading="lazy" class="w-7 h-7 lg:w-12 lg:h-12" :alt="iconName">
  </div>
</template>


<script setup>
defineProps(['iconName', 'iconSrc'])
</script>


<style scoped>

</style>