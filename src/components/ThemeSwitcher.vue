<template>
  <div>
    <button
      class="flex items-center rounded-xl w-11 h-6 border border-solid border-gray-400 bg-gray-300 dark:bg-slate-600 transition-colors duration-300 vt-switch-appearance"
      type="button"
      role="switch"
      aria-label="Toggle dark mode"
      aria-checked="false"
      @click="themeStore.toggleTheme"
    >
      <span class="icon flex justify-center items-center  w-5 h-5 rounded-full shadow-md dark:translate-x-full transition-transform duration-500 ease-in-out ">
        <span class="block  rounded-full overflow-hidden w-5 h-5">
          <WeatherNight v-if="themeStore.darkMode" class="text-lg dark:text-dark" />
          <WhiteBalanceSunny v-else class="text-lg" />
        </span
        ></span
      >
    </button>
  </div>
</template>

<script setup>
import { useThemeStore } from "../store/themeStore";
import WhiteBalanceSunny from 'vue-material-design-icons/WhiteBalanceSunny.vue'
import WeatherNight from 'vue-material-design-icons/WeatherNight.vue'

const themeStore = useThemeStore();
</script>

<style scoped>
.toggle-checkbox {
  appearance: none;
  margin-right: 0.2rem;
  height: 1.75rem;
  width: 3.5rem;
  border-radius: 0.4375rem;
  background-color: var(--neutral-300);
  position: relative;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s, transform 0.2s;
}

.toggle-checkbox:checked {
  background-color: var(--primary);
  transform: translateX(1.75rem);
}

.toggle-label {
  display: inline-block;
  padding-left: 0.15rem;
  cursor: pointer;
}

.dark-mode-icon,
.light-mode-icon {
  display: inline-block;
  font-size: 1rem;
}

.dark-mode-icon {
  color: var(--neutral-600);
}

.light-mode-icon {
  color: var(--neutral-400);
}
</style>
