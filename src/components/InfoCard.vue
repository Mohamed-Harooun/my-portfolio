<template>
  <div class="card-container mt-28">
    <AboutPageTitle v-if="hasTitle" :title="title" />
    <div
      class="
      info-card
      flex justify-center items-center
      bg-light
      dark:bg-dark
      bg-no-repeat bg-cover
      relative
      overflow-hidden
      rounded-lg
      before:absolute
      before:rounded-lg
      after:rounded-lg
      after:absolute
      after:bg-cover
      after:bg-no-repeat
      after:bg-[url('../assets/bg/info-card-light-animated-bg.svg')]
      dark:after:bg-[url('../assets/bg/info-card-dark-animated-bg.svg')]
      after:inset-1
      shadow-card-light
      dark:shadow-card-dark
      "
      :class="[cardPadding, animationClasses, animationSize, scaleClasses]"
      
      >
      <div class="info-card-content w-full relative z-50">
        <slot />
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import AboutPageTitle from './AboutPageTitle.vue';


  const props = defineProps({
    title: {
      type: String,
      required: false
    },
    hasTitle: {
      type: Boolean,
      required: true
    },
    cardPadding: {
      type: String,
      required: true
    },
    useAnimation: {
      type: Boolean,
      required: true
    },
    useScale: {
      type: Boolean,
      required: true
    },
    animationSize: {
      type: String,
      required: false
    }
  });


  const scaleClasses = computed(() => props.useScale ? "hover:scale-105 transition-transform duration-300 ease-in-out" : null);
  const animationClasses = computed(() => props.useAnimation ? 'hover:before:bg-gradient-to-tl hover:before:from-indigo-600 hover:before:to-fuchsia-600 hover:before:animate-rotate' : null)
</script>

<style scoped>
.info-card {
  will-change: transform, scale;
}

.info-card::before {
  will-change: transform, rotate;
}

</style>