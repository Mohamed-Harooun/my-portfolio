<!-- ProjectCard.vue -->
<template>
  <div class="
    project-card relative overflow-hidden w-full h-[20rem]
    shadow-card-light dark:shadow-card-dark rounded-lg mb-6
    "
    @mouseover="startSlider"
    @mouseleave="stopSlider"
  >
    <!-- Image SlideShow -->
    <div class="img-slide w-full h-full relative">
      <BaseLoader v-if="isLoading" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />

      <img
        v-for="(image, index) in project.images"
        :key="index"
        :src="image"
        :alt="`Project Image ${index + 1}`"
        class="w-full h-full  rounded-lg object-cover absolute transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
        @load="onImageLoad(index)"
      />
    </div>
    <!-- Project Information -->
    <div class="project-info absolute bottom-0 w-full bg-gray-600 bg-opacity-50 rounded-b-lg transition-transform duration-300 ease-in-out" :class="toggleProjectInfoClasses">
      <div class="expand-arrow  w-full h-4 lg:h-6 flex justify-center items-center bg-gray-700 bg-opacity-40 hover:bg-opacity-60 transition-colors duration-300 ease-in-out cursor-pointer" @click="toggleProjectInfo">
        <ChevronUp v-if="!isProjectInfoShowen" class="text-2xl lg:text-3xl text-blue-600 mb-2" />
        <ChevronDown v-if="isProjectInfoShowen" class="text-2xl lg:text-3xl text-blue-600 mb-2" />
      </div>
      <div class="project-info__content px-1">
        <MainHeading :title="project.title" text-size="text-base lg:text-3xl" />
        <p class="project-description text-xs lg:text-lg text-slate-100 font-medium text-center mb-1 lg:mb-4">
          {{ truncatedDescription }}
          <span v-if="isShowMoreBtnDisplayed" @click="showMoreToggle" class="cursor-pointer text-xs text-blue-500 underline">{{ showMoreText }}</span>
        </p>
        <div class="tech-icons flex justify-center gap-2">
          <div class="inline w-4 h-4 lg:w-8 lg:h-8" v-for="(tech, index) in project.techUsed" :key="index">
            <img :src="tech.src"  class="w-full h-full" :alt="tech.name" :title="tech.name" />
          </div>
        </div>
        <div class="flex justify-center space-x-2 lg:mb-2">
          <span :class="{ 'pointer-events-none': !project.demoLinkEnabled, 'cursor-not-allowed': !project.demoLinkEnabled }">
            <a :href="project.demoLink" target="_blank" class="text-blue-500" :class="{ 'opacity-50': !project.demoLinkEnabled }">
              <Web class="text-xl lg:text-4xl text-blue-600 hover:text-blue-700 transition-colors duration-300 ease-in-out" />
            </a>
          </span>
          <span :class="{ 'pointer-events-none': !project.githubLinkEnabled, 'cursor-not-allowed': !project.githubLinkEnabled }">
            <a :href="project.githubLink" target="_blank" class="text-gray-700" :class="{ 'opacity-50': !project.githubLinkEnabled }">
              <Github class="text-xl lg:text-4xl text-gray-600 hover:text-gray-700 transition-colors duration-300 ease-in-out" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

import MainHeading from './MainHeading.vue'
import BaseLoader from './shared/BaseLoader.vue'
;
import Web from 'vue-material-design-icons/Web.vue';
import Github from 'vue-material-design-icons/Github.vue';
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const isLoading = ref(true);
const loadedImages = ref(0);

const isProjectInfoShowen = ref(false);
const isFullDescriptionShowen = ref(false);
const descriptionMaxLength = 100;

const toggleProjectInfo = () => isProjectInfoShowen.value = !isProjectInfoShowen.value;
const showMoreToggle = () => isFullDescriptionShowen.value = !isFullDescriptionShowen.value;

const toggleProjectInfoClasses = computed(() => isProjectInfoShowen.value ? '-translate-y-[0%]' : '-translate-y-[-89%]');
const truncatedDescription = computed(() => {
  return props.project.description.length > descriptionMaxLength && !isFullDescriptionShowen.value ? 
  `${props.project.description.slice(0, descriptionMaxLength)}...` : props.project.description;
});

const showMoreText = computed(() => (isFullDescriptionShowen.value ? 'Show Less' : 'Show More'));
const isShowMoreBtnDisplayed = computed(() => props.project.description.length > descriptionMaxLength ? true : false);

const currentIndex = ref(0);
let sliderInterval;

const startSlider = () => {
  if (!sliderInterval) {
    sliderInterval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % props.project.images.length;
    }, 2100); // Adjust slide duration here
  }
};

const stopSlider = () => {
  clearInterval(sliderInterval);
  sliderInterval = null;
  currentIndex.value = 0;
};

const onImageLoad = (index) => {
  console.log(`Image ${index} loaded`);
  loadedImages.value++;
  if (loadedImages.value === props.project.images.length) {
    isLoading.value = false;
  }
}


watch(isProjectInfoShowen, (currentValue) => {
  if (!currentValue) {
    isFullDescriptionShowen.value = false;
  }
})

</script>

<style scoped>

</style>
