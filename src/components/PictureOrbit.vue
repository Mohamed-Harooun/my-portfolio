<template>
  <div
    ref="orbitContainer"
    class="orbit-container relative z-10 shrink-0 mx-auto xl:mx-0"
    :class="isDesktopLayout ? 'overflow-visible' : 'overflow-hidden'"
    :style="containerStyle"
  >
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="shrink-0 rounded-full border-4 border-indigo-800 bg-gradient-to-b from-indigo-600 via-purple-500 to-blue-500"
        :class="layoutMetrics.avatarSizeClass"
      >
        <img
          ref="avatarEl"
          src="@/assets/my_pic_transparent.png"
          class="w-full h-full rounded-full object-cover block"
          alt="mohamed-haroun"
        >
      </div>
    </div>
    <ul class="absolute inset-0 pointer-events-none" :class="isDesktopLayout ? 'overflow-visible' : 'overflow-hidden'">
      <li
        v-for="(icon, index) in icons"
        :key="icon.alt"
        :title="icon.alt"
        :style="getIconStyle(index)"
        class="animated-icon absolute left-0 top-0 pointer-events-auto flex justify-center items-center rounded-full transition-colors duration-300 ease-in-out"
        :class="[icon.bgColor, layoutMetrics.iconSizeClass]"
        @mouseenter="handleIconHover(true)"
        @mouseleave="handleIconHover(false)"
      >
        <img
          :src="icon.src"
          :width="layoutMetrics.iconImgSize"
          :height="layoutMetrics.iconImgSize"
          :alt="icon.alt"
          :style="iconImageStyle"
        >
      </li>
    </ul>
  </div>
</template>


<script setup>
import { computed, onBeforeUnmount, onMounted, ref, nextTick } from 'vue';

import jsIcon from '@/assets/tech-icons/javascript-original.svg';
import vueIcon from '@/assets/tech-icons/vuejs-original.svg';
import nuxt from '@/assets/tech-icons/nuxtjs.svg';
import vuetifyIcon from '@/assets/tech-icons/vuetify-original.svg';
import bootstrapIcon from '@/assets/tech-icons/bootstrap-original.svg';
import tailwindIcon from '@/assets/tech-icons/tailwindcss-plain.svg';
import sassIcon from '@/assets/tech-icons/sass-original.svg';
import reactIcon from '@/assets/tech-icons/react-original.svg';
import piniaIcon from '@/assets/tech-icons/pinia-original.svg';

const bgColors = [
  'bg-yellow-400 hover:bg-yellow-500',
  'bg-emerald-600 hover:bg-teal-700',
  'bg-indigo-600 hover:bg-indigo-700',
  'bg-purple-600 hover:bg-purple-700',
  'bg-blue-600 hover:bg-blue-700',
  'bg-fuchsia-800 hover:bg-fuchsia-900',
  'bg-sky-500 hover:bg-sky-600',
  'bg-yellow-500 hover:bg-yellow-600',
  'bg-green-600 hover:bg-green-700',
];

const DESKTOP_BREAKPOINT = 1200;

const orbitContainer = ref(null);
const avatarEl = ref(null);
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : DESKTOP_BREAKPOINT);
const rotationAngle = ref(0);
const orbitCenter = ref({ x: 112, y: 112 });

const icons = ref([
  { src: jsIcon, alt: 'JavaScript', bgColor: bgColors[0] },
  { src: vueIcon, alt: 'Vue.js', bgColor: bgColors[1] },
  { src: nuxt, alt: 'Nuxt.js', bgColor: bgColors[8] },
  { src: vuetifyIcon, alt: 'Vuetify', bgColor: bgColors[2] },
  { src: bootstrapIcon, alt: 'Bootstrap', bgColor: bgColors[3] },
  { src: tailwindIcon, alt: 'Tailwindcss', bgColor: bgColors[4] },
  { src: sassIcon, alt: 'SASS', bgColor: bgColors[5] },
  { src: reactIcon, alt: 'React.js', bgColor: bgColors[6] },
  { src: piniaIcon, alt: 'Pinia', bgColor: bgColors[7] },
]);

