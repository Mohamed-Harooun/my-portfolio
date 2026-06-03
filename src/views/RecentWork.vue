<template>
  <div class="recent-work">
    <div class="container">
      <div class="flex flex-col justify-center items-stretch w-full mb-8">
          <MainHeading title="My Recent Work" text-size="text-3xl lg:text-6xl" :is-uppercase="true" class="my-14 self-center" />
          <div class="grid grid-cols-1 md:grid-cols-2  gap-6 w-full">
            <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
          </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import MainHeading from '@/components/MainHeading.vue';

import akoSayara1 from "@/assets/projects/akosayara/1.png";
import akoSayara2 from "@/assets/projects/akosayara/2.png";
import akoSayara3 from "@/assets/projects/akosayara/3.png";
import akoSayara4 from "@/assets/projects/akosayara/4.png";

/** Images for masaba website **/
import masab1 from '@/assets/projects/masab/masab-sa-1.png';
import masab2 from '@/assets/projects/masab/masab-sa-2.png';
import masab3 from '@/assets/projects/masab/masab-sa-3.png';
import masab4 from '@/assets/projects/masab/masab-sa-4.png';

/** Images for medsys website **/
import medsys1 from '@/assets/projects/medsys/medsys-1.png';
import medsys2 from '@/assets/projects/medsys/medsys-2.png';
import medsys3 from '@/assets/projects/medsys/medsys-3.png';
import medsys4 from '@/assets/projects/medsys/medsys-4.png';

/** Images for Tabok website **/
import tabok1 from '@/assets/projects/tabok/tabok-1.png';
import tabok2 from '@/assets/projects/tabok/tabok-2.png';


/** Start importing images for darsy-platform website **/
import darsyPlatform1 from '@/assets/projects/darsy-platform/1.png';
import stayTunedImg from '@/assets/projects/darsy-platform/stay-tuned.png';
import projectComingSoonImg from '@/assets/projects/darsy-platform/project-coming-soon.png';
/** End importing images for darsy-platform website **/

/** Start import Tech Icons **/
import vuejs from '@/assets/tech-icons/vuejs-original.svg';
import nuxtjs from '@/assets/tech-icons/nuxtjs.svg';
import vuetify from '@/assets/tech-icons/vuetify-original.svg';
import bootstrap from '@/assets/tech-icons/bootstrap-original.svg';
import sass from '@/assets/tech-icons/sass-original.svg';
import firebase from '@/assets/tech-icons/firebase.svg';
import swiperjs from '@/assets/tech-icons/swiper-logo.svg';
import pinia from '@/assets/tech-icons/pinia-original.svg';
import laravel from '@/assets/tech-icons/laravel.svg';
import mysql from '@/assets/tech-icons/mysql.svg';
import primeVue from '@/assets/tech-icons/primevue-logo.png';
/** End import Tech Icons **/


const projects  = [
  {
    title: 'Ako Sayara',
    images: [akoSayara1, akoSayara2, akoSayara3, akoSayara4],
    description: 'Built a Nuxt car marketplace for Iraq with advanced search and listings, spare-parts e-commerce, real-time buyer–seller chat, VIN history checks, an AI assistant, seller dashboards, and full English, Arabic, and Kurdish localization.',
    demoLink: 'https://previewuser:acho@951753@akosayara.dev',
    githubLink: '',
    demoLinkEnabled: true,
    githubLinkEnabled: false,
    techUsed: [
      {
        name: 'Nuxt.js',
        src: nuxtjs
      },
      {
        name: 'PrimeVue',
        src: primeVue
      },
      {
        name: 'Pinia',
        src: pinia
      }
    ]
  },
  {
    title: 'Saudi Medical System',
    images: [medsys1, medsys2, medsys3, medsys4],
    description: 'Built a frontend interface for the Saudi Health Systems Company, enhancing user experience for a nationwide provider of therapeutic and nutritional services to hospitals and institutions.',
    demoLink: 'https://www.saudimedsys.com',
    githubLink: '',
    demoLinkEnabled: true,
    githubLinkEnabled: false,
    techUsed: [
      {
        name: 'Nuxt.js',
        src: nuxtjs
      },
      {
        name: 'Vuetify',
        src: vuetify
      },
      {
        name: 'SASS',
        src: sass
      },
      {
        name: 'Swiper.js',
        src: swiperjs
      }
    ]
  },
  {
    title: 'masab.sa',
    images: [masab1, masab2, masab3, masab4],
    description: 'Designed and developed a modern frontend for MASAB, a leading Saudi recycling initiative turning plastic waste into high-quality PET flakes, aligned with Vision 2030 sustainability goals.',
    demoLink: 'https://masab.sa',
    githubLink: '',
    demoLinkEnabled: true,
    githubLinkEnabled: false,
    techUsed: [
      {
        name: 'Bootstrap',
        src: bootstrap
      },
      {
        name: 'SASS',
        src: sass
      },
      {
        name: 'Swiper.js',
        src: swiperjs
      }
    ]
  },
  {
    title: 'Tabbuk Volunteer Association',
    images: [tabok1, tabok2],
    description: 'Developed a website for the Tabbuk Volunteer Association, connecting users with local businesses and services while enabling digital membership, payments, and exclusive discount access.',
    demoLink: 'https://ctva.org.sa',
    githubLink: '',
    demoLinkEnabled: true,
    githubLinkEnabled: false,
    techUsed: [
      {
        name: 'Nuxt.js',
        src: nuxtjs
      },
      {
        name: 'PrimeVue',
        src: primeVue
      },
      {
        name: 'Bootstrap',
        src: bootstrap
      }
    ]
  },
  {
    title: 'Darsy Platform',
    images: [darsyPlatform1, stayTunedImg, projectComingSoonImg],
    description: 'An Arabic Learning Management System, Key features include user authentication, course creation, dashboards, notifications, and an admin panel.',
    demoLink: 'https://zspace.netlify.app',
    githubLink: 'https://github.com/Muhammed-Hossam/darsy-lms-app',
    demoLinkEnabled: false,
    githubLinkEnabled: true,
    techUsed: [
      {
        name: 'Vue.js',
        src: vuejs
      },
      {
        name: 'Vuetify.js',
        src: vuetify
      },
      {
        name: 'SASS',
        src: sass
      },
      {
        name: 'Pinia',
        src: pinia
      },
      {
        name: 'Laravel',
        src: laravel
      },
      {
        name: 'MySQL',
        src: mysql
      },
    ]
  },
]

</script>


<style scoped>

</style>