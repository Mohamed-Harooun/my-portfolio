<template>
  <div id="alert-3"
    class="flex items-center p-4 mb-4 rounded-lg"
    :class="alertTypeClasses"
    role="alert">
    <div class="alert-icon">
      <svg v-if="alertType === 'success'" class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <svg v-else class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
    </div>
    <span class="sr-only">Info</span>
    <div class="ms-3 text-sm">
      {{ alertMessage }}
    </div>
    <button
      @click="closeAlert"
      type="button"
      class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2  p-1.5  inline-flex items-center justify-center h-8 w-8"
      :class="alertTypeCloseBtnClasses"
      data-dismiss-target="#alert-3" aria-label="Close">
      <span class="sr-only">Close</span>
    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
    </svg>
  </button>
</div>
</template>


<script setup>
import { computed } from 'vue';

const props = defineProps({
  alertType: {
    type: String,
    required: true
  },
  alertMessage: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close-alert']);
const closeAlert = () => emit('close-alert');

const sucessAlertClasses = "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400";
const errorAlertClasses = "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400"
const successAlertCloseBtnClasses = "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
const errorAlertCloseBtnClasses = "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"

const alertTypeClasses = computed(() => props.alertType === 'success' ? sucessAlertClasses : errorAlertClasses);
const alertTypeCloseBtnClasses = computed(() => props.alertType === 'success' ? successAlertCloseBtnClasses : errorAlertCloseBtnClasses);

</script>