<template>
  <div class="Home flex flex-1 w-full flex-col justify-center px-4 sm:px-0">
    <div class="flex flex-col xl:flex-row-reverse xl:justify-between xl:items-center justify-center items-center gap-6 sm:gap-10 lg:gap-16 xl:gap-8 w-full overflow-visible">
      <PictureOrbit class="shrink-0" />
      <div class="flex flex-col gap-4 w-full xl:w-auto min-w-0 relative z-10">
        <h1 class="text-2xl lg:text-4xl xl:text-3xl text-center xl:text-start font-medium tracking-wider text-blue-700 dark:text-blue-400 p-2 md:p-0">
          Hi, I'm Mohamed Haroun
          <img src="@/assets/icons/waving.png" class="inline" width="38" height="38" alt="waving-icon">
        </h1>
        <TypewriterEffect />
        <DownloadCVButton />
      </div>
    </div>
  </div>
</template>


<script setup>
import DownloadCVButton from '@/components/DownloadCVButton.vue';
import PictureOrbit from '@/components/PictureOrbit.vue';
import TypewriterEffect from '@/components/TypewriterEffect.vue';
</script>


<style scoped>

</style>
