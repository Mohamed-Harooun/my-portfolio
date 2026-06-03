<template>
  <div class="mb-8 xl:mb-0 xl:w-fit">
    <button
      class="block uppercase text-lg sm:text-2xl max-w-max mx-auto xl:mx-0 py-3 sm:py-4 px-4 mb-4 xl:mb-0 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 hover:bg-gradient-to-b hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 shadow-2xl transition-colors duration-300 ease-in-out text-white font-bold rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
      :aria-busy="downloading"
      :disabled="downloading"
      @mouseenter="addAnimateToIcon"
      @mouseleave="removeAnimationFromIcon"
      @click="downloadCV"
    >
      Download My CV
      <TrayArrowDown ref="trayArrowDownIcon" />
    </button>
    <p v-if="downloading" class="text-green-600 font-bold text-center text-lg transition-all duration-300 ease-in-out">CV is Downloading...</p>
    <p v-if="downloadError" class="text-red-500 font-bold text-center text-lg transition-all duration-300 ease-in-out">Error downloading CV. Please try again.</p>
  </div>
</template>


<script setup>
import { onUnmounted, ref } from 'vue';
import TrayArrowDown from 'vue-material-design-icons/TrayArrowDown.vue';

const trayArrowDownIcon = ref(null);
const downloading = ref(false);
const downloadError = ref(false);

let resetTimeoutId = null;

const clearResetTimeout = () => {
  if (resetTimeoutId !== null) {
    clearTimeout(resetTimeoutId);
    resetTimeoutId = null;
  }
};

const addAnimateToIcon = () => {
  trayArrowDownIcon.value?.$el?.classList.add('animate-bounce');
};

const removeAnimationFromIcon = () => {
  trayArrowDownIcon.value?.$el?.classList.remove('animate-bounce');
};

const downloadCV = () => {
  clearResetTimeout();
  downloading.value = true;
  downloadError.value = false;

  fetch('/Mohamed_haroun_Frontend_Developer_CV.pdf')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Mohamed_haroun_Frontend_Developer_CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      downloading.value = false;
    })
    .catch((error) => {
      console.error('Error during file download:', error);
      downloading.value = false;
      downloadError.value = true;
    });
};

onUnmounted(() => {
  clearResetTimeout();
});
</script>