const isDesktopLayout = computed(() => windowWidth.value >= DESKTOP_BREAKPOINT);

const layoutMetrics = computed(() => {
  const w = windowWidth.value;

  if (w >= DESKTOP_BREAKPOINT) {
    return {
      avatarSize: 288,
      iconSize: 80,
      orbitRadius: 220,
      iconImgSize: '40',
      avatarSizeClass: 'w-72 h-72',
      iconSizeClass: 'w-20 h-20',
    };
  }

  // Stacked mobile/tablet: original orbit size; expanded container prevents text overlap
  return {
    avatarSize: 144,
    iconSize: 64,
    orbitRadius: 140,
    iconImgSize: '32',
    avatarSizeClass: 'w-36 h-36',
    iconSizeClass: 'w-16 h-16',
  };
});

const containerStyle = computed(() => {
  const { avatarSize, iconSize, orbitRadius } = layoutMetrics.value;

  if (isDesktopLayout.value) {
    return {
      width: `${avatarSize}px`,
      height: `${avatarSize}px`,
      minWidth: `${avatarSize}px`,
      minHeight: `${avatarSize}px`,
    };
  }

  const orbitPadding = orbitRadius + iconSize / 2 - avatarSize / 2;
  const totalSize = avatarSize + 2 * Math.max(orbitPadding, 0);

  return {
    width: `${totalSize}px`,
    height: `${totalSize}px`,
    minWidth: `${totalSize}px`,
    minHeight: `${totalSize}px`,
  };
});

const iconImageStyle = computed(() => ({
  transform: `rotate(${-rotationAngle.value}deg)`,
}));

const updateOrbitLayout = () => {
  windowWidth.value = window.innerWidth;

  if (!avatarEl.value || !orbitContainer.value) return;

  const avatarRect = avatarEl.value.getBoundingClientRect();
  const containerRect = orbitContainer.value.getBoundingClientRect();

  orbitCenter.value = {
    x: avatarRect.left - containerRect.left + avatarRect.width / 2,
    y: avatarRect.top - containerRect.top + avatarRect.height / 2,
  };
};

const getIconStyle = (index) => {
  const { orbitRadius, iconSize } = layoutMetrics.value;
  const iconHalf = iconSize / 2;
  const { x: centerX, y: centerY } = orbitCenter.value;
  const angle = (360 / icons.value.length) * index + rotationAngle.value;
  const x = centerX + orbitRadius * Math.cos((angle * Math.PI) / 180) - iconHalf;
  const y = centerY + orbitRadius * Math.sin((angle * Math.PI) / 180) - iconHalf;

  return {
    transform: `translate(${x}px, ${y}px)`,
  };
};

const handleIconHover = (isHovered) => {
  if (isHovered) {
    clearInterval(rotationInterval);
  } else {
    startRotation();
  }
};

let rotationInterval;
let resizeObserver;

const startRotation = () => {
  rotationInterval = setInterval(() => {
    rotationAngle.value += 0.5;
  }, 50);
};

onMounted(async () => {
  updateOrbitLayout();
  startRotation();
  window.addEventListener('resize', updateOrbitLayout);

  await nextTick();
  updateOrbitLayout();

  if (orbitContainer.value) {
    resizeObserver = new ResizeObserver(() => {
      updateOrbitLayout();
    });
    resizeObserver.observe(orbitContainer.value);
  }
});

onBeforeUnmount(() => {
  clearInterval(rotationInterval);
  window.removeEventListener('resize', updateOrbitLayout);
  resizeObserver?.disconnect();
});
</script>


<style scoped>
.animated-icon {
  opacity: 0;
  animation: appearAnimation ease-in-out forwards;
  animation-duration: 0.8s;
  animation-delay: 0.3s;
}

@keyframes appearAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
