<template>
  <h4 class="section-heading  font-bold tracking-wider text-center leading-relaxed " :class="[textSize, uppercaseClass]">
    <span class=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600  to-fuchsia-600">
      {{ title }}
    </span>
  </h4>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  textSize: {
    type: String,
    required: false
  },
  isUppercase: {
    type: Boolean,
    required: false
  }
});

const uppercaseClass = computed(() => props.isUppercase ? 'uppercase' : null);


</script>