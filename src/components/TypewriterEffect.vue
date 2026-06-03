<template>
  <div class="typewriter text-center my-6 xl:!mx-0 xl:text-start w-full min-h-[6rem] sm:min-h-[5rem] lg:min-h-[8rem] xl:min-h-[9rem]">
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal p-1 lg:p-0 break-words min-h-[3lh] sm:min-h-[2lh] leading-normal">
      <span class="typed-text bg-gradient-to-r from-blue-500 via-purple-500 bg-clip-text text-transparent to-indigo-500 font-bold leading-normal break-words">{{ config.typeValue }}</span>
      <span class="cursor inline-block ml-1 w-1 bg-slate-800 dark:bg-slate-200" ref="cursor" :class="{'typing': config.typeStatus}" style="--cursor-color: rgb(30 41 59)">&nbsp;</span>
    </h2>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, watch, computed, onUnmounted } from 'vue';
import { useThemeStore } from '@/store/themeStore';

const theme = useThemeStore();
const cursor = ref(null);
const isDarkMode = computed(() => theme.darkMode);
const isMounted = ref(false);

const timerIds = new Set();

const scheduleTimeout = (callback, delay) => {
  const id = setTimeout(() => {
    timerIds.delete(id);
    if (isMounted.value) {
      callback();
    }
  }, delay);
  timerIds.add(id);
  return id;
};

const clearAllTimers = () => {
  timerIds.forEach((id) => clearTimeout(id));
  timerIds.clear();
};

const cursorBgColor = (isDarkTheme) => {
  if (!cursor.value) return;

  if (isDarkTheme) {
    cursor.value.style.setProperty('--cursor-color', 'rgb(226 232 240)');
  } else {
    cursor.value.style.setProperty('--cursor-color', 'rgb(30 41 59)');
  }
};

const config = reactive({
  typeValue: '',
  typeStatus: false,
  typeArray: ['I\'m a Frontend Web Developer.', 'Transforming Ideas into Interactive Experiences.', 'Turning Dreams into Digital Realities.'],
  typingSpeed: 100,
  erasingSpeed: 70,
  newTextDelay: 1500,
  eraseTextDelay: 3500,
  typeArrayIndex: 0,
  charIndex: 0,
});

const typeText = () => {
  if (config.charIndex < config.typeArray[config.typeArrayIndex].length) {
    if (!config.typeStatus) {
      config.typeStatus = true;
    }

    config.typeValue += config.typeArray[config.typeArrayIndex].charAt(config.charIndex);
    config.charIndex += 1;

    scheduleTimeout(typeText, config.typingSpeed);
  } else {
    config.typeStatus = false;
    scheduleTimeout(eraseText, config.eraseTextDelay);
  }
};

const eraseText = () => {
  if (config.charIndex > 0) {
    if (!config.typeStatus) {
      config.typeStatus = true;
    }

    config.typeValue = config.typeArray[config.typeArrayIndex].substring(0, config.charIndex - 1);
    config.charIndex -= 1;

    scheduleTimeout(eraseText, config.erasingSpeed);
  } else {
    config.typeStatus = false;

    scheduleTimeout(() => {
      if (config.typeArrayIndex < config.typeArray.length - 1) {
        config.typeArrayIndex += 1;
      } else {
        config.typeArrayIndex = 0;
      }
      scheduleTimeout(typeText, config.typingSpeed);
    }, config.newTextDelay);
  }
};

onMounted(() => {
  isMounted.value = true;
  scheduleTimeout(typeText, config.newTextDelay);
  cursorBgColor(isDarkMode.value);
});

onUnmounted(() => {
  isMounted.value = false;
  clearAllTimers();
});

watch(isDarkMode, (isDark) => {
  cursorBgColor(isDark);
});
</script>

<style scoped>
.cursor {
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: var(--cursor-color);
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
